const termData = {
  hama18: {
    title: "HAMA18区",
    body: "独立観光特区のひとつ。\n洗練された観光都市として機能しているが、その景観の隙間には古い気配や説明しきれない余白が残っている。"
  },
  "tourist-zone": {
    title: "独立観光特区",
    body: "観光産業を推進するために成立した特区。\n一般的な都市運営とは異なる優先順位で管理され、表向きには華やかさと利便性が強調される。"
  },
  discomfort: {
    title: "違和感",
    body: "綾がHAMAで暮らす中で繰り返し覚える感覚。\n日常の風景の中に紛れているが、失われた記憶や過去の断片と結びついている。"
  },
  deviant: {
    title: "変異体",
    body: "既知の分類や管理基準から逸脱した存在。\n一般にはほとんど語られず、秘匿機関の管理対象として扱われる。"
  },
  "local-bureau": {
    title: "防衛省 地方支分部局",
    body: "中央の統制下にありながら、地域単位で異常事案や秘匿記録の実務を扱う機関。\n表社会からはほとんど見えない。"
  },
  "s-bureau": {
    title: "S局",
    body: "異常事案、秘匿記録、回収対象の管理に関わる部署。\n真実を保存する場所であると同時に、真実を隔離する場所でもある。"
  },
  classified: {
    title: "秘匿記録",
    body: "公的には開示されない記録群。\n保存されることで真実が残される一方、秘匿されることで一般社会から切り離される。"
  },
  kamikakushi: {
    title: "神隠し",
    body: "綾の過去に深く結びついた集団消失事案。\n説明のつかない欠落として扱われており、彼女の違和感の根源とつながっている。"
  },
  village: {
    title: "お里",
    body: "綾の記憶の奥底に残る閉ざされた共同体。\n地図から失われたあとも、音や習俗の気配として残り続けている。"
  },
  bell: {
    title: "鈴の音",
    body: "綾を呼ぶ感覚とともに反復される象徴的な音。\n祭囃子や因習、沈んだ記憶の底と結びつく手がかり。"
  }
};

const modal = document.getElementById("termModal");
const modalBackdrop = document.getElementById("termModalBackdrop");
const modalClose = document.getElementById("termModalClose");
const modalTitle = document.getElementById("termModalTitle");
const modalBody = document.getElementById("termModalBody");
const keywordButtons = document.querySelectorAll(".world-keyword");

function openTermModal(key) {
  const item = termData[key];
  if (!item || !modal || !modalTitle || !modalBody) return;

  modalTitle.textContent = item.title;
  modalBody.textContent = item.body;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeTermModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

keywordButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTermModal(button.dataset.term);
  });
});

if (modalBackdrop) {
  modalBackdrop.addEventListener("click", closeTermModal);
}

if (modalClose) {
  modalClose.addEventListener("click", closeTermModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeTermModal();
  }
});
