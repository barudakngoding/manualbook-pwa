import { renderSidebar } from './sidebar.js';
import { renderFolder, setupImageHighlightOnScroll, getCurrentFolder, folderStack } from './gallery.js';
import { showMediaModal, hideImageModal } from './modal.js';

window.renderSidebar = renderSidebar;
window.showMediaModal = showMediaModal;

// Sidebar toggle logic
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('header');
const menuButton = document.createElement('button');
menuButton.classList.add('menu-button');
menuButton.innerHTML = '☰';
header.prepend(menuButton);

toggleSidebar();
menuButton.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
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
