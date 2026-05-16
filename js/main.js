/* ─── main.js ── Route Z ─── */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initFAQ();
  initFloatingCTA();
});

/* ═══ Header scroll effect ═══ */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ═══ Mobile Menu ═══ */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('active');
      nav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/* ═══ Scroll Reveal ═══ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* ═══ FAQ Accordion ═══ */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      items.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ═══ Floating CTA ═══ */
function initFloatingCTA() {
  const cta = document.querySelector('.floating-cta');
  if (!cta) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;

    // Show after scrolling past the hero section
    if (currentScroll > windowHeight * 0.8) {
      cta.classList.add('visible');
    } else {
      cta.classList.remove('visible');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

/* ═══ Smooth scroll for anchor links ═══ */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const target = document.querySelector(anchor.getAttribute('href'));
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ═══ Cracker Image Slideshow ═══ */
const crackerImages = [
  'images/cracker-assort.jpg',
  'images/cracker-pesto.jpg',
  'images/cracker-olive.jpg',
  'images/cracker-kimchi.jpg',
  'images/cracker-cheese.jpg'
];

function createCrackerSwitcher(imgId, dotParentSelector) {
  return function(index) {
    const img = document.getElementById(imgId);
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = crackerImages[index];
      img.style.opacity = '1';
    }, 300);
    // Update dots
    const container = img.closest('.popcorn-showcase__image');
    if (container) {
      container.querySelectorAll('.cracker-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    }
  };
}

// Create switchers for each page
const switchCracker = createCrackerSwitcher('cracker-main-img');
const switchMenuCracker = createCrackerSwitcher('menu-cracker-img');
const switchEnCracker = createCrackerSwitcher('en-cracker-img');

// Auto-rotate cracker images
document.addEventListener('DOMContentLoaded', () => {
  ['cracker-main-img', 'menu-cracker-img', 'en-cracker-img'].forEach(imgId => {
    const img = document.getElementById(imgId);
    if (!img) return;
    let current = 0;
    const switcher = createCrackerSwitcher(imgId);
    setInterval(() => {
      current = (current + 1) % crackerImages.length;
      switcher(current);
    }, 4000);
  });
});
