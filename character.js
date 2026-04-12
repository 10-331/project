// パネル切替
document.querySelectorAll(".menu button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
    document.getElementById(btn.dataset.target).classList.add("active");
  });
});

// トークタブ
document.querySelectorAll(".talk-tabs button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".talk-content").forEach(t=>t.classList.remove("active"));
    document.getElementById("talk-"+btn.dataset.tab).classList.add("active");
  });
});

// モーダル
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

document.querySelectorAll(".zoomable").forEach(img=>{
  img.addEventListener("click",()=>{
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

modal.addEventListener("click",()=>{
  modal.classList.remove("active");
});