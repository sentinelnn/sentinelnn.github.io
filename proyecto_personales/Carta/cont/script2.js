let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-slide');
  currentSlide = (currentSlide + step + slides.length) % slides.length;
  document.querySelector('.carousel-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
  const playerButton = document.getElementById('playerButton');
  const musicPlayer = document.getElementById('musicPlayer');
  const minimizeButton = document.getElementById('minimizeButton');
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseButton = document.getElementById('playPauseButton');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const songTitle = document.getElementById('songTitle');
  const albumCover = document.getElementById('albumCover');
  const audioSource = document.getElementById('audioSource');

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

  playPauseButton.addEventListener('click', function () {
      if (audioPlayer.paused) {
          audioPlayer.play();
          playPauseButton.textContent = '⏸️';
      } else {
          audioPlayer.pause();
          playPauseButton.textContent = '⏯️';
      }
  });

  prevButton.addEventListener('click', function () {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong(currentSongIndex);
      audioPlayer.play();
      playPauseButton.textContent = '⏸️';
  });

  nextButton.addEventListener('click', function () {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      audioPlayer.play();
      playPauseButton.textContent = '⏸️';
  });

  // Load the first song initially
  loadSong(currentSongIndex);
});

const translations = [
    "TE AMO",        // Español
    "I LOVE YOU",    // Inglés
    "JE T'AIME",     // Francés
    "TI AMO",        // Italiano
    "ICH LIEBE DICH",// Alemán
    "EU TE AMO",     // Portugués
    "Я ТЕБЯ ЛЮБЛЮ",  // Ruso
    "愛してる",       // Japonés
    "사랑해",         // Coreano
    "我爱你",         // Chino (Simplificado)
    "TE QUIERO",     // Español (alternativa)
    "S'AGAPO",       // Griego
    "IK HOU VAN JOU",// Neerlandés
    "ANI OHEV OTACH",// Hebreo
    "TE AMO",        // Latín
    "MI AMOR",       // Español
    "JAG ÄLSKAR DIG",// Sueco
    "TI AMO",        // Rumano
    "NAKHANE NI",    // Zulu
    "VOLIM TE",      // Croata
    "AISHITERU",     // Japonés (alternativa)
    "MAHAL KITA",    // Filipino
    "TE AMO",        // Catalán
    "TI AMO",        // Maltés
    "TË DUA",        // Albanés
    "LUHVAK",        // Checheno
    "HABIBI",        // Árabe
    "AMORE MIO",     // Italiano (alternativa)
    "TI AMO",        // Esperanto
    "NGIKUTHANDA",   // Xhosa
    "JE T'AIME",     // Francés (alternativa)
    "LOKAHI",        // Hawaiano
    "TE AMO",        // Gallego
    "IK HOU VAN JOU",// Flamenco
    "EU TE AMO",     // Portugués (alternativa)
    "TE AMO",        // Asturiano
    "IK BEN VERLIEFD OP JOU", // Afrikáans
    "SUNT ÎNDRĂGOSTIT DE TINE", // Rumano (alternativa)
    "BE SHOMA ESHGH MIVARAM",   // Persa
    "KOCHAM CIĘ",     // Polaco
    "MILUJEM ŤA",     // Eslovaco
    "TE AMO",         // Valenciano
    "IK HOU VAN JOU", // Frisio
    "TI AMO",         // Friulano
    "T'ESI'ULE",      // Chamorro
    "TE AMO",         // Occitano
    "TE AMO"          // Siciliano
];

let index = 0;

function changeText() {
    const loveElement = document.getElementById("love");
    loveElement.textContent = translations[index];
    index = (index + 1) % translations.length;
}

setInterval(changeText, 119); // Cambia el texto cada 2 segundos