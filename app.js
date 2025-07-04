import { imageData } from './Data/imageData.js';
import videoData from './Data/videoData.js';

const galleryContainer = document.getElementById('gallery-container');
const sidebar = document.getElementById('sidebar');
let folderStack = [];

const highlightSound = new Audio('sounds/plop.mp3'); 
let currentVoiceOver = null; 

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
    const rootBtn = createLinkButton('Semua Folder', [], folderStack);
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
        const hasSubfolders = Object.keys(currentItem).some(k => !k.startsWith('_') && typeof currentItem[k] === 'object');
        const hasVideos = currentItem._hasVideoFolder && currentItem._videoFolderName &&
            videoData.some(video => video.category === currentItem._videoFolderName);

        const li = document.createElement('li');
        li.className = 'folder-item';

        if (hasSubfolders || hasVideos) {
            const headerDiv = document.createElement('div');
            headerDiv.className = 'folder-header';
            headerDiv.innerHTML = `<span class="folder-label">${currentItem._icon ? `<img src="${currentItem._icon[0].file}" class="folder-icon">` : '📁'} ${label}</span><span class="dropdown-icon">►</span>`;

            if (folderStack.join('/').startsWith(currentPath.join('/')) && folderStack.length > currentPath.length) {
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
            } else if (currentItem._description && !hasSubfolders && !hasVideos) {
                const selfLi = document.createElement('li');
                selfLi.appendChild(createLinkButton(`🖼️ ${label}`, currentPath, folderStack));
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
            let mediaElement;
            let src = '';

            if (isVideo) {
                src = item.url;

                // Pakai iframe untuk video Google Drive
                mediaElement = document.createElement('iframe');
                mediaElement.src = src;
                mediaElement.allow = 'autoplay';
                mediaElement.allowFullscreen = true;
                mediaElement.style.width = '100%';
                mediaElement.style.height = '360px';
                mediaElement.style.border = 'none';
                mediaElement.style.borderRadius = '10px';

            } else {
                src = `images/${path.join('/')}/${item.file}`;
                mediaElement = document.createElement('img');
                mediaElement.loading = 'lazy';
                mediaElement.src = src;
            }

            mediaElement.alt = item.desc || item.title || item.file;

            mediaElement.addEventListener('click', () => showMediaModal(src, item, isVideo));

            const figcaption = document.createElement('figcaption');
            figcaption.textContent = item.desc || item.title || "Media";

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
                let iconHtml = subfolder._icon && subfolder._icon[0] && subfolder._icon[0].file
                    ? `<img src="${subfolder._icon[0].file}" alt="${subfolder._label} Icon" class="subfolder-custom-icon">`
                    : `<span class="card-icon">📁</span>`;
                card.innerHTML = `${iconHtml}<h3>${subfolder._label}</h3>`;
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
    } else if (!folderObj._description && (!itemsToRender || itemsToRender.length === 0)) {
        const info = document.createElement('div');
        info.style.padding = '2rem';
        info.style.color = '#888';
        info.textContent = 'Tidak ada gambar, video, atau subfolder di sini.';
        galleryContainer.appendChild(info);
    }
}

function getCurrentFolder() {
    if (folderStack.length === 0) {
        return {
            _label: 'Selamat Datang!',
            _description: 'Selamat datang di PWA Manual Book Digital Alat Berat. Silakan pilih kategori alat berat dari sidebar di sebelah kiri untuk melihat komponen dan video panduannya. Aplikasi ini dirancang untuk bekerja secara offline.',
            _hasSubfoldersOnly: true,
            ...imageData
        };
    }

    let currentPathObject = imageData;
    for (let i = 0; i < folderStack.length; i++) {
        const key = folderStack[i];

        if (key === 'video') {
            let actualParentFolder = imageData;
            for (let k = 0; k < i; k++) {
                if (actualParentFolder && actualParentFolder[folderStack[k]]) {
                    actualParentFolder = actualParentFolder[folderStack[k]];
                } else {
                    return { _label: 'Error Folder Video Tidak Ditemukan', _videos: [], _description: 'Jalur ke folder induk video tidak valid.' };
                }
            }
            const videoCategoryName = actualParentFolder?._videoFolderName;
            if (videoCategoryName) {
                const videosForCategory = videoData.filter(video => video.category === videoCategoryName);
                return {
                    _label: `Video ${actualParentFolder._label || videoCategoryName}`,
                    _description: `Kumpulan video panduan untuk ${actualParentFolder._label || videoCategoryName}.`,
                    _videos: videosForCategory.length > 0 ? videosForCategory : [],
                };
            } else {
                 return { _label: 'Kategori Video Tidak Ditemukan', _videos: [], _description: 'Nama kategori video tidak didefinisikan dengan benar.' };
            }
        }

        if (currentPathObject && currentPathObject[key]) {
            currentPathObject = currentPathObject[key];
        } else {
            return { _label: 'Error Folder Tidak Ditemukan', _images: [], _description: 'Folder yang diminta tidak ditemukan.' };
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

    let lastHighlightedTarget = null; 

    const options = {
        root: null, 
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        items.forEach(item => item.classList.remove('highlighted'));
        const intersectingEntry = entries.find(entry => entry.isIntersecting);

        if (intersectingEntry) {
            const currentTarget = intersectingEntry.target;
            currentTarget.classList.add('highlighted');

            if (currentTarget !== lastHighlightedTarget) {
                highlightSound.currentTime = 0;
                highlightSound.play().catch(error => {
                    console.log("Suara highlight tidak bisa diputar otomatis:", error);
                });
                lastHighlightedTarget = currentTarget;
            }
        } else {
            lastHighlightedTarget = null;
        }
    }, options);

    items.forEach(item => observer.observe(item));
    window.currentObserver = observer;
}

function showMediaModal(src, item, isVideo = false) {
    const modal = document.getElementById('img-modal');
    const modalContentWrapper = document.querySelector('.img-modal-content-wrapper');
    const modalCaption = document.getElementById('img-modal-caption');
    modalContentWrapper.innerHTML = '';

    if (currentVoiceOver) {
        currentVoiceOver.pause();
        currentVoiceOver.currentTime = 0;
    }

    if (item.voice && !isVideo) {
        currentVoiceOver = new Audio(item.voice);
        currentVoiceOver.play().catch(error => {
            console.error("Gagal memutar suara penjelasan:", error);
        });
    }

    let mediaElement;
    const captionText = item.desc || item.title || "Media";

    if (isVideo) {
        // Create an iframe to load the Google Drive preview page
        mediaElement = document.createElement('iframe');
        mediaElement.allow = 'autoplay; fullscreen';
        mediaElement.allowFullscreen = true;
    } else {
        mediaElement = document.createElement('img');
    }
    
    mediaElement.id = 'img-modal-content-element';
    mediaElement.className = 'img-modal-content';
    mediaElement.src = src;
    mediaElement.alt = captionText;
    modalContentWrapper.appendChild(mediaElement);

    modalCaption.textContent = captionText;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideImageModal() {
    const modal = document.getElementById('img-modal');
    const mediaElement = document.getElementById('img-modal-content-element');
    
    // Stop iframe video by removing its src
    if (mediaElement && mediaElement.tagName === 'IFRAME') {
        mediaElement.src = '';
    }
    
    if (currentVoiceOver) {
        currentVoiceOver.pause();
        currentVoiceOver.currentTime = 0;
        currentVoiceOver = null;
    }

    modal.classList.remove('show');
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
            .then(reg => console.log('Service Worker registered successfully:', reg))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}