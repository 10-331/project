async function loadCommonHeader() {
  const mount = document.getElementById("commonHeaderMount");
  if (!mount) return;

  try {
    const response = await fetch("./shared/header.html", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`header load failed: ${response.status}`);
    }

    const html = await response.text();
    mount.innerHTML = html;

    const menuButton = document.getElementById("commonMenuButton");
    const menuOverlay = document.getElementById("commonMenuOverlay");

    if (menuButton && menuOverlay) {
      menuButton.addEventListener("click", (event) => {
        event.stopPropagation();
        menuOverlay.classList.toggle("is-open");
        menuOverlay.setAttribute(
          "aria-hidden",
          menuOverlay.classList.contains("is-open") ? "false" : "true"
        );
      });

      menuOverlay.addEventListener("click", (event) => {
        if (event.target === menuOverlay) {
          menuOverlay.classList.remove("is-open");
          menuOverlay.setAttribute("aria-hidden", "true");
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          menuOverlay.classList.remove("is-open");
          menuOverlay.setAttribute("aria-hidden", "true");
        }
      });
    }
  } catch (error) {
    console.error("共通ヘッダーの読み込みに失敗しました:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadCommonHeader);