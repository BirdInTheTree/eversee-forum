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
  var EVENT_DATE = new Date('2026-06-11T10:00:00+02:00').getTime();

  function initCountdown() {
    var daysEl = document.getElementById('cdDays');
    var hoursEl = document.getElementById('cdHours');
    var minsEl = document.getElementById('cdMins');
    var secsEl = document.getElementById('cdSecs');
    if (!daysEl) return;

    function pad(n) { return n < 10 ? '0' + n : String(n); }

    var timerId = null;

    function tick() {
      var diff = EVENT_DATE - Date.now();
      if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        if (timerId) { clearInterval(timerId); timerId = null; }
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
    timerId = setInterval(tick, 1000);
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
          openItem.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
        });

        // Toggle current
        if (!isOpen) {
          item.classList.add('faq__item--open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
          // GA4: track FAQ expand
          if (typeof gtag === 'function') {
            gtag('event', 'faq_expand', {
              question: btn.querySelector('span').textContent
            });
          }
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

  // --- Ticket addons: select, sum, build email ---
  function initTicketAddons() {
    document.querySelectorAll('.ticket-card').forEach(function (card) {
      var addons = card.querySelectorAll('.ticket-addon');
      var totalEl = card.querySelector('.ticket-card__total-amount');
      var ctaBtn = card.querySelector('.ticket-card__cta');
      if (!ctaBtn || !totalEl) return;

      var base = parseInt(ctaBtn.dataset.base);
      var ticketName = ctaBtn.dataset.ticket;

      addons.forEach(function (el) {
        el.addEventListener('click', function () {
          var isBundle = el.dataset.bundle === 'true';

          // GA4: track addon selection
          if (typeof gtag === 'function') {
            gtag('event', 'addon_select', {
              addon_name: el.dataset.name,
              addon_price: el.dataset.price
            });
          }
          if (isBundle) {
            var wasSelected = el.classList.contains('selected');
            addons.forEach(function (a) { a.classList.remove('selected'); });
            if (!wasSelected) el.classList.add('selected');
          } else {
            var bundle = card.querySelector('.ticket-addon--bundle');
            if (bundle) bundle.classList.remove('selected');
            el.classList.toggle('selected');
          }

          // Update total
          var sum = base;
          card.querySelectorAll('.ticket-addon.selected').forEach(function (s) {
            sum += parseInt(s.dataset.price);
          });
          totalEl.textContent = '€' + sum;
        });
      });

      ctaBtn.addEventListener('click', function (e) {
        e.preventDefault();
        // GA4: track ticket click
        if (typeof gtag === 'function') {
          gtag('event', 'ticket_email_click', {
            ticket_type: ticketName,
            value: parseInt(totalEl.textContent.replace(/[^0-9]/g, ''))
          });
        }
        var selected = [];
        card.querySelectorAll('.ticket-addon.selected').forEach(function (s) {
          selected.push(s.dataset.name + ' (+\u20AC' + s.dataset.price + ')');
        });

        var lines = [
          'Hi,',
          '',
          "I'd like to reserve a " + ticketName + ' badge for EVERSEE Creative Summit (Berlin, June 2026).',
          '',
          'Ticket: ' + ticketName + ' — \u20AC' + base
        ];

        if (selected.length > 0) {
          lines.push('');
          lines.push('Selected add-ons:');
          selected.forEach(function (s) { lines.push('  \u2022 ' + s); });
          lines.push('');
          lines.push('Total: ' + totalEl.textContent);
        }

        lines.push('');
        lines.push('Name: ');
        lines.push('Position: ');
        lines.push('Company: ');
        lines.push('Number of tickets: ');
        lines.push('');
        lines.push('Thank you!');

        var body = lines.join('\n');
        var subject = 'EVERSEE Badge \u2014 ' + ticketName;
        var href = 'mailto:info@eversee.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
        var a = document.createElement('a');
        a.href = href;
        a.target = '_blank';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
    });
  }

  // --- Waitlist form (Formspree AJAX) ---
  function initWaitlist() {
    var form = document.getElementById('waitlistForm');
    var thanks = document.getElementById('waitlistThanks');
    if (!form || !thanks) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.style.display = 'none';
          thanks.style.display = 'block';
          // GA4: track waitlist signup
          if (typeof gtag === 'function') {
            gtag('event', 'waitlist_signup');
          }
        } else {
          alert('Something went wrong. Please try again.');
        }
      }).catch(function () {
        alert('Something went wrong. Please try again.');
      });
    });
  }

  // --- GA4 event tracking for links and CTAs ---
  function initGA4Tracking() {
    if (typeof gtag !== 'function') return;

    // Social link clicks (footer)
    document.querySelectorAll('.footer__socials a').forEach(function (a) {
      a.addEventListener('click', function () {
        gtag('event', 'social_click', {
          platform: a.textContent.trim().toLowerCase()
        });
      });
    });

    // Corporate package inquiry
    var corpBtn = document.querySelector('a[href^="mailto:"][href*="Corporate"]');
    if (corpBtn) {
      corpBtn.addEventListener('click', function () {
        gtag('event', 'corporate_inquiry');
      });
    }

    // Hero & nav CTA clicks ("Get Your Badge")
    document.querySelectorAll('.hero__cta, .nav__cta, .mobile-menu__cta').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var location = btn.classList.contains('hero__cta') ? 'hero'
          : btn.classList.contains('nav__cta') ? 'nav' : 'mobile_menu';
        gtag('event', 'cta_click', {
          cta_text: btn.textContent.trim(),
          cta_location: location
        });
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
    initTicketAddons();
    initWaitlist();
    initGA4Tracking();
  });
})();
