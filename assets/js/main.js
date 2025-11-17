/**
 * Main JavaScript for GIL794 Jekyll Site
 * Enhanced functionality and user experience
 */

(function() {
  'use strict';

  // DOM ready function
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  // Enhanced navigation scroll behavior
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick);
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Lazy loading for images
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Enhanced form handling
  function initFormEnhancements() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        const button = form.querySelector('button[type="submit"]');
        if (button) {
          button.disabled = true;
          button.textContent = 'Sending...';

          // Re-enable after 3 seconds as fallback
          setTimeout(() => {
            button.disabled = false;
            button.textContent = button.dataset.originalText || 'Submit';
          }, 3000);
        }
      });
    });
  }

  // Print-friendly functionality
  function initPrintStyles() {
    window.addEventListener('beforeprint', () => {
      document.body.classList.add('printing');
    });

    window.addEventListener('afterprint', () => {
      document.body.classList.remove('printing');
    });
  }

  // Initialize all functionality when DOM is ready
  ready(() => {
    initStickyHeader();
    initSmoothScroll();

    // Only initialize if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      initLazyLoading();
    }

    initFormEnhancements();
    initPrintStyles();

    // Add class to indicate JS is loaded
    document.documentElement.classList.add('js-loaded');

    console.log('GIL794 site JavaScript loaded successfully');
  });

})();
