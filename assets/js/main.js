/**
 * MULTISHOP — Multi-Category E-Commerce Store
 * Main JavaScript
 */

(function () {
  'use strict';

  /* ---------- BURGER / MOBILE NAV ---------- */
  const toggle = document.querySelector('.navbar__toggle');
  const navbar = document.querySelector('.navbar');

  if (toggle && navbar) {
    toggle.addEventListener('click', function () {
      this.classList.toggle('open');
      navbar.classList.toggle('open');
      document.body.style.overflow = navbar.classList.contains('open') ? 'hidden' : '';
    });

    // Close nav when clicking a link
    navbar.querySelectorAll('.navbar__link').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        navbar.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  function setActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar__link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path) {
        link.classList.add('active');
      }
    });
  }
  setActiveNav();

  /* ---------- FOOTER YEAR ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- SCROLL REVEAL (IntersectionObserver) ---------- */
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      reveals.forEach(function (el) {
        revealObserver.observe(el);
      });
    }
  } else {
    // Reduced motion: show everything immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ---------- FORM HANDLER [data-form] ---------- */
  document.querySelectorAll('[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var okMsg = form.querySelector('.form-ok');
      var errMsg = form.querySelector('.form-err');

      // Basic validation
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#DC2626';
        } else {
          field.style.borderColor = '';
        }
      });

      if (valid) {
        form.reset();
        if (okMsg) okMsg.style.display = 'block';
        if (errMsg) errMsg.style.display = 'none';
        setTimeout(function () {
          if (okMsg) okMsg.style.display = 'none';
        }, 5000);
      } else {
        if (errMsg) errMsg.style.display = 'block';
        if (okMsg) okMsg.style.display = 'none';
      }
    });
  });

  /* ---------- CART DEMO [data-add] ---------- */
  var cartCount = 0;
  var cartBadge = document.querySelector('.header__cart-count');

  document.querySelectorAll('[data-add]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      cartCount++;
      if (cartBadge) cartBadge.textContent = cartCount;

      // Brief pulse animation on the cart icon
      var cartIcon = document.querySelector('.header__action--cart');
      if (cartIcon) {
        cartIcon.style.transform = 'scale(1.3)';
        setTimeout(function () {
          cartIcon.style.transform = 'scale(1)';
        }, 200);
      }

      // Button feedback
      var originalBg = btn.style.background;
      btn.style.background = '#16A34A';
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
      setTimeout(function () {
        btn.style.background = originalBg || '';
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
      }, 1200);
    });
  });

  /* ---------- FILTER TABS ---------- */
  document.querySelectorAll('.filter-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      var group = this.closest('.filter-tabs');
      if (!group) return;

      // Update active state
      group.querySelectorAll('.filter-tab').forEach(function (t) {
        t.classList.remove('active');
      });
      this.classList.add('active');

      var filter = this.getAttribute('data-filter');
      var cards = document.querySelectorAll('.product-card[data-category]');

      cards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(function () {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ---------- HERO CAROUSEL ---------- */
  var slides = document.querySelectorAll('.hero__slide');
  var dots = document.querySelectorAll('.hero__dot');
  var currentSlide = 0;

  function showSlide(index) {
    slides.forEach(function (s, i) {
      s.style.display = i === index ? 'flex' : 'none';
    });
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  if (slides.length > 1) {
    showSlide(0);
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        showSlide(i);
      });
    });

    setInterval(function () {
      showSlide((currentSlide + 1) % slides.length);
    }, 5000);
  } else if (slides.length === 1) {
    showSlide(0);
  }

})();
