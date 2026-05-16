// Renderizado de componentes UI: cartas, galería, timeline y modal

// --- Cartas ---
function renderLetters() {
  const container = document.getElementById('letters-container');

  lettersData.forEach((letter, index) => {
    const card = document.createElement('article');
    card.className = `letter-card reveal reveal-delay-${(index % 3) + 1}`;
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', `Carta de ${letter.from}: ${letter.subject}`);

    card.innerHTML = `
      <div class="letter-inner">
        <div class="letter-envelope">
          <div class="letter-stamp" aria-hidden="true">${letter.stamp}</div>
          <div class="letter-date">${letter.date}</div>
        </div>
        <div class="letter-preview">
          <div>
            <div class="letter-from">${letter.from}</div>
            <div class="letter-subject">${letter.subject}</div>
          </div>
          <button
            class="letter-toggle"
            aria-label="Abrir carta"
            onclick="toggleLetter(this.closest('.letter-card'))"
          >▾</button>
        </div>
        <div class="letter-body" aria-hidden="true">
          <div class="letter-salute">${letter.salute}</div>
          <p class="letter-text">${letter.text}</p>
          <div class="letter-signature">${letter.signature}</div>
          ${letter.image ? `<img src="${letter.image}" alt="Imagen del recuerdo" class="letter-image" loading="lazy" />` : ''}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  const addBtn = document.createElement('button');
  addBtn.className = 'letter-add reveal reveal-delay-3';
  addBtn.setAttribute('aria-label', 'Agregar nueva carta');
  addBtn.onclick = openModal;
  addBtn.innerHTML = `
    <span class="letter-add-icon" aria-hidden="true">✉️</span>
    <span>Agregar una carta</span>
    <small style="color:var(--color-text-muted); font-style:italic;">
      Escribe lo que llevas guardado en el corazón
    </small>
  `;

  container.appendChild(addBtn);
  initScrollReveal();
}

function toggleLetter(card) {
  const isOpen   = card.classList.contains('open');
  const body     = card.querySelector('.letter-body');
  const btn      = card.querySelector('.letter-toggle');

  document.querySelectorAll('.letter-card.open').forEach(c => {
    if (c !== card) {
      c.classList.remove('open');
      c.querySelector('.letter-body').removeAttribute('aria-hidden');
      c.querySelector('.letter-toggle').setAttribute('aria-label', 'Abrir carta');
    }
  });

  card.classList.toggle('open', !isOpen);
  body.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
  btn.setAttribute('aria-label', isOpen ? 'Abrir carta' : 'Cerrar carta');
}

// --- Galería con soporte para imágenes reales ---
function renderGallery() {
  const container = document.getElementById('gallery-container');

  galleryData.forEach((item, index) => {
    const polaroid = document.createElement('article');
    polaroid.className = `polaroid reveal reveal-delay-${(index % 4) + 1}`;
    polaroid.setAttribute('role', 'listitem');

    // Construir el contenido visual según el tipo de dato
    let visualContent = '';
    
    if (item.image) {
      // Si hay imagen real, mostrarla con fallback por si no carga
      visualContent = `
        <img 
          class="polaroid-img" 
          src="${item.image}" 
          alt="${item.caption}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div 
          class="polaroid-placeholder" 
          style="background: ${item.fallbackBg || 'linear-gradient(135deg, #F5EDD8, #E8D5B7)'}; display: none;" 
          aria-hidden="true"
        >
          <span style="font-size:3rem;">${item.fallbackEmoji || '📷'}</span>
        </div>
      `;
    } else if (item.bg && item.emoji) {
      // Compatibilidad con el formato antiguo (solo emoji)
      visualContent = `
        <div 
          class="polaroid-placeholder" 
          style="background: ${item.bg};" 
          aria-hidden="true"
        >
          <span style="font-size:3rem;">${item.emoji}</span>
        </div>
      `;
    } else {
      // Fallback genérico
      visualContent = `
        <div 
          class="polaroid-placeholder" 
          style="background: linear-gradient(135deg, #F5EDD8, #E8D5B7);" 
          aria-hidden="true"
        >
          <span style="font-size:3rem;">📷</span>
        </div>
      `;
    }

    polaroid.innerHTML = `
      ${visualContent}
      <p class="polaroid-caption">${item.caption}</p>
      <p class="polaroid-date">${item.date}</p>
    `;

    container.appendChild(polaroid);
  });

  initScrollReveal();
}

// --- Línea del tiempo con soporte para imágenes ---
function renderTimeline() {
  const container = document.getElementById('timeline-container');

  timelineData.forEach((event, index) => {
    const item = document.createElement('div');
    item.className = `timeline-item reveal reveal-delay-${(index % 3) + 1}`;
    item.setAttribute('role', 'listitem');

    const isLeft = event.side === 'left';

    // Construir contenido de la tarjeta con imagen opcional
    let imageHTML = '';
    if (event.image) {
      imageHTML = `
        <img 
          src="${event.image}" 
          alt="${event.title}"
          class="timeline-image"
          loading="lazy"
          onerror="this.style.display='none';"
        />
      `;
    }

    const cardHTML = `
      <div class="timeline-card timeline-card-${event.side}">
        <span class="timeline-emoji" aria-hidden="true">${event.emoji}</span>
        <div class="timeline-date">${event.date}</div>
        ${imageHTML}
        <h3 class="timeline-title">${event.title}</h3>
        <p class="timeline-desc">${event.desc}</p>
      </div>
    `;

    item.innerHTML = isLeft
      ? `${cardHTML}<div class="timeline-dot" aria-hidden="true"></div><div class="timeline-empty" aria-hidden="true"></div>`
      : `<div class="timeline-empty" aria-hidden="true"></div><div class="timeline-dot" aria-hidden="true"></div>${cardHTML}`;

    container.appendChild(item);
  });

  initScrollReveal();
}

// --- Modal ---
function openModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    document.getElementById('memory-title').focus();
  }, 300);
}

function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // Limpiar preview de imagen al cerrar
  const preview = document.getElementById('image-preview');
  if (preview) preview.innerHTML = '';
}

// Vista previa de imagen en el modal
function previewImage(input) {
  const preview = document.getElementById('image-preview');
  
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      preview.innerHTML = `
        <img 
          src="${e.target.result}" 
          alt="Vista previa" 
          style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin-top: 0.5rem;"
        />
        <small style="color: var(--color-text-muted); display: block; margin-top: 0.25rem;">
          ✅ Imagen cargada correctamente
        </small>
      `;
    };
    
    reader.readAsDataURL(input.files[0]);
  }
}

function saveMemory() {
  const title  = document.getElementById('memory-title').value.trim();
  const date   = document.getElementById('memory-date').value;
  const text   = document.getElementById('memory-text').value.trim();
  const emoji  = document.getElementById('memory-emoji').value.trim() || '💌';
  const imageInput = document.getElementById('memory-image');

  if (!title || !text) {
    alert('Por favor escribe al menos un título y el texto del recuerdo 💌');
    return;
  }

  // Procesar la imagen si se subió una
  let imageData = null;
  if (imageInput && imageInput.files && imageInput.files[0]) {
    imageData = URL.createObjectURL(imageInput.files[0]);
  }

  // Crear nueva carta
  const newLetter = {
    id:        lettersData.length + 1,
    stamp:     emoji,
    date:      date ? new Date(date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }) : 'Hoy',
    from:      'Yo',
    subject:   title,
    salute:    'Querido recuerdo,',
    text:      text,
    signature: '— Con amor ♡',
    image:     imageData  // Añadir imagen a la carta
  };

  lettersData.push(newLetter);

  // También agregar a la galería si hay imagen
  if (imageData) {
    galleryData.unshift({
      image: imageData,
      fallbackEmoji: emoji,
      fallbackBg: 'linear-gradient(135deg, #FDF6E3, #F5EDD8)',
      caption: title,
      date: date || new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    });
    
    // Re-renderizar galería
    const galleryContainer = document.getElementById('gallery-container');
    if (galleryContainer) {
      galleryContainer.innerHTML = '';
      renderGallery();
    }
  }

  // Re-renderizar cartas
  const lettersContainer = document.getElementById('letters-container');
  lettersContainer.innerHTML = '';
  renderLetters();

  // Limpiar formulario
  document.getElementById('memory-title').value = '';
  document.getElementById('memory-date').value  = '';
  document.getElementById('memory-text').value  = '';
  document.getElementById('memory-emoji').value = '';
  if (imageInput) imageInput.value = '';
  
  // Limpiar preview
  const preview = document.getElementById('image-preview');
  if (preview) preview.innerHTML = '';

  closeModal();

  // Scroll a la sección de cartas
  setTimeout(() => {
    document.getElementById('cartas').scrollIntoView({ behavior: 'smooth' });
  }, 300);
}

// --- Scroll Reveal ---
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// --- Menú hamburguesa ---
function toggleMenu(btn) {
  const links   = document.querySelector('.nav-links');
  const isOpen  = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', isOpen);
}