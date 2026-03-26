const zoomOpen = document.getElementById("zoomOpen");
const zoomModal = document.getElementById("zoomModal");
const zoomBg = document.getElementById("zoomBg");
const zoomClose = document.getElementById("zoomClose");

function openZoom() {
  zoomModal.classList.add("is-open");
  zoomBg.classList.add("is-open");
  zoomModal.setAttribute("aria-hidden", "false");
}

function closeZoom() {
  zoomModal.classList.remove("is-open");
  zoomBg.classList.remove("is-open");
  zoomModal.setAttribute("aria-hidden", "true");
}

zoomOpen?.addEventListener("click", openZoom);
zoomClose?.addEventListener("click", closeZoom);
zoomBg?.addEventListener("click", closeZoom);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeZoom();
  }
});