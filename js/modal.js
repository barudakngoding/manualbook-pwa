let currentVoiceOver = null;

export function showMediaModal(src, item, isVideo = false) {
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
            console.error('Gagal memutar suara penjelasan:', error);
        });
    }

    let mediaElement;
    const captionText = item.desc || item.title || 'Media';

    if (isVideo) {
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

export function hideImageModal() {
    const modal = document.getElementById('img-modal');
    const mediaElement = document.getElementById('img-modal-content-element');
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
