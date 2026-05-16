// Gestión del modo oscuro/claro
function toggleTheme() {
  const html  = document.documentElement;
  const btn   = document.getElementById('btn-theme');
  const isDark = html.dataset.theme === 'dark';

  html.dataset.theme = isDark ? 'light' : 'dark';
  btn.textContent    = isDark ? '🌙' : '☀️';

  localStorage.setItem('theme', html.dataset.theme);
}

function loadTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.dataset.theme = saved;
    document.getElementById('btn-theme').textContent = saved === 'dark' ? '☀️' : '🌙';
  }
}