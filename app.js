// app.js (Final + Auto Scroll to Center)
import { imageData } from './Data/imageData.js';
import { videoData } from './Data/videoData.js';

const galleryContainer = document.getElementById('gallery-container');
const sidebar = document.getElementById('sidebar');
let folderStack = [];

const header = document.querySelector('header');
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.innerHTML = '☰';
header.prepend(menuButton);

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}
menuButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

function renderSidebar() {
    sidebar.innerHTML = '';
    const ul = document.createElement('ul');
    const rootLi = document.createElement('li');
    const rootBtn = createLinkButton('Semua Folder', [], folderStack, 'menu-button');
    rootBtn.classList.add('all-folders-btn');
    rootLi.appendChild(rootBtn);
    ul.appendChild(rootLi);
    buildSidebarList(imageData, ul, []);
    sidebar.appendChild(ul);
}

function buildSidebarList(folderObj, parentUl, path) {
    const sortedKeys = Object.keys(folderObj).sort((a, b) => {
        if (a.startsWith('_')) return 1;
        if (b.startsWith('_')) return -1;
        return a.localeCompare(b);
    });

    for (const key of sortedKeys) {
        if (key.startsWith('_')) continue;
        const currentItem = folderObj[key];
        const currentPath = [...path, key];
        const label = currentItem._label || key;
        const hasSubfolders = Object.keys(currentItem).some(k => !k.startsWith('_') && currentItem[k]._label);
        const hasVideos = currentItem._hasVideoFolder && videoData[currentItem._videoFolderName];
        const li = document.createElement('li');
        li.className = 'folder-item';

        if (hasSubfolders || hasVideos) {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'folder-header';
            headerDiv.innerHTML = `<span class="folder-label">📁 ${label}</span><span class="dropdown-icon">►</span>`;
            if (folderStack.join('/').startsWith(currentPath.join('/'))) {
                li.classList.add('active');
            }
            headerDiv.onclick = () => li.classList.toggle('active');
            li.appendChild(headerDiv);
            const subUl = document.createElement('ul');
            subUl.className = 'sub-folder-list';
            if (currentItem._images && currentItem._images.length > 0) {
                 const selfLi = document.createElement('li');
                 selfLi.appendChild(createLinkButton(`🖼️ ${label} (Utama)`, currentPath, folderStack));
                 subUl.appendChild(selfLi);
            }
            buildSidebarList(currentItem, subUl, currentPath);
            if (hasVideos) {
                const videoLi = document.createElement('li');
                videoLi.appendChild(createLinkButton(`🎬 Video ${label}`, [...currentPath, 'video'], folderStack));
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
    const btn = document.createElement('button');
    btn.className = 'folder-link';
    btn.innerHTML = text;
    if (activePathStack.join('/') === path.join('/')) {
        btn.classList.add('selected');
    }
    btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        folderStack = path;
        renderSidebar();
        renderFolder(getCurrentFolder(), folderStack.slice());
        setupImageHighlightOnScroll();
        if (window.innerWidth <= 700) {
            toggleSidebar();
        }
    };
    return btn;
}

function renderFolder(folderObj, path = []) {
    galleryContainer.innerHTML = '';

    if (folderObj._label && folderObj._description) {
        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'folder-description';
        const title = document.createElement('h2');
        title.textContent = folderObj._label;
        descriptionContainer.appendChild(title);
        const desc = document.createElement('p');
        desc.textContent = folderObj._description;
        descriptionContainer.appendChild(desc);
        galleryContainer.appendChild(descriptionContainer);
    }

    const itemsToRender = folderObj._videos || folderObj._images;

    if (itemsToRender && itemsToRender.length > 0) {
        const list = document.createElement('div');
        list.className = 'manual-list';
        itemsToRender.forEach((item) => {
            const figure = document.createElement('figure');
            figure.className = 'manual-item manual-item-vertical';
            const isVideo = !!folderObj._videos;
            let itemPath;
            let mediaElement;
            if (isVideo) {
                const videoParentFolder = folderObj._videoFolderName;
                itemPath = `videos/${videoParentFolder}/${item.file}`;
                mediaElement = document.createElement('video');
                mediaElement.setAttribute('controls', true);
                mediaElement.setAttribute('preload', 'metadata');
            } else {
                itemPath = `images/${path.join('/')}/${item.file}`;
                mediaElement = document.createElement('img');
                mediaElement.loading = 'lazy';
            }
            mediaElement.src = itemPath;
            mediaElement.alt = item.desc || item.file;
            mediaElement.addEventListener('click', () => showMediaModal(itemPath, item.desc || item.file, isVideo));
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = item.desc || item.file;
            figure.appendChild(mediaElement);
            figure.appendChild(figcaption);
            list.appendChild(figure);
        });
        galleryContainer.appendChild(list);

        const firstItem = list.querySelector('.manual-item');
        if (firstItem) {
            firstItem.scrollIntoView({
                behavior: 'auto',
                block: 'center'
            });
        }
    } else if (folderObj._hasSubfoldersOnly) {
        const subfolderGrid = document.createElement('div');
        subfolderGrid.className = 'subfolder-grid';
        const sortedKeys = Object.keys(folderObj).sort((a, b) => a.localeCompare(b));
        for (const key of sortedKeys) {
            if (key.startsWith('_')) continue;
            const subfolder = folderObj[key];
            if (typeof subfolder === 'object' && subfolder._label) {
                const card = document.createElement('div');
                card.className = 'subfolder-card';
                card.innerHTML = `<span class="card-icon">📁</span><h3>${subfolder._label}</h3>`;
                card.onclick = () => {
                    folderStack = [...path, key];
                    renderSidebar();
                    renderFolder(getCurrentFolder(), folderStack.slice());
                    setupImageHighlightOnScroll();
                    if (window.innerWidth <= 700) {
                        toggleSidebar();
                    }
                };
                subfolderGrid.appendChild(card);
            }
        }
        galleryContainer.appendChild(subfolderGrid);
    } else if (!folderObj._description) {
        const info = document.createElement('div');
        info.style.padding = '2rem';
        info.style.color = '#888';
        info.textContent = 'Tidak ada gambar, video, atau subfolder di sini.';
        galleryContainer.appendChild(info);
    }
}

function getCurrentFolder() {
    let obj = imageData;
    if (folderStack.length === 0) {
        return {
            _label: 'Selamat Datang!',
            _description: 'Selamat datang di PWA Manual Book Digital Alat Berat. Silakan pilih kategori alat berat dari sidebar di sebelah kiri untuk melihat komponen dan video panduannya. Aplikasi ini dirancang untuk bekerja secara offline.',
            _hasSubfoldersOnly: true,
            ...imageData
        };
    }
    let currentPathObject = obj;
    for (let i = 0; i < folderStack.length; i++) {
        const key = folderStack[i];
        if (key === 'video') {
            const videoFolderRef = currentPathObject?._videoFolderName;
            if (videoFolderRef && videoData[videoFolderRef]) {
                return {
                    _label: `Video ${currentPathObject._label || 'Folder'}`,
                    _description: `Kumpulan video panduan untuk ${currentPathObject._label}.`,
                    _videos: videoData[videoFolderRef],
                    _videoFolderName: videoFolderRef
                };
            } else {
                return { _label: 'Video Not Found', _videos: [] };
            }
        }
        if (currentPathObject && currentPathObject[key]) {
            currentPathObject = currentPathObject[key];
        } else {
            return { _label: 'Error Folder', _images: [], _hasSubfoldersOnly: false };
        }
    }
    return currentPathObject;
}

function setupImageHighlightOnScroll() {
    if (window.currentObserver) {
        window.currentObserver.disconnect();
    }
    const items = document.querySelectorAll('.manual-list .manual-item');
    if (items.length === 0) return;

    const options = {
        root: galleryContainer,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        items.forEach(item => {
            item.classList.remove('highlighted');
        });
        const intersectingEntry = entries.find(entry => entry.isIntersecting);
        if (intersectingEntry) {
            intersectingEntry.target.classList.add('highlighted');
        }
    }, options);
    
    items.forEach(item => observer.observe(item));
    window.currentObserver = observer;
}

function showMediaModal(src, caption, isVideo = false) {
    const modal = document.getElementById('img-modal');
    const modalContentWrapper = document.querySelector('.img-modal-content-wrapper');
    const modalCaption = document.getElementById('img-modal-caption');
    modalContentWrapper.innerHTML = '';
    let mediaElement;
    if (isVideo) {
        mediaElement = document.createElement('video');
        mediaElement.setAttribute('controls', true);
        mediaElement.setAttribute('autoplay', true);
        mediaElement.setAttribute('loop', true);
        mediaElement.setAttribute('muted', true);
    } else {
        mediaElement = document.createElement('img');
    }
    mediaElement.id = 'img-modal-content-element';
    mediaElement.className = 'img-modal-content';
    mediaElement.src = src;
    mediaElement.alt = caption;
    modalContentWrapper.appendChild(mediaElement);
    modalCaption.textContent = caption;
    modal.classList.add('show');
    document.body.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
    if (isVideo) {
        mediaElement.onloadeddata = () => {
            mediaElement.play().catch(e => console.error("Video autoplay failed:", e));
        };
    }
}

function hideImageModal() {
    const modal = document.getElementById('img-modal');
    const mediaElement = document.getElementById('img-modal-content-element');
    if (mediaElement && mediaElement.tagName === 'VIDEO') {
        mediaElement.pause();
        mediaElement.currentTime = 0;
    }
    modal.classList.remove('show');
    document.body.classList.remove('modal-active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
    renderSidebar();
    renderFolder(getCurrentFolder(), folderStack.slice());
    setupImageHighlightOnScroll();
    const handleResize = () => {
        if (window.innerWidth <= 700) {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        } else {
            sidebar.classList.add('open');
            overlay.classList.remove('show');
        }
        document.body.style.overflow = '';
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    const modal = document.getElementById('img-modal');
    const closeBtn = document.querySelector('.img-modal-close');
    closeBtn.addEventListener('click', hideImageModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideImageModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideImageModal();
        }
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered successfully'))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}