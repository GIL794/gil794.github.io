/**
 * Main JavaScript for GIL794 Jekyll Site
 * Enhanced functionality and user experience with dynamic animations
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
  
  // Create and manage scroll progress indicator
  function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    let ticking = false;
    
    function updateProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
      progressBar.style.width = scrollPercent + '%';
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick);
  }
  
  // Create and manage back-to-top button
  function initBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(button);
    
    let ticking = false;
    
    function updateButtonVisibility() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > 300) {
        button.classList.add('visible');
      } else {
        button.classList.remove('visible');
      }
      
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateButtonVisibility);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick);
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Animate elements on scroll
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.feature-card, .post-card, section').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
    
    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add typing animation to hero text
  function initTypingAnimation() {
    const heroElements = document.querySelectorAll('h1, .feature_text h1, .feature-text h1');
    
    heroElements.forEach(element => {
      const text = element.textContent;
      if (text.length > 20) { // Only animate longer headings
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary-color)';
        element.style.paddingRight = '5px';
        element.style.animation = 'blink 0.7s step-end infinite';
        
        let i = 0;
        const typeSpeed = 50;
        
        function type() {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, typeSpeed);
          } else {
            element.style.borderRight = 'none';
            element.style.animation = 'none';
          }
        }
        
        // Add blink animation
        const style = document.createElement('style');
        style.textContent = `
          @keyframes blink {
            0%, 49% { border-color: var(--primary-color); }
            50%, 100% { border-color: transparent; }
          }
        `;
        document.head.appendChild(style);
        
        setTimeout(type, 500);
      }
    });
  }
  
  // Add hover effects to links
  function enhanceLinkEffects() {
    document.querySelectorAll('a:not(.no-effect)').forEach(link => {
      link.addEventListener('mouseenter', function(e) {
        if (!this.classList.contains('cta-btn') && !this.classList.contains('read-more-btn')) {
          this.style.transition = 'all 0.3s ease';
        }
      });
    });
  }
  
  // Particle effect for hero section (lightweight)
  function initParticleEffect() {
    const hero = document.querySelector('.feature_text, .feature-text, [class*="feature"]');
    if (!hero) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.opacity = '0.3';
    canvas.style.zIndex = '0';
    
    if (hero.style.position !== 'relative' && hero.style.position !== 'absolute') {
      hero.style.position = 'relative';
    }
    
    hero.insertBefore(canvas, hero.firstChild);
    
    const ctx = canvas.getContext('2d');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    
    const particles = [];
    const particleCount = 30;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.5)';
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    });
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

  // Enhanced form handling with validation feedback
  function initFormEnhancements() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
      // Add input animations
      form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('focus', function() {
          this.style.transform = 'scale(1.02)';
          this.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.2)';
          this.style.transition = 'all 0.3s ease';
        });
        
        input.addEventListener('blur', function() {
          this.style.transform = 'scale(1)';
          this.style.boxShadow = 'none';
        });
      });
      
      form.addEventListener('submit', function(e) {
        const button = form.querySelector('button[type="submit"]');
        if (button) {
          button.disabled = true;
          const originalText = button.textContent;
          button.dataset.originalText = originalText;
          button.textContent = 'Sending...';

          // Re-enable after 3 seconds as fallback
          setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
            button.style.background = '';
          }, 3000);
        }
      });
    });
  }
  
  // Add dynamic accent color animation
  function initColorPulse() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes colorPulse {
        0%, 100% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(10deg); }
      }
      
      .logo-svg circle,
      .header__logo svg circle {
        animation: colorPulse 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Add easter egg: Konami code
  function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Activate party mode!
          document.body.style.animation = 'rainbow 2s linear infinite';
          const style = document.createElement('style');
          style.textContent = `
            @keyframes rainbow {
              0% { filter: hue-rotate(0deg); }
              100% { filter: hue-rotate(360deg); }
            }
          `;
          document.head.appendChild(style);
          
          setTimeout(() => {
            document.body.style.animation = '';
          }, 5000);
          
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
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

  // Randomize blog posts display order
  function randomizeBlogPosts() {
    const blogGrid = document.getElementById('blog-posts-container');
    if (!blogGrid) return;
    
    const posts = Array.from(blogGrid.children);
    
    // Fisher-Yates shuffle algorithm
    for (let i = posts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [posts[i], posts[j]] = [posts[j], posts[i]];
    }
    
    // Re-append posts in shuffled order
    posts.forEach(post => blogGrid.appendChild(post));
  }

  // Add smooth scrolling for category anchors
  function initCategoryNavigation() {
    // Handle hash navigation on page load
    if (window.location.hash && window.location.pathname.includes('/categories')) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add highlight effect
          target.style.animation = 'highlightPulse 2s ease-in-out';
          setTimeout(() => {
            target.style.animation = '';
          }, 2000);
        }
      }, 300);
    }
    
    // Add highlight animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes highlightPulse {
        0%, 100% { 
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border-color: rgba(249, 115, 22, 0.1);
        }
        50% { 
          box-shadow: 0 12px 50px rgba(249, 115, 22, 0.4);
          border-color: rgba(249, 115, 22, 0.6);
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize all functionality when DOM is ready
  ready(() => {
    // Core functionality
    initStickyHeader();
    initSmoothScroll();

    // Only initialize if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      initLazyLoading();
      initRoadmapAnimations();
    }

    initFormEnhancements();
    initPrintStyles();
    
    // Blog-specific functionality
    randomizeBlogPosts();
    initCategoryNavigation();

    // Add class to indicate JS is loaded
    document.documentElement.classList.add('js-loaded');

    console.log('GIL794 site JavaScript loaded successfully');
  });

  // Interactive Roadmap scroll animations
  function initRoadmapAnimations() {
    const roadmapItems = document.querySelectorAll('.roadmap-item');
    if (roadmapItems.length === 0) return;
    
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const roadmapObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('roadmap-visible');
        }
      });
    }, observerOptions);
    
    roadmapItems.forEach(item => {
      roadmapObserver.observe(item);
    });
  }


})();
