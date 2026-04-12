const menuButtons = document.querySelectorAll(".menu-card");
const panels = document.querySelectorAll(".character-panel");

const visualTabs = document.querySelectorAll("[data-visual-tab]");
const visualPanels = document.querySelectorAll(".visual-panel");

const talkTabs = document.querySelectorAll("[data-talk-tab]");
const talkPanels = document.querySelectorAll(".talk-panel");

const imageModal = document.getElementById("imageModal");
const imageModalImg = document.getElementById("imageModalImg");
const imageModalBackdrop = document.getElementById("imageModalBackdrop");
const imageModalClose = document.getElementById("imageModalClose");

function openPanel(name) {
  menuButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.panel === name);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `panel-${name}`);
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

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    openPanel(btn.dataset.panel);
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

document.querySelectorAll(".thumb-btn, .image-open-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    openImageModal(btn.dataset.image, btn.dataset.alt);
  });
});

imageModalBackdrop.addEventListener("click", closeImageModal);
imageModalClose.addEventListener("click", closeImageModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeImageModal();
  }
});