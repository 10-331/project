/* ============================================================
NOVEL PLAY ― ノベルモードリーダー（C-6.5 実測文法）の綾版ロジック
本文は assets/novel-data.js（novel/story1〜5.txt から機械生成、無改変）。
状態は localStorage に保存：
  ayaNovelProgress {track, idx}  中断位置（idx = 読了したブロック数）
  ayaNovelRead     [track,...]   読了した話（novel.html の Checked と同期）
  ayaNovelFavs     {track:[i]}   ログのハート（お気に入り）
  ayaNovelSettings {speed, font} 文字送り／文字サイズ
============================================================ */
(function(){
"use strict";
var LS={progress:"ayaNovelProgress",read:"ayaNovelRead",favs:"ayaNovelFavs",settings:"ayaNovelSettings"};
function lsGet(k,d){ try{ var v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch(e){ return d; } }
function lsSet(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){} }
function lsDel(k){ try{ localStorage.removeItem(k); }catch(e){} }

/* ---------- 話の決定 ---------- */
var params=new URLSearchParams(location.search);
var track=parseInt(params.get("track")||"1",10);
if(!(track>=1&&track<=5)) track=1;
var DATA=(window.NOVEL_DATA||{})[String(track)];
if(!DATA){ location.replace("novel.html"); return; }
var blocks=DATA.blocks, TOTAL=blocks.length;

var settings=lsGet(LS.settings,{speed:"normal",font:"normal"});
/* 文字送り速度（1文字あたりms）。変遷：
   初版 {slow:48,normal:30,fast:17} → 実機FB「食い気味で速い」で
   {90,55,32} まで落としたが、今度は「かくかくして遅い」とのFB（2026-11-09 第2弾）。
   描画を rAF 駆動にして滑らかさを確保した上で、基準は公式アプリの
   オート再生に近い ふつう≒30ms/字（約33字/秒）へ戻し、3段階の比率は
   従来どおり（90:55:32 を 30 基準に換算）で全体を速めた */
var SPEED_MS={slow:49,normal:30,fast:17};

/* ---------- 要素 ---------- */
function $(id){ return document.getElementById(id); }
var fade=$("npFade"), cover=$("npCover"), reader=$("npReader"),
    scrollEl=$("npScroll"), page=$("npPage"),
    burger=$("npBurger"), menubar=$("npMenubar"), ffStack=$("npFfStack"),
    nextPin=$("npNext"), endband=$("npEndband"), endactions=$("npEndactions"),
    logEl=$("npLog"), logList=$("npLogList"), logScroll=$("npLogScroll"),
    quitDialog=$("npQuitDialog"), etcDialog=$("npEtcDialog");

$("tkNo").textContent=DATA.no;
$("tkTitle").textContent=DATA.title;
document.title="「笹井綾」について ― "+DATA.no+" "+DATA.title;

/* ---------- 状態 ---------- */
var started=false, finished=false;
var els=[], curIdx=-1;           // els[i] = 表示済みブロック要素
var typing=null;                 // {el,text,pos,acc,last,raf} rAFループが唯一の書き手
var autoMode=false, ffRate=0, uiHidden=false;
var pendingTimer=null;           // AUTO／早送りの次ブロック予約

function clearPending(){ if(pendingTimer){ clearTimeout(pendingTimer); pendingTimer=null; } }

/* ---------- 暗転ユーティリティ ---------- */
function fadeIn(){ requestAnimationFrame(function(){ fade.classList.add("off"); }); }
function blackout(cb,hold){
  fade.classList.remove("off");
  setTimeout(function(){ cb&&cb(); setTimeout(fadeIn,hold||60); },580);
}

/* ---------- 表紙フェイズ ---------- */
var savedProgress=lsGet(LS.progress,null);
var resumeIdx=0;
if(savedProgress && savedProgress.track===track && savedProgress.idx>0 && savedProgress.idx<TOTAL){
  resumeIdx=savedProgress.idx;
  $("npResume").hidden=false;
  $("npCoverHint").textContent="タップで続きから読めます";
}
function enterReader(fromIdx){
  if(started) return; started=true;
  blackout(function(){
    cover.hidden=true; reader.hidden=false;
    for(var i=0;i<fromIdx;i++) appendBlock(i,true);
    if(fromIdx>0){ curIdx=fromIdx-1; scrollToBlock(curIdx); showNext(true); }
    else startBlock(0);
  });
}
$("npBook").addEventListener("click",function(){ enterReader(resumeIdx); });
$("npBook").addEventListener("keydown",function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); enterReader(resumeIdx); } });
/* 表紙画面は全面タップで開始できる（旧実装は本＝チケット部分しか反応せず、
   「チケット部分しか当たり判定がない」と実機FBで指摘された）。
   BACK リンクや再開ボタンなど、a／button の上はそれぞれの動作を優先する */
