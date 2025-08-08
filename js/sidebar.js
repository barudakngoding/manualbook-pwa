import { imageData } from "../Data/imageData.js";
import videoData from "../Data/videoData.js";
import { renderFolder, setupImageHighlightOnScroll, getCurrentFolder, folderStack } from "./gallery.js";

export function renderSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.innerHTML = "";
    const ul = document.createElement("ul");
    const rootLi = document.createElement("li");
    const btnLi = document.createElement("li");
    const rootBtn = createLinkButton("Semua Folder", [], folderStack);
    const loginBtn = createLinkButton("Kuesioner", ["kuesioner"], folderStack);
    const logoutBtn = createLinkButton("Logout", ["logout"], folderStack);
    loginBtn.classList.add("all-folders-btn");
    logoutBtn.classList.add("all-folders-btn");
    rootBtn.classList.add("all-folders-btn");
    rootLi.appendChild(rootBtn);
    ul.appendChild(rootLi);
    buildSidebarList(imageData, ul, []);
    btnLi.appendChild(loginBtn);
    btnLi.appendChild(logoutBtn);
    ul.appendChild(btnLi);
    sidebar.appendChild(ul);
}

function buildSidebarList(folderObj, parentUl, path) {
    const sortedKeys = Object.keys(folderObj).sort((a, b) => {
        if (a.startsWith("_")) return 1;
        if (b.startsWith("_")) return -1;
        return a.localeCompare(b);
    });

    for (const key of sortedKeys) {
        if (key.startsWith("_")) continue;
        const currentItem = folderObj[key];
        const currentPath = [...path, key];
        const label = currentItem._label || key;
        const hasSubfolders = Object.keys(currentItem).some((k) => !k.startsWith("_") && typeof currentItem[k] === "object");
        const hasVideos = currentItem._hasVideoFolder && currentItem._videoFolderName && videoData.some((video) => video.category === currentItem._videoFolderName);

        const li = document.createElement("li");
        li.className = "folder-item";

        if (hasSubfolders || hasVideos) {
            const headerDiv = document.createElement("div");
            headerDiv.className = "folder-header";
            headerDiv.innerHTML = `<span class="folder-label">${currentItem._icon ? `<img src="${currentItem._icon[0].file}" class="folder-icon">` : "📁"} ${label}</span><span class="dropdown-icon">►</span>`;

            if (folderStack.join("/").startsWith(currentPath.join("/")) && folderStack.length > currentPath.length) {
                li.classList.add("active");
            }

            headerDiv.onclick = () => li.classList.toggle("active");
            li.appendChild(headerDiv);

            const subUl = document.createElement("ul");
            subUl.className = "sub-folder-list";

            if (currentItem._images && currentItem._images.length > 0) {
                const selfLi = document.createElement("li");
                selfLi.appendChild(createLinkButton(`🖼️ ${label} (Utama)`, currentPath, folderStack));
                subUl.appendChild(selfLi);
            } else if (currentItem._description && !hasSubfolders && !hasVideos) {
                const selfLi = document.createElement("li");
                selfLi.appendChild(createLinkButton(`🖼️ ${label}`, currentPath, folderStack));
                subUl.appendChild(selfLi);
            }

            buildSidebarList(currentItem, subUl, currentPath);

            if (hasVideos) {
                const videoLi = document.createElement("li");
                videoLi.appendChild(createLinkButton(`🎬 Video ${label}`, [...currentPath, "video"], folderStack));
                subUl.appendChild(videoLi);
            }
            li.appendChild(subUl);
        } else {
            li.appendChild(createLinkButton(`🖼️ ${label}`, currentPath, folderStack));
        }
        parentUl.appendChild(li);
    }
}

function createLinkButton(text, path, activePathStack) {
    const btn = document.createElement("button");
    btn.className = "folder-link";
    btn.innerHTML = text;
    if (activePathStack.join("/") === path.join("/")) {
        btn.classList.add("selected");
    }
    btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        folderStack.length = 0;
        path.forEach((p) => folderStack.push(p));
        renderSidebar();
        renderFolder(getCurrentFolder(), folderStack.slice());
        setupImageHighlightOnScroll();
        if (window.innerWidth <= 700) {
            document.body.classList.toggle("sidebar-open");
        }
    };
    return btn;
}
