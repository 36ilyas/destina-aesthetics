/* Destina Aesthetics — interactions */
(function () {
  'use strict';

  /* --- Header state on scroll ------------------------------------------ */
  var header = document.getElementById('site-header');
  if (header) {
    var setHeaderState = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', setHeaderState, { passive: true });
    setHeaderState();
  }

  /* --- Mobile menu ------------------------------------------------------ */
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-menu');
  var close = document.getElementById('menu-close');

  function isOpen() {
    return !!menu && menu.classList.contains('is-open');
  }

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    /* Reflow erzwingen, damit visibility:visible steht, bevor fokussiert wird. */
    void menu.offsetWidth;
    if (close) close.focus();
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (menu) {
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  /* --- Reveal on scroll ------------------------------------------------- */
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!nodes.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    nodes.forEach(function (n) { n.classList.add('is-in'); });
    return;
  }

  nodes.forEach(function (n, i) {
    n.style.setProperty('--reveal-delay', Math.min(i % 6, 5) * 70 + 'ms');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  nodes.forEach(function (n) { io.observe(n); });
})();
