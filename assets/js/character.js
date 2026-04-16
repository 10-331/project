const menuCards = document.querySelectorAll(".menu-card");
const contentPanels = document.querySelectorAll(".content-panel");

const visualTabs = document.querySelectorAll("[data-visual-tab]");
const visualPanels = document.querySelectorAll("#panel-visual .subpanel");

const visualCorruptTabs = document.querySelectorAll("[data-visual-corrupt-tab]");
const visualCorruptPanels = document.querySelectorAll("#panel-visual-corrupt .subpanel");

const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const imageModalClose = document.getElementById("imageModalClose");

const relationFromAya = document.getElementById("relationFromAya");
const relationToAya = document.getElementById("relationToAya");
const relationSelector = document.getElementById("relationSelector");

const relationFromAyaCorrupt = document.getElementById("relationFromAyaCorrupt");
const relationToAyaCorrupt = document.getElementById("relationToAyaCorrupt");
const relationSelectorCorrupt = document.getElementById("relationSelectorCorrupt");

const menuStack = document.querySelector(".menu-stack");
const floatingContent = document.getElementById("floatingContent");
const characterPage = document.getElementById("characterPage");
const secretTrigger = document.getElementById("secretTrigger");
const characterSilhouette = document.getElementById("characterSilhouette");

let isCorrupted = false;

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

const relationDataCorrupt = [
  {
    id: "ten",
    name: "添",
    fromAya: "呼びかけに反応する。\nだが、情動ではなく識別反応に近い。",
    toAya: "綾として扱うには不整合が多い。\nそれでも見捨てきれない。"
  },
  {
    id: "himawari",
    name: "陽葵",
    fromAya: "思い出せるはずの輪郭だけが曖昧。\n名前だけが先に残っている。",
    toAya: "対象は綾を知っているふうに振る舞う。\nだが記録は一致しない。"
  },
  {
    id: "rinon",
    name: "燐音",
    fromAya: "会話の断片だけ残る。\n親しさの実感が伴わない。",
    toAya: "観察対象。\n距離の詰め方に異様な齟齬がある。"
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
  if (target) {
    target.classList.add("is-active");
  }
  if (cardEl) {
    cardEl.classList.add("is-active");
  }
}

function openVisualTab(name) {
  visualTabs.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.visualTab === name);
  });

  visualPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `visual-${name}`);
  });
}

function openVisualCorruptTab(name) {
  visualCorruptTabs.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.visualCorruptTab === name);
  });

  visualCorruptPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `visual-corrupt-${name}`);
  });
}

function openImageModal(src, alt) {
  if (!imageModal || !imageModalImg || !src) return;

  imageModalImg.src = src;
  imageModalImg.alt = alt || "";
  imageModal.classList.add("is-open");
  imageModal.setAttribute("aria-hidden", "false");
}

function closeImageModal({ reset = true } = {}) {
  if (!imageModal || !imageModalImg) return;

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

function renderRelationButtons(data, selectorEl, fromEl, toEl) {
  if (!selectorEl || !fromEl || !toEl) return;

  selectorEl.innerHTML = "";

  data.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "relation-btn";
    button.textContent = item.name;
    button.dataset.relationId = item.id;

    if (index === 0) {
      button.classList.add("is-active");
      fromEl.textContent = item.fromAya;
      toEl.textContent = item.toAya;
    }

    button.addEventListener("click", (event) => {
      event.stopPropagation();

      selectorEl.querySelectorAll(".relation-btn").forEach((btn) => {
        btn.classList.remove("is-active");
      });
      button.classList.add("is-active");

      fromEl.style.opacity = "0";
      toEl.style.opacity = "0";

      setTimeout(() => {
        fromEl.textContent = item.fromAya;
        toEl.textContent = item.toAya;
        fromEl.style.opacity = "1";
        toEl.style.opacity = "1";
      }, 60);
    });

    selectorEl.appendChild(button);
  });
}

function runGlitchBurst() {
  if (!characterPage) return;

  characterPage.classList.remove("glitch-burst");
  void characterPage.offsetWidth;
  characterPage.classList.add("glitch-burst");

  window.setTimeout(() => {
    characterPage.classList.remove("glitch-burst");
  }, 380);
}

function updateSilhouetteFigure() {
  if (!characterSilhouette) return;

  const normalFigure = characterSilhouette.dataset.normalFigure;
  const corruptFigure = characterSilhouette.dataset.corruptFigure;
  const nextFigure = isCorrupted ? corruptFigure : normalFigure;

  if (!nextFigure) return;

  characterSilhouette.style.setProperty(
    "--figure-url",
    `url('${nextFigure}')`
  );
}

function setCorruptedState(nextState) {
  isCorrupted = nextState;

  if (!characterPage || !secretTrigger) return;

  resetCharacterView();

  characterPage.classList.toggle("is-corrupted", isCorrupted);
  secretTrigger.setAttribute(
    "aria-label",
    isCorrupted ? "通常ページに戻す" : "裏ページに切り替える"
  );

  updateSilhouetteFigure();
  runGlitchBurst();
}

function toggleCorruptedState() {
  setCorruptedState(!isCorrupted);
}

function resolveCardBehavior(card) {
  if (!isCorrupted) {
    return {
      mode: card.dataset.mode,
      panel: card.dataset.panel,
      image: card.dataset.image,
      alt: card.dataset.alt
    };
  }

  return {
    mode: card.dataset.corruptMode || card.dataset.mode,
    panel: card.dataset.corruptPanel || card.dataset.panel,
    image: card.dataset.corruptImage || card.dataset.image,
    alt: card.dataset.corruptAlt || card.dataset.alt
  };
}

function bindMenuCards() {
  menuCards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();

      const behavior = resolveCardBehavior(card);

      if (behavior.mode === "locked") {
        hidePanels();
        clearActiveMenu();
        card.classList.add("is-active");
        runGlitchBurst();
        return;
      }

      if (behavior.mode === "image") {
        hidePanels();
        clearActiveMenu();
        card.classList.add("is-active");
        openImageModal(behavior.image, behavior.alt);
        return;
      }

      if (behavior.mode === "panel") {
        showPanel(behavior.panel, card);
      }
    });
  });
}

function bindTabs() {
  visualTabs.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      openVisualTab(btn.dataset.visualTab);
    });
  });

  visualCorruptTabs.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      openVisualCorruptTab(btn.dataset.visualCorruptTab);
    });
  });
}

function bindThumbButtons() {
  document.querySelectorAll(".thumb-btn").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      openImageModal(btn.dataset.image, btn.dataset.alt);
    });
  });
}

function bindModal() {
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
}

function bindGlobalEvents() {
  if (secretTrigger) {
    secretTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCorruptedState();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (imageModal?.classList.contains("is-open")) {
        closeImageModal({ reset: true });
        return;
      }
      resetCharacterView();
    }
  });

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
    const clickedSecret = secretTrigger?.contains(event.target);

    if (!clickedMenu && !clickedContent && !clickedSecret) {
      resetCharacterView();
    }
  });
}

function init() {
  updateSilhouetteFigure();

  renderRelationButtons(
    relationData,
    relationSelector,
    relationFromAya,
    relationToAya
  );

  renderRelationButtons(
    relationDataCorrupt,
    relationSelectorCorrupt,
    relationFromAyaCorrupt,
    relationToAyaCorrupt
  );

  bindMenuCards();
  bindTabs();
  bindThumbButtons();
  bindModal();
  bindGlobalEvents();
}

init();
