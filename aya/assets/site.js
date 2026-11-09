/* 笹井綾 総まとめサイト 共通JS */
// フライト情報ティッカー：実時刻を「便情報」風に表示する
(function(){
  var el=document.getElementById('ticker-clock');
  if(!el) return;
  function pad(n){return (n<10?'0':'')+n;}
  function tick(){
    var d=new Date();
    var w=['SUN','MON','TUE','WED','THU','FRI','SAT'][d.getDay()];
    el.textContent=d.getFullYear()+'.'+pad(d.getMonth()+1)+'.'+pad(d.getDate())+
      ' ('+w+') '+pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds());
  }
  tick(); setInterval(tick,1000);
  var upd=document.getElementById('latest-update');
  if(upd){ upd.textContent=el.textContent; }
})();

// ===== 共通ヘッダー／フッターの公式化（2026-11-09） =====
// 公式 18trip.jp のヘッダー／フッター文法を、全ページ共通部品として注入する。
// ・ヘッダー：2本線ハンバーガー＋全画面メニュー（背景ブラインド開閉、
//   巨大MENUウォーターマーク、コラージュ状リンク、hd_items の浮遊）
// ・BACK TO TOP：ライム円ボタン（文字リング回転、スクロールでスライドイン）
// ・フッター：フレームコーナー／左右帯のスライドイン、ft_item_1 の浮遊、作品情報 dl
(function(){
  var A='assets/official/';

  /* ---- ハンバーガー＋メニュー ---- */
  var header=document.querySelector('.site-header');
  var overlay=null, ham=null;
  if(header){
    ham=document.createElement('button');
    ham.className='ham'; ham.type='button';
    ham.setAttribute('aria-label','MENU');
    ham.innerHTML='<span></span><span></span>';
    header.appendChild(ham);

    // メニューのリンクは既存の共通ナビ（ヘッダー＋フッター）から収集して一意化
    var seen={}, links=[];
    document.querySelectorAll('.globalnav a, .site-footer nav a').forEach(function(a){
      var href=a.getAttribute('href');
      if(!href || seen[href]) return; seen[href]=1;
      links.push({href:href, label:a.textContent.trim(),
        current:a.getAttribute('aria-current')==='page'});
    });
    var subs={'index.html':'TOP','character.html':'CHARACTER','story.html':'STORY',
      'terms.html':'TERMS','event-camelia.html':'EVENT','ten.html':'TEN'};
    var items='';
    for(var i=1;i<=13;i++){
      items+='<p class="items--'+i+'"><span class="eff--vertical"><span class="eff--horizon">'+
        '<img src="'+A+'common_hd_items_'+i+'.png" alt="">'+'</span></span></p>';
    }
    var listHtml=links.map(function(l){
      var key=l.href.replace('.html','').replace('event-camelia','event');
      return '<a class="m--'+key+'" href="'+l.href+'"'+
        (l.current?' aria-current="page"':'')+'>'+l.label+
        '<small>'+(subs[l.href]||'')+' ✈✈✈</small></a>';
    }).join('');
    overlay=document.createElement('div');
    overlay.className='menu-overlay';
    overlay.innerHTML=
      '<div class="menu-bg"></div>'+
      '<div class="menu-inner">'+
        '<p class="menu-title">MENU</p>'+
        '<nav class="menu-list">'+listHtml+'</nav>'+
        '<p class="menu-logo">AYA TRIP<small>SASAI AYA ARCHIVE</small></p>'+
        '<p class="menu-copy">AYA TRIP — SASAI AYA ARCHIVE.<br>'+
        '2055, HAMA. A record of a girl who lives only in the present,<br>'+
        'and of everything she has lost.</p>'+
        '<div class="menu-items">'+items+'</div>'+
      '</div>';
    document.body.appendChild(overlay);

    var open=false;
    function setMenu(to){
      open=to;
      ham.classList.toggle('is--open',to);
      document.body.classList.toggle('menu-open',to);
      if(to){
        overlay.classList.add('is--open');
        requestAnimationFrame(function(){requestAnimationFrame(function(){
          overlay.classList.add('is--shown');
        });});
      }else{
        overlay.classList.remove('is--shown');
        setTimeout(function(){ if(!open) overlay.classList.remove('is--open'); },650);
      }
    }
    ham.addEventListener('click',function(){ setMenu(!open); });
    overlay.querySelector('.menu-bg').addEventListener('click',function(){ setMenu(false); });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape' && open) setMenu(false);
    });
  }

  /* ---- BACK TO TOP 円形ボタン ---- */
  var btt=document.createElement('a');
  btt.className='backtotop'; btt.href='#';
  btt.setAttribute('aria-label','BACK TO TOP');
  btt.innerHTML='<span class="btt-text"></span><span class="btt-icon"></span>';
  document.body.appendChild(btt);
  btt.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({top:0,behavior:'smooth'});
  });
  var onScroll=function(){
    btt.classList.toggle('is--show', window.scrollY>500);
  };
  window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

  /* ---- フッター：フレーム／アイテム／作品情報の注入 ---- */
  var footer=document.querySelector('.site-footer');
  if(footer){
    var frag=document.createElement('div');
    frag.innerHTML=
      '<span class="ft-corner ft-corner--l"></span>'+
      '<span class="ft-corner ft-corner--r"></span>'+
      '<p class="ft-item"><span class="eff--vertical"><span class="eff--horizon">'+
        '<img src="'+A+'common_ft_item_1.png" alt="">'+'</span></span></p>'+
      '<div class="ft-desc">'+
        '<p class="ft-logo">AYA TRIP<small>SASAI AYA ARCHIVE</small></p>'+
        '<div>'+
          '<dl><dt>タイトル</dt><dd>笹井綾 総まとめアーカイブ</dd></dl>'+
          '<dl><dt>ジャンル</dt><dd>一次創作×二次創作 夢創作</dd></dl>'+
          '<dl><dt>公開範囲</dt><dd>個人アーカイブ（非公開）</dd></dl>'+
        '</div>'+
        '<p class="ft-rights">COPYRIGHT<br>© SASAI AYA ARCHIVE</p>'+
      '</div>';
    while(frag.firstChild) footer.insertBefore(frag.firstChild, footer.firstChild);

    var sideL=document.createElement('span'); sideL.className='ft-side ft-side--l';
    var sideR=document.createElement('span'); sideR.className='ft-side ft-side--r';
    document.body.appendChild(sideL); document.body.appendChild(sideR);

    if('IntersectionObserver' in window){
      var io=new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          var on=en.isIntersecting;
          footer.classList.toggle('is--limit',on);
          sideL.classList.toggle('is--limit',on);
          sideR.classList.toggle('is--limit',on);
        });
      },{threshold:.05});
      io.observe(footer);
    }else{
      footer.classList.add('is--limit');
      sideL.classList.add('is--limit'); sideR.classList.add('is--limit');
    }
  }
})();

// MEMBERS切替（index）
(function(){
  var tabs=document.querySelectorAll('[data-member-tab]');
  if(!tabs.length) return;
  tabs.forEach(function(btn){
    btn.addEventListener('click',function(){
      tabs.forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      document.querySelectorAll('[data-member-panel]').forEach(function(p){
        p.style.display=(p.getAttribute('data-member-panel')===btn.getAttribute('data-member-tab'))?'block':'none';
      });
    });
  });
})();

// SIDE切替（story）
(function(){
  var tabs=document.querySelectorAll('[data-side-tab]');
  if(!tabs.length) return;
  tabs.forEach(function(btn){
    btn.addEventListener('click',function(){
      tabs.forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      document.querySelectorAll('[data-side-panel]').forEach(function(p){
        p.style.display=(p.getAttribute('data-side-panel')===btn.getAttribute('data-side-tab'))?'block':'none';
      });
    });
  });
})();
