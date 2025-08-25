// Theme toggle + mobile menu + active link highlight + year
const docEl = document.documentElement;
const navList = document.getElementById('navList');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');
const yearEl = document.getElementById('year');

// Persisted theme
const savedTheme = localStorage.getItem('theme') || 'dark';
docEl.classList.toggle('light', savedTheme === 'light');

themeToggle?.addEventListener('click', () => {
  const isLight = docEl.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

menuToggle?.addEventListener('click', () => {
  const open = navList.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Smooth scroll and active state
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.getAttribute('href')?.startsWith('#')) {
      e.preventDefault();
      const id = link.getAttribute('href').slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      navList.classList.remove('show');
    }
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav-list a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll('main section[id]').forEach(sec => io.observe(sec));

// Year
yearEl.textContent = new Date().getFullYear();

// ---- Projects filter ----
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.p-card');

function applyFilter(tag) {
  cards.forEach(card => {
    const tags = (card.getAttribute('data-tags') || '').split(',').map(t => t.trim());
    const show = tag === 'all' || tags.includes(tag);
    card.style.display = show ? '' : 'none';
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.getAttribute('data-filter'));
  });
});

// initial
applyFilter('all');
