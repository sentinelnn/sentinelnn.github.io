document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const videoPlayPauseButton = document.getElementById('videoPlayPauseButton');
    const playerButton = document.getElementById('playerButton');
    const musicPlayer = document.getElementById('musicPlayer');
    const minimizeButton = document.getElementById('minimizeButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioPlayPauseButton = document.getElementById('audioPlayPauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const songTitle = document.getElementById('songTitle');
    const albumCover = document.getElementById('albumCover');
    const audioSource = document.getElementById('audioSource');
    const siButton = document.getElementById('siButton');
    const noButton = document.getElementById('noButton');
    const formButton = document.getElementById('formButton');
    
    const songs = [
        {
            title: "Chachacha - josean long",
            src: "Music1.mp3",
            cover: "music1.jpg"
        },
        {
            title: "Es por ti - Inspector",
            src: "Music2.mp3",
            cover: "music2.jpg"
        },
        {
            title: "Ed Maverick - Quiero",
            src: "Music3.mp3",
            cover: "music3.jpg"
        },
        {
            title: "ZOE- Luna",
            src: "Music4.mp3",
            cover: "music4.jpg"
        },
        {
            title: "iñigo quintero - Si No Estás",
            src: "Music5.mp3",
            cover: "music5.jpg"
        },
        {
            title: "Zoé - Arrullo De Estrellas",
            src: "Music6.mp3",
            cover: "music6.jpg"
        },
        {
            title: "Amapolas - Leo Rizzi",
            src: "Music7.mp3",
            cover: "music7.jpg"
        },
        {
            title: "Zoé - Love",
            src: "Music8.mp3",
            cover: "music8.jpg"
        },
        {
            title: "Kiss - I Was Made For Lovin' You",
            src: "Music9.mp3",
            cover: "music9.jpg"
        },
        {
            title: "Bruno Mars - Just The Way You Are",
            src: "Music10.mp3",
            cover: "music10.jpg"
        },

    ];
    
    let currentSongIndex = 0;

    function loadSong(index) {
        const song = songs[index];
        songTitle.textContent = song.title;
        albumCover.src = song.cover;
        audioSource.src = song.src;
        audioPlayer.load();
    }

    videoPlayPauseButton.addEventListener('click', function () {
        if (video.paused) {
            video.volume = 1.0;  // Set video volume to 100%
            video.muted = false;
            video.play();
            videoPlayPauseButton.textContent = '⏸️';
        } else {
            video.pause();
            videoPlayPauseButton.textContent = '▶️';
        }
    });

    playerButton.addEventListener('click', function () {
        if (musicPlayer.style.display === 'none' || musicPlayer.style.display === '') {
            musicPlayer.style.display = 'flex';
            playerButton.style.display = 'none';
        }
    }); 

    minimizeButton.addEventListener('click', function () {
        musicPlayer.style.display = 'none';
        playerButton.style.display = 'block';
    });

    audioPlayPauseButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            audioPlayPauseButton.textContent = '⏸️';
        } else {
            audioPlayer.pause();
            audioPlayPauseButton.textContent = '⏯️';
        }
    });

    prevButton.addEventListener('click', function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        audioPlayPauseButton.textContent = '⏸️';
    });

    nextButton.addEventListener('click', function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audioPlayer.play();
        audioPlayPauseButton.textContent = '⏸️';
    });

    // Load the first song initially
    loadSong(currentSongIndex);

    // Handle Si button click
    siButton.addEventListener('click', function () {
        if (window.confirm('Estas segura?')) {
            formButton.style.display = 'block';
            video.src = 'in3p1.mp4'; // Change the video source to another video
            video.load();
        }
    });

    // Handle No button click
    noButton.addEventListener('click', function () {
        if (window.confirm('Segura de que no?')) {
            window.location.href = 'indexnimodo.html'; // Redirect if "Aceptar" is selected
        }
    });
});


document.getElementById('formButton').addEventListener('click', function() {
    window.location.href = 'index3_1.html';
});
