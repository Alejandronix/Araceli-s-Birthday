// Inicialización principal de la aplicación
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();         // Cargar tema guardado
  initParticles();     // Iniciar partículas de fondo
  renderLetters();     // Dibujar cartas
  renderGallery();     // Dibujar galería
  renderTimeline();    // Dibujar línea del tiempo
  initScrollReveal();  // Activar animaciones de scroll

  // Eventos del modal
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});