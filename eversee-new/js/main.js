/* ============================================
   EVERSEE Creative Forum — Landing Page
   ============================================ */
(function () {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  // --- Lenis smooth scroll ---
  var lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    smoothWheel: true
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);

  // --- Custom cursor ---
  function initCursor() {
    var cur = document.getElementById('cursor');
    if (!cur || matchMedia('(pointer:coarse)').matches) return;

    var mx = 0, my = 0;
    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
    });

    gsap.ticker.add(function () {
      var cx = parseFloat(cur.dataset.x || 0);
      var cy = parseFloat(cur.dataset.y || 0);
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      cur.dataset.x = cx;
      cur.dataset.y = cy;
      cur.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
    });

    document.querySelectorAll('[data-cursor-hover]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cur.classList.add('cursor--hover'); });
      el.addEventListener('mouseleave', function () { cur.classList.remove('cursor--hover'); });
    });
  }

  // --- Mobile menu ---
  function initMobileMenu() {
    var burger = document.getElementById('navBurger');
    var menu = document.getElementById('mobileMenu');
    if (!burger || !menu) return;

    var isOpen = false;

    burger.addEventListener('click', function () {
      isOpen = !isOpen;
      burger.classList.toggle('nav__burger--open', isOpen);
      menu.classList.toggle('mobile-menu--open', isOpen);
      if (isOpen) { lenis.stop(); } else { lenis.start(); }
    });

    menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        isOpen = false;
        burger.classList.remove('nav__burger--open');
        menu.classList.remove('mobile-menu--open');
        lenis.start();
      });
    });
  }

  // --- Smooth anchor scrolling ---
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = document.querySelector(a.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: -72 });
      });
    });
  }

  // --- Countdown timer ---
  // June 1, 2026, 10:00 Berlin time (CEST = UTC+2)
  var EVENT_DATE = new Date('2026-06-01T10:00:00+02:00').getTime();

  function initCountdown() {
    var daysEl = document.getElementById('cdDays');
    var hoursEl = document.getElementById('cdHours');
    var minsEl = document.getElementById('cdMins');
    var secsEl = document.getElementById('cdSecs');
    if (!daysEl) return;

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    function tick() {
      var diff = EVENT_DATE - Date.now();
      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
      }
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins = Math.floor((diff % 3600000) / 60000);
      var secs = Math.floor((diff % 60000) / 1000);

      daysEl.textContent = pad(days);
      hoursEl.textContent = pad(hours);
      minsEl.textContent = pad(mins);
      secsEl.textContent = pad(secs);
    }

    tick();
    setInterval(tick, 1000);
  }

  // --- FAQ accordion ---
  function initFaq() {
    document.querySelectorAll('.faq__question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq__item');
        var answer = item.querySelector('.faq__answer');
        var isOpen = item.classList.contains('faq__item--open');

        // Close all
        document.querySelectorAll('.faq__item--open').forEach(function (openItem) {
          openItem.classList.remove('faq__item--open');
          openItem.querySelector('.faq__answer').style.maxHeight = '0';
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('faq__item--open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // --- Scroll reveal (GSAP ScrollTrigger) ---
  function initReveal() {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: function () { el.classList.add('is-visible'); }
      });
    });
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    initCursor();
    initMobileMenu();
    initAnchors();
    initCountdown();
    initFaq();
    initReveal();
  });
})();
