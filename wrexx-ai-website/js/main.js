// ─── NAV HAMBURGER ───
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
}

// ─── TABS ───
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.dataset.group;
    const target = btn.dataset.tab;
    document.querySelectorAll(`[data-group="${group}"].tab-btn`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`[data-group="${group}"].tab-content`).forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tc = document.querySelector(`[data-group="${group}"][data-tab-content="${target}"]`);
    if (tc) tc.classList.add('active');
  });
});

// ─── BACK TO TOP ───
const btn = document.getElementById('back-top');
if (btn) {
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ─── SCROLL ANIMATION ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('fade-up'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .section-header, .features-split, .team-card, .blog-card, .pricing-card').forEach(el => {
  el.style.opacity = '0'; observer.observe(el);
});

// ─── ACTIVE NAV LINK ───
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === currentPage) a.style.color = 'var(--accent)';
});
