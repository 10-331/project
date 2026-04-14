const revealTargets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.22,
  rootMargin: "0px 0px -12% 0px"
});

revealTargets.forEach((el) => observer.observe(el));

const termData = {
  hama18: {
    title: "HAMA18区",
    body: "独立観光特区のひとつ。\n観光のために整えられた街区でありながら、その隙間には古い気配や説明しきれない余白が残っている。"
  },
  "tourist-zone": {
    title: "独立観光特区",
    body: "観光産業を強く推進するために成立した特区。\n一般的な都市運営とは異なる優先順位で管理され、表向きには華やかさと利便性が強調される。"
  },
  deviant: {
    title: "変異体",
    body: "既知の分類や管理基準から逸脱した存在。\n一般にはほとんど語られず、秘匿機関の管理対象として扱われる。"
  },
  "local-bureau": {
    title: "防衛省 地方支分部局",
    body: "中央の統制下にありながら、地域単位で異常事案や秘匿記録の実務を扱う機関。\n表社会からはほとんど見えない。"
  },
  kamikakushi: {
    title: "神隠し",
    body: "綾の過去に深く結びついた集団消失事案。\n説明のつかない欠落として扱われており、彼女の違和感の根源とつながっている。"
  },
  bell: {
    title: "鈴の音",
    body: "綾を呼ぶ感覚とともに反復される象徴的な音。\n祭囃子や因習、沈んだ記憶の底と結びつく手がかり。"
  }
};

const termModal = document.getElementById("termModal");
const termModalBackdrop = document.getElementById("termModalBackdrop");
const termModalClose = document.getElementById("termModalClose");
const termModalTitle = document.getElementById("termModalTitle");
const termModalBody = document.getElementById("termModalBody");
const worldTriggers = document.querySelectorAll(".world-trigger");

function openTermModal(key) {
  const item = termData[key];
  if (!item) return;

  termModalTitle.textContent = item.title;
  termModalBody.textContent = item.body;
  termModal.classList.add("is-open");
  termModal.setAttribute("aria-hidden", "false");
}

function closeTermModal() {
  termModal.classList.remove("is-open");
  termModal.setAttribute("aria-hidden", "true");
}

worldTriggers.forEach((button) => {
  button.addEventListener("click", () => {
    openTermModal(button.dataset.term);
  });
});

if (termModalBackdrop) {
  termModalBackdrop.addEventListener("click", closeTermModal);
}

if (termModalClose) {
  termModalClose.addEventListener("click", closeTermModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && termModal.classList.contains("is-open")) {
    closeTermModal();
  }
});