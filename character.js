const mainMenuButtons = document.querySelectorAll(".main-menu-btn");
const contentPanels = document.querySelectorAll(".content-panel");

const visualTabs = document.querySelectorAll("[data-visual-tab]");
const visualPanels = document.querySelectorAll("#panel-visual .sub-panel");

const talkTabs = document.querySelectorAll("[data-talk-tab]");
const talkPanels = document.querySelectorAll("#panel-talk .sub-panel");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imageModalImg");

const relationFromAya = document.getElementById("relationFromAya");
const relationToAya = document.getElementById("relationToAya");
const relationSelector = document.getElementById("relationSelector");

/* ===== パネル切替 ===== */
function showPanel(id){
  contentPanels.forEach(p=>{
    p.classList.toggle("is-active", p.id === `panel-${id}`);
  });
  mainMenuButtons.forEach(b=>{
    b.classList.toggle("is-active", b.dataset.panel === id);
  });
}

mainMenuButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    showPanel(btn.dataset.panel);
  });
});

/* ===== タブ ===== */
visualTabs.forEach(btn=>{
  btn.onclick = ()=>{
    visualTabs.forEach(b=>b.classList.remove("is-active"));
    visualPanels.forEach(p=>p.classList.remove("is-active"));

    btn.classList.add("is-active");
    document.getElementById("visual-"+btn.dataset.visualTab).classList.add("is-active");
  };
});

talkTabs.forEach(btn=>{
  btn.onclick = ()=>{
    talkTabs.forEach(b=>b.classList.remove("is-active"));
    talkPanels.forEach(p=>p.classList.remove("is-active"));

    btn.classList.add("is-active");
    document.getElementById("talk-"+btn.dataset.talkTab).classList.add("is-active");
  };
});

/* ===== モーダル ===== */
document.querySelectorAll("[data-image]").forEach(el=>{
  el.onclick = ()=>{
    modal.classList.add("is-open");
    modalImg.src = el.dataset.image;
  };
});

document.querySelector(".image-modal-backdrop").onclick = ()=>modal.classList.remove("is-open");
document.querySelector(".image-modal-close").onclick = ()=>modal.classList.remove("is-open");

/* ===== 関係性 ===== */
const relationData = [
  { name:"添", from:"甘えたいのに引く", to:"放っておけない" },
  { name:"陽葵", from:"安心できる", to:"一人にしない" },
];

function initRelation(){
  relationSelector.innerHTML = "";

  relationData.forEach((r,i)=>{
    const btn = document.createElement("button");
    btn.className = "relation-btn";
    btn.textContent = r.name;

    if(i===0){
      btn.classList.add("is-active");
      relationFromAya.textContent = r.from;
      relationToAya.textContent = r.to;
    }

    btn.onclick = ()=>{
      document.querySelectorAll(".relation-btn").forEach(b=>b.classList.remove("is-active"));
      btn.classList.add("is-active");

      relationFromAya.style.opacity=0;
      relationToAya.style.opacity=0;

      setTimeout(()=>{
        relationFromAya.textContent=r.from;
        relationToAya.textContent=r.to;
        relationFromAya.style.opacity=1;
        relationToAya.style.opacity=1;
      },80);
    };

    relationSelector.appendChild(btn);
  });
}

initRelation();