cover.addEventListener("click",function(e){
  var t=e.target;
  if(t && t.closest && t.closest("a,button")) return;
  enterReader(resumeIdx);
});
$("npResumeBtn").addEventListener("click",function(e){ e.stopPropagation(); enterReader(resumeIdx); });
$("npRestartBtn").addEventListener("click",function(e){
  e.stopPropagation(); lsDel(LS.progress); resumeIdx=0; enterReader(0);
});

/* ---------- 本文表示 ---------- */
function appendBlock(i,instant){
  var el=document.createElement("p");
  el.className="np-block";
  el.textContent=instant?blocks[i]:"";
  page.appendChild(el);
  els[i]=el;
  return el;
}
function startBlock(i){
  hideNext();
  followPause=false;
  var el=appendBlock(i,false);
  curIdx=i;
  /* 直列化：ブロック追加 → スクロール即時確定 → タイピング開始。
     スクロールはアニメーションさせず scrollTop を直接指定して
     タイピングの描画と同じフレームで確定させる。旧実装は smooth
     スクロールのアニメーション中にタイピングが走り、iOS Safari の
     再描画と競合して文字が重なって見えた（実機FB 2026-11-09） */
  scrollToBlock(i);
  runTyping(el,blocks[i]);
}
/* タイピングは requestAnimationFrame 駆動の単一ループが唯一の書き手。
   旧実装は 40ms 周期タイマーで文字追加が量子化され、実機では
   「かくかくして遅い」と感じられた（実機FB 2026-11-09 第2弾）。
   rAF ではフレームの経過時間から表示文字数を連続的に決め、端数は
   typing.acc に蓄積して次のフレームへ持ち越すため、チャンク感のない
   滑らかな字送りになる。速度は「文字/秒」で持ち、設定速度と早送り
   倍率を毎フレーム読むため、再生中の変更は打ち直しなしで即時反映。
   追記は対象ブロック（typing.el）に対してのみ行う。
   早送り×8以上では、高速タイピング自体が残像・重なりの原因になるため、
   1文字ずつ打たずブロック単位でまとめて表示する（間隔は onBlockDone 側） */
