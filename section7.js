const videoLightbox = document.getElementById('video-lightbox');
const videoLightboxIframe = document.getElementById('video-lightbox-iframe');
const videoLightboxClose = document.getElementById('video-lightbox-close');
const videoTriggers = document.querySelectorAll('.video-trigger');

function openVideo(videoUrl) {
    const separator = videoUrl.includes('?') ? '&' : '?';
    videoLightboxIframe.src = `${videoUrl}${separator}autoplay=1&rel=0`;
    videoLightbox.hidden = false;
    videoLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeVideo() {
    videoLightboxIframe.src = '';
    videoLightbox.hidden = true;
    videoLightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

videoTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        openVideo(trigger.dataset.video);
    });
});

videoLightboxClose.addEventListener('click', closeVideo);

videoLightbox.addEventListener('click', (event) => {
    if (event.target === videoLightbox) {
        closeVideo();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !videoLightbox.hidden) {
        closeVideo();
    }
});
