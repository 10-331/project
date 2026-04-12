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
    fromAya: "距離が近いほど言葉を選びすぎてしまう。\n甘えたいのに、先に引いてしまう相手。",
    toAya: "放っておけない。\n触れすぎると壊れそうで、でも目を離せない。"
  },
  {
    id: "himawari",
    name: "陽葵",
    fromAya: "一緒にいると呼吸がしやすい。\n日常へ引き戻してくれる人。",
    toAya: "無理に聞き出さず、でも一人にはしない。\nその距離を大事にしたい。"
  },
  {
    id: "rinon",
    name: "燐音",
    fromAya: "明るさに少し救われる。\n眩しいけれど、嫌ではない。",
    toAya: "静かで不安定で、だからこそ気になる。\n軽く扱いたくない相手。"
  },
  {
    id: "minamino",
    name: "南野",
    fromAya: "完全には信じきれない。\nでも無視もできない存在。",
    toAya: "扱いを間違えれば崩れる。\n観察と保護の境界にいる相手。"
  },
  {
    id: "rakuro",
    name: "落露",
    fromAya: "どこか引っかかる。\n理解したくないのに意識してしまう。",
    toAya: "危うさを孕んだまま立っている。\n壊れる瞬間を見逃せない。"
  },
  {
    id: "family",
    name: "家族",
    fromAya: "思い出そうとすると輪郭が痛む。\n近いはずなのに、遠い。",
    toAya: "守りたかった。\nけれど届かなかった時間が残っている。"
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

function closeImageModal() {
  imageModal.classList.remove("is-open");
  imageModal.setAttribute("aria-hidden", "true");
  imageModalImg.src = "";
  imageModalImg.alt = "";
  clearActiveMenu();
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

if (imageModalBackdrop) {
  imageModalBackdrop.addEventListener("click", closeImageModal);
}

if (imageModalClose) {
  imageModalClose.addEventListener("click", closeImageModal);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (imageModal?.classList.contains("is-open")) {
      closeImageModal();
    } else {
      resetCharacterView();
    }
  }
});

/* 外側タップで初期状態に戻す */
document.addEventListener("click", (event) => {
  if (imageModal?.classList.contains("is-open")) return;

  const clickedMenu = menuStack?.contains(event.target);
  const clickedContent = floatingContent?.contains(event.target);

  if (!clickedMenu && !clickedContent) {
    resetCharacterView();
  }
});

renderRelationButtons();