function charsPerSec(){
  var cps=1000/(SPEED_MS[settings.speed]||30);
  if(ffRate>0) cps*=ffRate;
  return cps;
}
function runTyping(el,text){
  stopTyping();
  if(ffRate>=8 || text.length===0){
    el.textContent=text; /* ブロック単位表示：全文を一度に確定させる */
    onBlockDone();
    return;
  }
  typing={el:el,text:text,pos:0,acc:0,last:0,raf:0};
  typing.raf=requestAnimationFrame(typeFrame);
}
function typeFrame(ts){
  if(!typing) return;
  if(typeof ts!=="number") ts=performance.now();
  if(!typing.last){ typing.last=ts; typing.raf=requestAnimationFrame(typeFrame); return; }
  var dt=ts-typing.last; typing.last=ts;
  if(dt>100) dt=100; /* タブ復帰時などの大きな飛びで一気に進めない */
  if(dt>0){
    typing.acc+=charsPerSec()*dt/1000;
    var step=Math.floor(typing.acc);
    if(step>0){
      typing.acc-=step;
      typing.pos+=step;
      var done=false;
      if(typing.pos>=typing.text.length){ typing.pos=typing.text.length; done=true; }
      typing.el.textContent=typing.text.slice(0,typing.pos);
      queueFollowScroll(); /* スクロール確定は次フレームへ分離（残像対策：第3弾） */
      if(done){ stopTyping(); onBlockDone(); return; }
    }
  }
  typing.raf=requestAnimationFrame(typeFrame);
}
function stopTyping(){ if(typing){ if(typing.raf) cancelAnimationFrame(typing.raf); typing=null; } }
function completeTyping(){
  if(!typing) return;
  var t=typing; stopTyping();
  /* 残像対策（第3弾）：タップ送りで即時完了させる時は、全文を書き込む前に
     スクロール位置を先に確定させ、書き込みとスクロール移動を重ねない */
  followScroll();
  t.el.textContent=t.text;
  onBlockDone();
}
function onBlockDone(){
  queueFollowScroll();
  if(curIdx>=TOTAL-1){ endPhase(); return; }
  showNext(true);
  /* 次ブロックまでの間：早送り時は固定350ms、AUTO時は
     「固定600ms＋文字数比例（12ms/字・上限1800ms）」の読み時間を置く。
     旧 AUTO 間隔（1200ms＋25ms/字）は公式アプリのオートより間延びして
     感じられたため、速度の見直し（実機FB 第2弾）に合わせて詰めた */
  if(ffRate>0){ clearPending(); pendingTimer=setTimeout(function(){ advance(); },350); }
  else if(autoMode){ clearPending(); pendingTimer=setTimeout(function(){ advance(); }, 600+Math.min(1800, blocks[curIdx].length*12)); }
}
function advance(){
  clearPending();
  if(finished||!started) return;
  if(typing){ completeTyping(); return; }
  if(curIdx+1>=TOTAL){ endPhase(); return; }
  startBlock(curIdx+1);
}
/* スクロールは全て scrollTop の直接指定（アニメーションなし）。
   ユーザーが自分でスクロールした間は追随を止める（followPause） */
var followPause=false;
scrollEl.addEventListener("wheel",function(){ followPause=true; },{passive:true});
scrollEl.addEventListener("touchmove",function(){ followPause=true; },{passive:true});
function scrollToBlock(i){
  var el=els[i]; if(!el) return;
  scrollEl.scrollTop=Math.max(0,el.offsetTop-70);
}
/* 残像対策（実機FB 第3弾・試行）：タイピングの文字追記と scrollTop の
   変更を同一フレームに重ねると、iOS Safari で既存行が二重に描画される
   残像フレームが残った。スクロール確定を rAF で次フレームへ送り、
   追記（描画）とスクロール移動のタスクを分ける。既に予約済みなら
   重ねて予約しない（1フレームに最大1回） */
var scrollQueued=false;
function queueFollowScroll(){
  if(scrollQueued) return;
  scrollQueued=true;
  requestAnimationFrame(function(){ scrollQueued=false; followScroll(); });
}
/* タイピング中：現在のブロックの末尾が画面外に出た時だけ、
   末尾が見える位置まで即時スクロールする */
function followScroll(){
  if(followPause) return;
  var el=els[curIdx]; if(!el) return;
  var vh=scrollEl.clientHeight;
  var target=Math.max(el.offsetTop-70, el.offsetTop+el.offsetHeight-vh+56);
  if(target<0) target=0;
  if(Math.abs(scrollEl.scrollTop-target)>1) scrollEl.scrollTop=target;
}
function showNext(v){ nextPin.classList.toggle("show",!!v); }
function hideNext(){ showNext(false); }

/* ---------- 終了 ---------- */
function endPhase(){
  if(finished) return; finished=true;
  hideNext(); clearPending();
  var read=lsGet(LS.read,[]);
  if(read.indexOf(track)<0){ read.push(track); lsSet(LS.read,read); }
  var p=lsGet(LS.progress,null);
  if(p&&p.track===track) lsDel(LS.progress);
  $("npEndbandText").textContent = track<5 ? "To be continued..." : "STORY CLEAR!!!";
  endband.hidden=false;
  requestAnimationFrame(function(){ endband.classList.add("show"); });
  if(track<5){
    var nx=$("npNextTrack");
    nx.href="novel-play.html?track="+(track+1);
  } else {
    $("npNextTrack").hidden=true;
  }
  setTimeout(function(){ endactions.hidden=false; },650);
}

