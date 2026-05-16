// Inicializa el canvas de partículas flotantes en el fondo
function initParticles() {
  const canvas  = document.getElementById('particles-canvas');
  const ctx     = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  function createParticle() {
    const isDark = document.documentElement.dataset.theme === 'dark';
    return {
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      size:  Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.5 + 0.1,
      color: isDark
        ? `rgba(212,150,156,${Math.random() * 0.4 + 0.1})`
        : `rgba(200,132,138,${Math.random() * 0.3 + 0.05})`
    };
  }

  for (let i = 0; i < 60; i++) {
    particles.push(createParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      p.x += p.speedX;
      p.y += p.speedY;

      if (p.y < -10) {
        particles[i] = createParticle();
        particles[i].y = canvas.height + 10;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}