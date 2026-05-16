
// Sistema de música usando elemento Audio HTML5
let musicPlaying = false;
const bgAudio = document.getElementById('bg-audio');

function toggleMusic() {
  const btn = document.getElementById('btn-music');
  
  if (!musicPlaying) {
    // Reproducir música
    bgAudio.volume = 0.3; // Volumen al 30%
    bgAudio.play()
      .then(() => {
        musicPlaying = true;
        btn.classList.add('playing');
      })
      .catch(error => {
        console.log('Error al reproducir:', error);
        alert('Haz clic de nuevo para iniciar la música 🎵');
      });
  } else {
    // Pausar música
    bgAudio.pause();
    musicPlaying = false;
    btn.classList.remove('playing');
  }
}

// Opcional: Detectar cuando termina la canción para repetir
bgAudio.addEventListener('ended', () => {
  bgAudio.currentTime = 0;
  bgAudio.play();
});