/* ---------- タップで進む（スクロール操作と区別） ---------- */
var pDown=null;
scrollEl.addEventListener("pointerdown",function(e){ pDown={x:e.clientX,y:e.clientY}; });
scrollEl.addEventListener("pointerup",function(e){
  if(!pDown) return;
  var dx=e.clientX-pDown.x, dy=e.clientY-pDown.y; pDown=null;
  if(dx*dx+dy*dy>64) return; // ドラッグ／スクロールは進めない
  if(uiHidden){ setUiHidden(false); return; }
  if(!menubar.hidden) return;  // メニュー表示中は本文を進めない
  advance();
});
nextPin.addEventListener("click",function(){ advance(); });

/* ---------- メニューバー ---------- */
function setMenu(open){
  menubar.hidden=!open;
  burger.classList.toggle("open",open);
  burger.setAttribute("aria-label",open?"メニューを閉じる":"メニュー");
  if(!open) ffStack.hidden=true;
}
burger.addEventListener("click",function(){ setMenu(menubar.hidden); });
function markActive(name,on){
  var b=menubar.querySelector('[data-menu="'+name+'"]');
  if(b) b.classList.toggle("active",!!on);
}
function setUiHidden(v){
  uiHidden=v;
  reader.classList.toggle("ui-hidden",v);
  markActive("uihide",v);
  if(v){ setMenu(false); ffStack.hidden=true; }
}
function setAuto(v){
  autoMode=v; markActive("auto",v);
  if(v && !typing && !finished && curIdx>=0 && curIdx<TOTAL-1){
    clearPending(); pendingTimer=setTimeout(function(){ advance(); },600);
  }
  if(!v) clearPending();
}
function setFf(rate){
  ffRate=rate;
  /* 現在の倍率が一目で分かる表示にする（実機FB 第2弾：戻し方が分かりにくい）：
     - ピルは ×1（通常）も含めて選択中を active にする
     - 「早送り」ボタンのラベルに現在の倍率を出す（×1 の時は従来表示） */
  ffStack.querySelectorAll("[data-rate]").forEach(function(b){
    var br=+b.getAttribute("data-rate");
    b.classList.toggle("active", rate===0 ? br===1 : br===rate);
  });
  var ffBtn=menubar.querySelector('[data-menu="ff"]');
  if(ffBtn) ffBtn.textContent = rate>0 ? "早送り ×"+rate : "早送り";
  markActive("ff",rate>0);
  /* タイピング中は rAF ループが毎フレーム倍率を読むため、打ち直しなしで
     即時反映される。タイピング速度とブロック間の間（onBlockDone）の
     両方に同じ倍率の考え方を適用 */
  if(!typing){
    clearPending();
    if(rate>0 && !finished && curIdx>=0 && curIdx<TOTAL-1){
      pendingTimer=setTimeout(function(){ advance(); },350);
    }
  }
}

menubar.addEventListener("click",function(e){
  var b=e.target.closest("[data-menu]"); if(!b) return;
  var name=b.getAttribute("data-menu");
  if(name==="back"){
    setMenu(false); goBack();
  } else if(name==="auto"){
    setAuto(!autoMode);
  } else if(name==="ff"){
    ffStack.hidden=!ffStack.hidden;
  } else if(name==="skip"){
    setMenu(false); doSkip();
  } else if(name==="log"){
    setMenu(false); openLog();
  } else if(name==="uihide"){
    setUiHidden(true);
  } else if(name==="quit"){
    setMenu(false); quitDialog.hidden=false;
  } else if(name==="etc"){
    setMenu(false); syncEtc(); etcDialog.hidden=false;
  }
});
ffStack.addEventListener("click",function(e){
  var b=e.target.closest("[data-rate]"); if(!b) return;
  var r=+b.getAttribute("data-rate");
  if(r===1){ setFf(0); ffStack.hidden=true; return; } /* 「×1 通常」で通常速度へ戻す */
  setFf(ffRate===r?0:r); /* 選択中のピルを再タップしても ×1 に戻れる */
  if(ffRate===0) ffStack.hidden=true;
});

/* もどる：1ブロック戻す（現在のブロックと1つ前を取り除き、前のブロックを打ち直す） */
function goBack(){
  clearPending();
  if(finished||curIdx<0) return;
  stopTyping();
  var i=curIdx;
  if(els[i]){ els[i].remove(); els[i]=undefined; }
  var target=Math.max(0,i-1);
  if(els[target]){ els[target].remove(); els[target]=undefined; }
  curIdx=target-1;
  hideNext();
  startBlock(target);
}
/* SKIP：残りを一括表示して終了へ */
function doSkip(){
  clearPending(); stopTyping();
  for(var i=0;i<TOTAL;i++){
    if(!els[i]) appendBlock(i,true);
    else els[i].textContent=blocks[i];
  }
  curIdx=TOTAL-1;
  scrollToBlock(curIdx);
  endPhase();
}

