const menuCards = document.querySelectorAll(".menu-card");
const contentPanels = document.querySelectorAll(".content-panel");

const visualTabs = document.querySelectorAll("[data-visual-tab]");
const visualPanels = document.querySelectorAll("#panel-visual .subpanel");

const talkTabs = document.querySelectorAll("[data-talk-tab]");
const talkPanels = document.querySelectorAll("#panel-talk .subpanel");

const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const imageModalClose = document.getElementById("imageModalClose");

const relationFromAya = document.getElementById("relationFromAya");
const relationToAya = document.getElementById("relationToAya");
const relationSelector = document.getElementById("relationSelector");

const menuStack = document.querySelector(".menu-stack");
const floatingContent = document.querySelector(".floating-content");

const relationData = [
  {
    id: "ten",
    name: "添",
    fromAya: "うまく言葉にできない。\nけれど、言葉にするべきではないと思っている。",
    toAya: "チョロい女。\n自分の知らないところで何かしているのは気に入らない。"
  },
  {
    id: "himawari",
    name: "陽葵",
    fromAya: "親友。\n昔からずっと一緒にいた子……の、はず。",
    toAya: "？？？"
  },
  {
    id: "rinon",
    name: "燐音",
    fromAya: "可愛い可愛いインターン生。\nツッコミが鋭くて会話が楽しい。",
    toAya: "？？？"
  },
  {
    id: "rakuro",
    name: "落露",
    fromAya: "行きつけのバーにいるお姉さん。一緒に飲んでも後半は酔って忘れちゃう。",
    toAya: "？？？"
  }
];

function clearActiveMenu() {
  menuCards.forEach((card) => card.classList.remove("is-active"));
}

function hidePanels() {
  contentPanels.forEach((panel) => panel.classList.remove("is-active"));
}

function resetCharacterView() {
  hidePanels();
  clearActiveMenu();
}

function showPanel(panelId, cardEl) {
  hidePanels();
  clearActiveMenu();

  const target = document.getElementById(`panel-${panelId}`);
  if (target) target.classList.add("is-active");
  if (cardEl) cardEl.classList.add("is-active");
}

function openVisualTab(name) {
  visualTabs.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.visualTab === name);
  });

  visualPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `visual-${name}`);
  });
}

function openTalkTab(name) {
  talkTabs.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.talkTab === name);
  });

  talkPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `talk-${name}`);
  });
}

function openImageModal(src, alt) {
  imageModalImg.src = src;
  imageModalImg.alt = alt || "";
  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal({ reset = true } = {}) {
  imageModal.classList.remove("is-open");
  imageModal.setAttribute("aria-hidden", "true");
  imageModalImg.src = "";
  imageModalImg.alt = "";

  if (reset) {
    resetCharacterView();
  } else {
    clearActiveMenu();
  }
}

function renderRelationButtons() {
  if (!relationSelector || !relationFromAya || !relationToAya) return;

  relationSelector.innerHTML = "";

  relationData.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "relation-btn";
    button.textContent = item.name;
    button.dataset.relationId = item.id;

    if (index === 0) {
      button.classList.add("is-active");
      relationFromAya.textContent = item.fromAya;
      relationToAya.textContent = item.toAya;
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      document.querySelectorAll(".relation-btn").forEach((btn) => {
        btn.classList.remove("is-active");
      });
      button.classList.add("is-active");

      relationFromAya.style.opacity = "0";
      relationToAya.style.opacity = "0";

      setTimeout(() => {
        relationFromAya.textContent = item.fromAya;
        relationToAya.textContent = item.toAya;
        relationFromAya.style.opacity = "1";
        relationToAya.style.opacity = "1";
      }, 50);
    });

    relationSelector.appendChild(button);
  });
}

menuCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.stopPropagation();

    const mode = card.dataset.mode;

    if (mode === "image") {
      hidePanels();
      clearActiveMenu();
      card.classList.add("is-active");
      openImageModal(card.dataset.image, card.dataset.alt);
      return;
    }

    if (mode === "panel") {
      showPanel(card.dataset.panel, card);
    }
  });
});

visualTabs.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    openVisualTab(btn.dataset.visualTab);
  });
});

talkTabs.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    openTalkTab(btn.dataset.talkTab);
  });
});

document.querySelectorAll(".thumb-btn").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation();
    openImageModal(btn.dataset.image, btn.dataset.alt);
  });
});

if (imageModalImg) {
  imageModalImg.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

if (imageModalBackdrop) {
  imageModalBackdrop.addEventListener("click", () => {
    closeImageModal({ reset: true });
  });
}

if (imageModalClose) {
  imageModalClose.addEventListener("click", () => {
    closeImageModal({ reset: true });
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (imageModal?.classList.contains("is-open")) {
      closeImageModal({ reset: true });
    } else {
      resetCharacterView();
    }
  }
});

/* メニューでも内容でもない場所を押したら初期状態に戻す */
document.addEventListener("click", (event) => {
  if (imageModal?.classList.contains("is-open")) {
    const clickedDialog = event.target.closest(".image-modal-dialog");
    if (!clickedDialog) {
      closeImageModal({ reset: true });
    }
    return;
  }

  const clickedMenu = menuStack?.contains(event.target);
  const clickedContent = floatingContent?.contains(event.target);

  if (!clickedMenu && !clickedContent) {
    resetCharacterView();
  }
});

renderRelationButtons();
