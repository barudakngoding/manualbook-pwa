import { imageData } from "../Data/imageData.js";
import videoData from "../Data/videoData.js";
export let folderStack = [];

export function renderFolder(folderObj, path = []) {
    const galleryContainer = document.getElementById("gallery-container");
    galleryContainer.innerHTML = "";

    if (folderObj.page) {
        window.location.href = folderObj.page;
        return;
    }
    if (folderObj._label && folderObj._description) {
        const descriptionContainer = document.createElement("div");
        descriptionContainer.className = "folder-description";
        const title = document.createElement("h2");
        title.textContent = folderObj._label;
        descriptionContainer.appendChild(title);
        const desc = document.createElement("p");
        desc.textContent = folderObj._description;
        descriptionContainer.appendChild(desc);
        galleryContainer.appendChild(descriptionContainer);
    }

    const itemsToRender = folderObj._videos || folderObj._images;

    if (itemsToRender && itemsToRender.length > 0) {
        const list = document.createElement("div");
        list.className = "manual-list";
        itemsToRender.forEach((item) => {
            const figure = document.createElement("figure");
            figure.className = "manual-item manual-item-vertical";

            const isVideo = !!folderObj._videos;
            let mediaElement;
            let src = "";

            if (isVideo) {
                src = item.url;
                mediaElement = document.createElement("iframe");
                mediaElement.src = src;
                mediaElement.allow = "autoplay";
                mediaElement.allowFullscreen = true;
                mediaElement.style.width = "100%";
                mediaElement.style.height = "360px";
                mediaElement.style.border = "none";
                mediaElement.style.borderRadius = "10px";
            } else {
                src = `images/${path.join("/")}/${item.file}`;
                mediaElement = document.createElement("img");
                mediaElement.loading = "lazy";
                mediaElement.src = src;
            }

            mediaElement.alt = item.desc || item.title || item.file;
            mediaElement.addEventListener("click", () => window.showMediaModal(src, item, isVideo));

            const figcaption = document.createElement("figcaption");
            figcaption.textContent = item.desc || item.title || "Media";

            figure.appendChild(mediaElement);
            figure.appendChild(figcaption);
            list.appendChild(figure);
        });
        galleryContainer.appendChild(list);

        const firstItem = list.querySelector(".manual-item");
        if (firstItem) {
            firstItem.scrollIntoView({ behavior: "auto", block: "center" });
        }
    } else if (folderObj._hasSubfoldersOnly) {
        const subfolderGrid = document.createElement("div");
        subfolderGrid.className = "subfolder-grid";
        const sortedKeys = Object.keys(folderObj).sort((a, b) => a.localeCompare(b));
        for (const key of sortedKeys) {
            if (key.startsWith("_")) continue;
            const subfolder = folderObj[key];
            if (typeof subfolder === "object" && subfolder._label) {
                const card = document.createElement("div");
                card.className = "subfolder-card";
                let iconHtml = subfolder._icon && subfolder._icon[0] && subfolder._icon[0].file ? `<img src="${subfolder._icon[0].file}" alt="${subfolder._label} Icon" class="subfolder-custom-icon">` : `<span class="card-icon">📁</span>`;
                card.innerHTML = `${iconHtml}<h3>${subfolder._label}</h3>`;
                card.onclick = () => {
                    folderStack = [...path, key];
                    window.renderSidebar();
                    renderFolder(getCurrentFolder(), folderStack.slice());
                    setupImageHighlightOnScroll();
                    if (window.innerWidth <= 700) {
                        document.body.classList.toggle("sidebar-open");
                    }
                };
                subfolderGrid.appendChild(card);
            }
        }
        galleryContainer.appendChild(subfolderGrid);
    } else if (!folderObj._description && (!itemsToRender || itemsToRender.length === 0)) {
        const info = document.createElement("div");
        info.style.padding = "2rem";
        info.style.color = "#888";
        info.textContent = "Tidak ada gambar, video, atau subfolder di sini.";
        galleryContainer.appendChild(info);
    }
}

export function getCurrentFolder() {
    if (folderStack.length === 0) {
        return {
            _label: "Selamat Datang!",
            _description: "Selamat datang di PWA Manual Book Digital Alat Berat. Silakan pilih kategori alat berat dari sidebar di sebelah kiri untuk melihat komponen dan video panduannya. Aplikasi ini dirancang untuk bekerja secara offline.",
            _hasSubfoldersOnly: true,
            ...imageData,
        };
    }
    let currentPathObject = imageData;
    for (let i = 0; i < folderStack.length; i++) {
        const key = folderStack[i];
        if (key == "kuesioner") return { page: "https://forms.gle/caE6rtwvTGUUziKfA" };
        if (key === "video") {
            let actualParentFolder = imageData;
            for (let k = 0; k < i; k++) {
                if (actualParentFolder && actualParentFolder[folderStack[k]]) {
                    actualParentFolder = actualParentFolder[folderStack[k]];
                } else {
                    return { _label: "Error Folder Video Tidak Ditemukan", _videos: [], _description: "Jalur ke folder induk video tidak valid." };
                }
            }
            const videoCategoryName = actualParentFolder?._videoFolderName;
            if (videoCategoryName) {
                const videosForCategory = videoData.filter((video) => video.category === videoCategoryName);
                return {
                    _label: `Video ${actualParentFolder._label || videoCategoryName}`,
                    _description: `Kumpulan video panduan untuk ${actualParentFolder._label || videoCategoryName}.`,
                    _videos: videosForCategory.length > 0 ? videosForCategory : [],
                };
            } else {
                return { _label: "Kategori Video Tidak Ditemukan", _videos: [], _description: "Nama kategori video tidak didefinisikan dengan benar." };
            }
        }
        if (currentPathObject && currentPathObject[key]) {
            currentPathObject = currentPathObject[key];
        } else {
            return { _label: "Error Folder Tidak Ditemukan", _images: [], _description: "Folder yang diminta tidak ditemukan." };
        }
    }
    return currentPathObject;
}

export function setupImageHighlightOnScroll() {
    if (window.currentObserver) {
        window.currentObserver.disconnect();
    }
    const items = document.querySelectorAll(".manual-list .manual-item");
    if (items.length === 0) return;
    let lastHighlightedTarget = null;
    const highlightSound = new Audio("sounds/plop.mp3");
    const options = {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
        items.forEach((item) => item.classList.remove("highlighted"));
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
            const currentTarget = intersectingEntry.target;
            currentTarget.classList.add("highlighted");
            if (currentTarget !== lastHighlightedTarget) {
                highlightSound.currentTime = 0;
                highlightSound.play().catch((error) => {
                    console.log("Suara highlight tidak bisa diputar otomatis:", error);
                });
                lastHighlightedTarget = currentTarget;
            }
        } else {
            lastHighlightedTarget = null;
        }
    }, options);
    items.forEach((item) => observer.observe(item));
    window.currentObserver = observer;
}
