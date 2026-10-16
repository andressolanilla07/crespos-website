document.documentElement.classList.add('enhanced');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
const mobile = matchMedia('(max-width:700px)');
function syncMenu() {
  menu.hidden = !mobile.matches;
  menu.setAttribute('aria-expanded', 'false');
  nav.hidden = mobile.matches;
}
syncMenu();
mobile.addEventListener('change', syncMenu);
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.hidden = !open;
});
nav.addEventListener('click', event => {
  if (event.target.closest('a') && mobile.matches) syncMenu();
});
nav.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobile.matches) { syncMenu(); menu.focus(); }
});
const slides = [...document.querySelectorAll('[data-slide]')];
const controls = document.querySelector('.carousel-controls');
let current = 0;
function showSlide(index) {
  current = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.hidden = i !== current;
    slide.setAttribute('role', 'group');
    slide.setAttribute('aria-roledescription', 'diapositiva');
    slide.setAttribute('aria-label', `${i + 1} de ${slides.length}`);
  });
  document.querySelector('[data-counter]').textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
}
showSlide(0);
controls.hidden = false;
document.querySelector('[data-prev]').addEventListener('click', () => showSlide(current - 1));
document.querySelector('[data-next]').addEventListener('click', () => showSlide(current + 1));
document.querySelector('.carousel').addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault(); showSlide(current + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
// Sin reproducción automática: el movimiento siempre lo inicia la persona.
const status = document.querySelector('#contact-status');
document.querySelectorAll('[data-contact]').forEach(link => {
  const explain = event => {
    if (link.getAttribute('aria-disabled') === 'true') {
      event.preventDefault();
      status.textContent = 'Este contacto sigue pendiente de validación. No se ha abierto ningún canal externo.';
      document.querySelector('#contacto').scrollIntoView({block:'start'});
    }
  };
  link.addEventListener('click', explain);
  link.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !link.hasAttribute('href')) explain(event);
  });
});
fetch('../assets/contacts.json').then(response => {
  if (!response.ok) throw new Error('Configuración no disponible');
  return response.json();
}).then(config => {
  if (config.validated !== true) return;
  const whatsapp = /^\d{8,15}$/.test(config.whatsapp) ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.message || '')}` : null;
  const instagram = /^[a-zA-Z0-9_.]{1,30}$/.test(config.instagram) ? `https://www.instagram.com/${config.instagram}/` : null;
  document.querySelectorAll('[data-contact]').forEach(link => {
    const url = link.dataset.contact === 'whatsapp' ? whatsapp : instagram;
    if (!url) return;
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.removeAttribute('aria-disabled');
    link.removeAttribute('role');
    link.removeAttribute('tabindex');
    link.setAttribute('aria-label', `${link.dataset.contact === 'whatsapp' ? 'WhatsApp' : 'Instagram'} (abre una pestaña nueva)`);
    const pending = link.querySelector('small');
    if (pending) pending.textContent = 'Hablemos';
  });
  status.textContent = whatsapp && instagram ? 'Canales configurados. Los enlaces abren una pestaña nueva; no envían mensajes automáticamente.' : 'Hay canales sin configurar correctamente. Revisa los datos de contacto.';
}).catch(() => {
  status.textContent = 'Contactos desactivados. Abre el prototipo con el servidor local para cargar su configuración.';
});
