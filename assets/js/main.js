(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.getElementById('globalNav');
  const overlay = document.querySelector('[data-nav-overlay]');
  const body = document.body;
  const closer = document.querySelector('[data-nav-close]');

  if (!toggle || !nav || !overlay || !closer) {
    return;
  }

  const OPEN_CLASS = 'is-nav-open';
  const ACTIVE_CLASS = 'is-active';

  const closeNav = () => {
    nav.classList.remove(ACTIVE_CLASS);
    overlay.classList.remove(ACTIVE_CLASS);
    body.classList.remove(OPEN_CLASS);
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openNav = () => {
    nav.classList.add(ACTIVE_CLASS);
    overlay.classList.add(ACTIVE_CLASS);
    body.classList.add(OPEN_CLASS);
    toggle.setAttribute('aria-expanded', 'true');
  };

  const toggleNav = () => {
    if (nav.classList.contains(ACTIVE_CLASS)) {
      closeNav();
    } else {
      openNav();
    }
  };

  toggle.addEventListener('click', toggleNav);
  overlay.addEventListener('click', closeNav);
  closer.addEventListener('click', closeNav);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });

  const media = window.matchMedia('(min-width: 993px)');

  media.addEventListener('change', (event) => {
    if (event.matches) {
      closeNav();
    }
  });
})();
