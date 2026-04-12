const mainMenuButtons = document.querySelectorAll(".main-menu-btn");
const contentPanels = document.querySelectorAll(".content-panel");

const visualTabs = document.querySelectorAll("[data-visual-tab]");
const visualPanels = document.querySelectorAll("#panel-visual .sub-panel");

const talkTabs = document.querySelectorAll("[data-talk-tab]");
const talkPanels = document.querySelectorAll("#panel-talk .sub-panel");

const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const imageModalClose = document.getElementById("imageModalClose");

const relationFromAya = document.getElementById("relationFromAya");
const relationToAya = document.getElementById("relationToAya");
const relationSelector = document.getElementById("relationSelector");

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

function showPanel(panelId) {
  contentPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `panel-${panelId}`);
  });

  mainMenuButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.panel === panelId);
  });
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
}

function renderRelationButtons() {
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

    button.addEventListener("click", () => {
      document.querySelectorAll(".relation-btn").forEach((btn) => {
        btn.classList.remove("is-active");
      });
      button.classList.add("is-active");
      relationFromAya.textContent = item.fromAya;
      relationToAya.textContent = item.toAya;
    });

    relationSelector.appendChild(button);
  });
}

mainMenuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;
    const panel = btn.dataset.panel;

    if (action === "panel") {
      showPanel(panel);
    }
  });
});

document.querySelectorAll(".open-image-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openImageModal(btn.dataset.image, btn.dataset.alt);
  });
});

document.querySelectorAll(".visual-thumb").forEach((btn) => {
  btn.addEventListener("click", () => {
    openImageModal(btn.dataset.image, btn.dataset.alt);
  });
});

visualTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    openVisualTab(btn.dataset.visualTab);
  });
});

talkTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    openTalkTab(btn.dataset.talkTab);
  });
});

imageModalBackdrop.addEventListener("click", closeImageModal);
imageModalClose.addEventListener("click", closeImageModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageModal();
  }
});

renderRelationButtons();