/* ============================================
   EVERSEE — 1820-style full-viewport layout
   ============================================ */
(function () {
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  // --- Lenis smooth scroll ---
  var lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1, touchMultiplier: 2, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
  gsap.ticker.lagSmoothing(0);

  // --- Cursor ---
  function initCursor() {
    var cur = document.getElementById('cursor');
    if (!cur || matchMedia('(pointer:coarse)').matches) return;
    var mx = 0, my = 0;
    document.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; });
    gsap.ticker.add(function () {
      var cx = parseFloat(cur.dataset.x || 0), cy = parseFloat(cur.dataset.y || 0);
      cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15;
      cur.dataset.x = cx; cur.dataset.y = cy;
      cur.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
    });
    document.querySelectorAll('[data-cursor-hover]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cur.classList.add('cursor--hover'); });
      el.addEventListener('mouseleave', function () { cur.classList.remove('cursor--hover'); });
    });
  }

  // --- Menu ---
  function initMenu() {
    var btn = document.getElementById('menuBtn');
    var txt = document.getElementById('menuText');
    var menu = document.getElementById('menu');
    var open = false;
    btn.addEventListener('click', function () {
      open = !open;
      menu.classList.toggle('menu--open', open);
      txt.textContent = open ? 'CLOSE' : 'MENU';
      open ? lenis.stop() : lenis.start();
    });
    menu.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        open = false; menu.classList.remove('menu--open');
        txt.textContent = 'MENU'; lenis.start();
      });
    });
  }

  // --- Hero video slideshow ---
  function initHeroSlideshow() {
    var slides = document.querySelectorAll('.hero__slide');
    var total = slides.length;
    var current = 0;
    var interval = 6000;
    var timer = null;
    var pagCurrent = document.querySelector('.hero__pag-current');
    var prevBtn = document.getElementById('heroPrev');

    function goto(idx) {
      slides[current].classList.remove('hero__slide--active');
      // Pause old video
      var oldVid = slides[current].querySelector('video');
      if (oldVid) oldVid.pause();

      current = ((idx % total) + total) % total;
      slides[current].classList.add('hero__slide--active');

      // Play new video
      var newVid = slides[current].querySelector('video');
      if (newVid) {
        newVid.currentTime = 0;
        newVid.play().catch(function () {});
      }

      if (pagCurrent) {
        pagCurrent.textContent = String(current + 1).padStart(2, '0');
      }
    }

    function startAuto() {
      stopAuto();
      timer = setInterval(function () { goto(current + 1); }, interval);
    }

    function stopAuto() {
      if (timer) { clearInterval(timer); timer = null; }
    }

    // Auto-cycle
    startAuto();

    // Previous button
    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        goto(current - 1);
        startAuto();
      });
    }

    // Play/pause toggle
    var playBtn = document.getElementById('heroPlayPause');
    var isPlaying = true;
    if (playBtn) {
      var iconPlay = playBtn.querySelector('.hero__pag-icon--play');
      var iconPause = playBtn.querySelector('.hero__pag-icon--pause');
      // Show pause initially (since auto-playing)
      if (iconPlay) iconPlay.style.display = 'none';
      if (iconPause) iconPause.style.display = '';

      playBtn.addEventListener('click', function () {
        isPlaying = !isPlaying;
        if (isPlaying) {
          startAuto();
          if (iconPlay) iconPlay.style.display = 'none';
          if (iconPause) iconPause.style.display = '';
        } else {
          stopAuto();
          if (iconPlay) iconPlay.style.display = '';
          if (iconPause) iconPause.style.display = 'none';
        }
      });
    }

    // Hero intro animation
    var firstVideo = slides[0].querySelector('video');
    if (firstVideo) {
      gsap.fromTo(firstVideo, {
        scale: 1.3, rotation: 3, filter: 'grayscale(100%) blur(10px)'
      }, {
        scale: 1, rotation: 0, filter: 'grayscale(0%) blur(0px)',
        duration: 2, ease: 'expo.out', delay: 0.3
      });
    }

    // Split text animation for hero title
    var splitEl = document.querySelector('[data-split-text]');
    if (splitEl) {
      var html = splitEl.innerHTML;
      // Wrap each character (preserve <br> tags)
      var parts = html.split(/(<br\s*\/?>)/gi);
      var result = '';
      parts.forEach(function (part) {
        if (part.match(/^<br/i)) {
          result += part;
        } else {
          for (var i = 0; i < part.length; i++) {
            var ch = part[i];
            if (ch === ' ') {
              result += '<span class="char">\u00A0</span>';
            } else {
              result += '<span class="char">' + ch + '</span>';
            }
          }
        }
      });
      splitEl.innerHTML = result;

      gsap.to(splitEl.querySelectorAll('.char'), {
        y: '0%', rotateX: 0, duration: 1.6, stagger: 0.03,
        ease: 'expo.out', delay: 0.6
      });
    }
  }

  // --- Image parallax on scroll ---
  function initParallax() {
    document.querySelectorAll('[data-parallax-y]').forEach(function (img) {
      gsap.to(img, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: img.closest('.fullsection'), start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });
  }

  // --- Scroll reveal ---
  function initReveal() {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1.2, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });
  }

  // --- BTS drag slider ---
  function initBtsSlider() {
    var track = document.getElementById('btsTrack');
    if (!track) return;
    var container = track.parentElement;
    var dragging = false, startX = 0, curX = 0, vel = 0, raf = null;

    function getMin() { return -(track.scrollWidth - container.offsetWidth); }
    function clamp(v, mn, mx) { return Math.max(mn, Math.min(mx, v)); }
    function setX(x) { curX = x; track.style.transform = 'translateX(' + x + 'px)'; }

    container.addEventListener('mousedown', function (e) { dragging = true; startX = e.clientX - curX; vel = 0; if (raf) cancelAnimationFrame(raf); });
    window.addEventListener('mousemove', function (e) { if (!dragging) return; e.preventDefault(); var nx = e.clientX - startX; vel = nx - curX; setX(clamp(nx, getMin(), 0)); });
    window.addEventListener('mouseup', function () { if (!dragging) return; dragging = false; momentum(); });

    container.addEventListener('touchstart', function (e) { dragging = true; startX = e.touches[0].clientX - curX; vel = 0; if (raf) cancelAnimationFrame(raf); }, { passive: true });
    container.addEventListener('touchmove', function (e) { if (!dragging) return; var nx = e.touches[0].clientX - startX; vel = nx - curX; setX(clamp(nx, getMin(), 0)); }, { passive: true });
    container.addEventListener('touchend', function () { dragging = false; momentum(); });

    function momentum() {
      function step() {
        if (Math.abs(vel) < 0.5) return;
        vel *= 0.92;
        var nx = clamp(curX + vel, getMin(), 0);
        setX(nx);
        if (nx === getMin() || nx === 0) return;
        raf = requestAnimationFrame(step);
      }
      raf = requestAnimationFrame(step);
    }
  }

  // --- Smooth anchors ---
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        lenis.scrollTo(target, { offset: 0, duration: 1.2 });
      });
    });
  }

  // --- Init ---
  document.addEventListener('DOMContentLoaded', function () {
    initCursor();
    initMenu();
    initHeroSlideshow();
    initParallax();
    initReveal();
    initBtsSlider();
    initAnchors();
  });
})();
