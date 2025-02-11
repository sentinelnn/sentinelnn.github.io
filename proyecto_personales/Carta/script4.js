let startY;

document.querySelector('.videos-wrapper').addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY;
});

document.querySelector('.videos-wrapper').addEventListener('touchmove', function(event) {
    event.preventDefault(); // Prevenir el desplazamiento predeterminado
}, { passive: false });

document.querySelector('.videos-wrapper').addEventListener('touchend', function(event) {
    let endY = event.changedTouches[0].clientY;
    handleSwipe(startY, endY);
});


// Reproducir videos visibles y pausar los que no lo estén
window.addEventListener('scroll', playVisibleVideosWithSound);

function playVisibleVideosWithSound() {
    var videos = document.querySelectorAll('.video-player video');
    videos.forEach(function(video) {
        if (isElementInViewport(video.parentElement)) {
            if (video.paused) {
                video.play();
                video.muted = false;
            }
        } else {
            if (!video.paused) {
                video.pause();
                video.muted = true;
            }
        }
    });
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('DOMContentLoaded', () => {
    playVisibleVideosWithSound();
});
