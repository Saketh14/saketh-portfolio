const navList = document.getElementById('navList');
const menuToggle = document.getElementById('menuToggle');
const yearEl = document.getElementById('year');

// Mobile menu
menuToggle?.addEventListener('click', () => {
  const open = navList.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Smooth scroll
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('show');
    }
  });
});

// Active nav highlight
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav-list a').forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === '#' + id)
      );
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('main section[id]').forEach(sec => io.observe(sec));

// Year
yearEl.textContent = new Date().getFullYear();
