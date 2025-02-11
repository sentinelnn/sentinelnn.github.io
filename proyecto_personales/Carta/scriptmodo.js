document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("sadVideo");

    video.play();
    video.muted = false;

    setTimeout(function() {
        window.close();
    }, 5000); // 10 segundos
});