/* ---------- ログ ---------- */
function favsFor(){ var f=lsGet(LS.favs,{}); return f[String(track)]||[]; }
function openLog(){
  completeTypingSafe();
  clearPending(); // ログ表示中に裏で進まないようにする
  var favs=favsFor();
  logList.innerHTML="";
  var upto=Math.max(curIdx,0);
  for(var i=0;i<=upto;i++){
    (function(i){
      var entry=document.createElement("div");
      entry.className="np-log-entry";
      var p=document.createElement("p");
      p.className="np-log-text";
      p.textContent=blocks[i];
      var heart=document.createElement("button");
      heart.type="button";
      heart.className="np-heart"+(favs.indexOf(i)>=0?" on":"");
      heart.setAttribute("aria-label","お気に入り");
      heart.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5C6.5 16.6 3.5 13.4 3.5 9.9A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8.5 2.9c0 3.5-3 6.7-8.5 10.6z"/></svg>';
      heart.addEventListener("click",function(){
        var f=lsGet(LS.favs,{}), arr=f[String(track)]||[];
        var k=arr.indexOf(i);
        if(k>=0) arr.splice(k,1); else arr.push(i);
        f[String(track)]=arr; lsSet(LS.favs,f);
        heart.classList.toggle("on",k<0);
      });
      entry.appendChild(p); entry.appendChild(heart);
      logList.appendChild(entry);
    })(i);
  }
  logEl.hidden=false;
  logScroll.scrollTop=0;
}
function completeTypingSafe(){ if(typing) completeTyping(); }
$("npLogClose").addEventListener("click",function(){ logEl.hidden=true; });

/* ---------- 中断 ---------- */
$("npQuitCancel").addEventListener("click",function(){ quitDialog.hidden=true; });
quitDialog.addEventListener("click",function(e){ if(e.target===quitDialog) quitDialog.hidden=true; });
$("npQuitOk").addEventListener("click",function(){
  // 再開位置＝読了したブロック数（タイピング中のブロックは頭から）
  var idx = typing ? curIdx : curIdx+1;
  if(idx>0 && idx<TOTAL) lsSet(LS.progress,{track:track,idx:idx});
  else if(idx>=TOTAL){ /* 読了済みなら保存しない */ }
  else lsDel(LS.progress);
  location.href="novel.html";
});

/* ---------- その他（設定） ---------- */
function applySettings(){
  document.documentElement.style.setProperty("--np-fs", settings.font==="large"?"19.5px":"17px");
  page.style.setProperty("--np-fs", settings.font==="large"?"19.5px":"17px");
  page.style.fontSize = settings.font==="large"?"19.5px":"17px";
}
function syncEtc(){
  $("npSpeedOpts").querySelectorAll("[data-speed]").forEach(function(b){
    b.classList.toggle("active",b.getAttribute("data-speed")===settings.speed);
  });
  $("npFontOpts").querySelectorAll("[data-font]").forEach(function(b){
    b.classList.toggle("active",b.getAttribute("data-font")===settings.font);
  });
}
$("npSpeedOpts").addEventListener("click",function(e){
  var b=e.target.closest("[data-speed]"); if(!b) return;
  settings.speed=b.getAttribute("data-speed"); lsSet(LS.settings,settings); syncEtc();
  /* タイピング中でも rAF ループが毎フレーム速度を読むため、打ち直しなしで即時反映される */
});
$("npFontOpts").addEventListener("click",function(e){
  var b=e.target.closest("[data-font]"); if(!b) return;
  settings.font=b.getAttribute("data-font"); lsSet(LS.settings,settings); applySettings(); syncEtc();
});
$("npEtcClose").addEventListener("click",function(){ etcDialog.hidden=true; });
etcDialog.addEventListener("click",function(e){ if(e.target===etcDialog) etcDialog.hidden=true; });

/* ---------- 初期化 ---------- */
applySettings();
fadeIn();
})();
