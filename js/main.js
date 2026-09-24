/* ─── main.js ── Route Z ─── */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initFAQ();
  initCTATracking();
  initUTMTracking();
  initRouteTabs();
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

/* ═══ CTA Conversion Tracking ═══ */
function initCTATracking() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    let action = target.getAttribute('data-action');
    const href = target.getAttribute('href') || '';
    const text = (target.textContent || '').trim();

    if (!action) {
      if (href.startsWith('tel:')) {
        action = 'call_click';
      } else if (href.includes('google.com/maps') || href.includes('goo.gl/maps') || href.includes('maps.google')) {
        action = 'map_click';
      } else if (href.includes('lin.ee') || href.includes('line.me')) {
        action = 'line_click';
      } else if (href.includes('instagram.com')) {
        action = 'instagram_click';
      } else if (href.includes('/menu') || href.includes('menu/')) {
        action = 'menu_click';
      } else if (href.includes('/access') || href.includes('access/')) {
        action = 'access_click';
      } else if (text.includes('予約') || href.includes('reservation') || (target.id && target.id.includes('reserve'))) {
        action = 'reservation_click';
      }
    }

    if (action) {
      const eventData = {
        event_category: 'CTA',
        event_label: text.substring(0, 40) || action,
        link_url: href,
        page_location: window.location.href,
        page_title: document.title
      };

      if (typeof window.gtag === 'function') {
        window.gtag('event', action, eventData);
      }

      try {
        const events = JSON.parse(sessionStorage.getItem('route_z_cta_log') || '[]');
        events.push({ action, timestamp: Date.now(), href });
        if (events.length > 50) events.shift();
        sessionStorage.setItem('route_z_cta_log', JSON.stringify(events));
      } catch (err) {}
    }
  });
}

/* ═══ UTM Parameter Tracking ═══ */
function initUTMTracking() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    const utmMedium = urlParams.get('utm_medium');
    const utmCampaign = urlParams.get('utm_campaign');

    if (utmSource || utmMedium || utmCampaign) {
      const utmData = { utmSource, utmMedium, utmCampaign, timestamp: Date.now() };
      localStorage.setItem('route_z_utm', JSON.stringify(utmData));

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'campaign_visit', {
          campaign_source: utmSource,
          campaign_medium: utmMedium,
          campaign_name: utmCampaign
        });
      }
    }
  } catch (err) {}
}

/* ═══ Access Route Tabs Switcher ═══ */
function initRouteTabs() {
  const tabButtons = document.querySelectorAll('.route-tab-btn');
  const routePanels = document.querySelectorAll('.route-panel');
  if (!tabButtons.length || !routePanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      tabButtons.forEach(b => b.classList.toggle('active', b === btn));
      routePanels.forEach(panel => {
        panel.style.display = panel.id === targetId ? 'block' : 'none';
      });
    });
  });
}

/* ═══ Smooth scroll for anchor links ═══ */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const hash = anchor.getAttribute('href');
  if (!hash || hash === '#') return;

  const target = document.querySelector(hash);
  if (!target) return;

  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ═══ Cracker Image Slideshow ═══ */
const crackerImages = [
  'images/cracker-assort.jpg',
  'images/cracker-chocolate.jpg',
  'images/cracker-bruschetta.jpg',
  'images/cracker-kimchi.jpg',
  'images/cracker-cheese.jpg',
  'images/cracker-olive2.jpg',
  'images/cracker-salsa.jpg'
];

function createCrackerSwitcher(imgId) {
  return function(index) {
    const img = document.getElementById(imgId);
    if (!img) return;
    img.style.opacity = '0';
    setTimeout(() => {
      // Relative path handling
      const currentSrc = img.getAttribute('src') || '';
      const prefix = currentSrc.startsWith('../') ? '../' : '';
      img.src = prefix + crackerImages[index];
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
    }, 4500);
  });
});
