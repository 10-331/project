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
var SPEED_MS={slow:48,normal:30,fast:17};

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
document.title="「笹井綾」について ✈ "+DATA.no+" "+DATA.title;

/* ---------- 状態 ---------- */
var started=false, finished=false;
var els=[], curIdx=-1;           // els[i] = 表示済みブロック要素
var typing=null;                 // {el,text,pos,timer}
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
    if(fromIdx>0){ curIdx=fromIdx-1; scrollToBlock(curIdx,false); showNext(true); }
    else startBlock(0);
  });
}
$("npBook").addEventListener("click",function(){ enterReader(resumeIdx); });
$("npBook").addEventListener("keydown",function(e){ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); enterReader(resumeIdx); } });
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
  var el=appendBlock(i,false);
  curIdx=i;
  scrollToBlock(i,true);
  runTyping(el,blocks[i]);
}
function runTyping(el,text){
  stopTyping();
  var pos=0;
  var timer=setInterval(function(){
    var step, done=false;
    if(ffRate>0){ step=Math.max(1,Math.round(ffRate/2)); }
    else step=1;
    pos+=step;
    if(pos>=text.length){ pos=text.length; done=true; }
    el.textContent=text.slice(0,pos);
    if(pos%12===0) scrollToBlock(curIdx,true);
    if(done){ stopTyping(); onBlockDone(); }
  }, ffRate>0?16:(SPEED_MS[settings.speed]||30));
  typing={el:el,text:text,timer:timer};
}
function stopTyping(){ if(typing){ clearInterval(typing.timer); typing=null; } }
function completeTyping(){
  if(!typing) return;
  var t=typing; stopTyping();
  t.el.textContent=t.text;
  onBlockDone();
}
function onBlockDone(){
  scrollToBlock(curIdx,true);
  if(curIdx>=TOTAL-1){ endPhase(); return; }
  showNext(true);
  if(ffRate>0){ clearPending(); pendingTimer=setTimeout(function(){ advance(); },110); }
  else if(autoMode){ clearPending(); pendingTimer=setTimeout(function(){ advance(); }, 800+Math.min(1600, blocks[curIdx].length*14)); }
}
function advance(){
  clearPending();
  if(finished||!started) return;
  if(typing){ completeTyping(); return; }
  if(curIdx+1>=TOTAL){ endPhase(); return; }
  startBlock(curIdx+1);
}
function scrollToBlock(i,smooth){
  var el=els[i]; if(!el) return;
  var y=el.offsetTop-70;
  scrollEl.scrollTo({top:y,behavior:smooth?"smooth":"auto"});
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
  ffStack.querySelectorAll("[data-rate]").forEach(function(b){
    b.classList.toggle("active",+b.getAttribute("data-rate")===rate);
  });
  markActive("ff",rate>0);
  if(typing){ // 速度を即時反映するため現在のブロックを打ち直す
    var el=typing.el, text=typing.text, pos=el.textContent.length;
    stopTyping();
    var t=setInterval(function(){
      var step=rate>0?Math.max(1,Math.round(rate/2)):1;
      pos+=step;
      if(pos>=text.length){ pos=text.length; el.textContent=text; stopTypingSafe(t); onBlockDone(); return; }
      el.textContent=text.slice(0,pos);
    }, rate>0?16:(SPEED_MS[settings.speed]||30));
    typing={el:el,text:text,timer:t};
  } else if(rate>0 && !finished && curIdx>=0 && curIdx<TOTAL-1){
    clearPending(); pendingTimer=setTimeout(function(){ advance(); },110);
  }
  if(rate===0) clearPending();
}
function stopTypingSafe(t){ clearInterval(t); if(typing&&typing.timer===t) typing=null; }

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
  setFf(ffRate===r?0:r);
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
  scrollToBlock(curIdx,true);
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
  if(typing){ var el=typing.el,text=typing.text; var pos=el.textContent.length; stopTyping();
    typing={el:el,text:text,timer:setInterval(function(){
      pos+=1;
      if(pos>=text.length){ el.textContent=text; stopTyping(); onBlockDone(); return; }
      el.textContent=text.slice(0,pos);
    }, SPEED_MS[settings.speed]||30)};
  }
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
