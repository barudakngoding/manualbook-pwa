import { renderSidebar } from "./sidebar.js";
import { renderFolder, setupImageHighlightOnScroll, getCurrentFolder, folderStack } from "./gallery.js";
import { showMediaModal, hideImageModal } from "./modal.js";

window.renderSidebar = renderSidebar;
window.showMediaModal = showMediaModal;

let sidebar, overlay, header, menuButton;

function toggleSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
    document.body.style.overflow = sidebar.classList.contains("open") ? "hidden" : "";
}

document.addEventListener("DOMContentLoaded", function () {
    sidebar = document.getElementById("sidebar");
    header = document.querySelector("header");
    overlay = document.querySelector(".overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.appendChild(overlay);
    }
    menuButton = document.createElement("button");
    menuButton.classList.add("menu-button");
    menuButton.innerHTML = "☰";
    header.prepend(menuButton);

    menuButton.addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", toggleSidebar);

    renderSidebar();
    renderFolder(getCurrentFolder(), folderStack.slice());
    setupImageHighlightOnScroll();
    toggleSidebar();

    const handleResize = () => {
        if (window.innerWidth <= 700) {
            sidebar.classList.remove("open");
            overlay.classList.remove("show");
        } else {
            sidebar.classList.add("open");
            overlay.classList.remove("show");
        }
        document.body.style.overflow = "";
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const modal = document.getElementById("img-modal");
    const closeBtn = document.querySelector(".img-modal-close");
    closeBtn.addEventListener("click", hideImageModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            hideImageModal();
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideImageModal();
        }
    });

    // Footer scroll logic
    const footer = document.getElementById("main-footer");
    function checkFooterVisibility() {
        if (!footer) return;
        const scrollY = window.scrollY || window.pageYOffset;
        const windowH = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        if (scrollY + windowH >= docH - 2) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    }
    window.addEventListener("scroll", checkFooterVisibility);
    checkFooterVisibility();
});

// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", function () {
//         navigator.serviceWorker
//             .register("service-worker.js")
//             .then((reg) => console.log("Service Worker registered successfully:", reg))
//             .catch((err) => console.log("Service Worker registration failed:", err));
//     });
// }
