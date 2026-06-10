"use strict";
/**
 * Main JavaScript for GIL794 Jekyll Site
 * Enhanced functionality and user experience with dynamic animations
 */
(function () {
    'use strict';
    // DOM ready function
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        }
        else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
    // Centralised scroll event coordinator for high performance scroll tracking
    let scrollTicking = false;
    const scrollListeners = [];
    function registerScrollListener(callback) {
        scrollListeners.push(callback);
    }
    window.addEventListener('scroll', () => {
        if (!scrollTicking) {
            requestAnimationFrame(() => {
                scrollListeners.forEach(listener => listener());
                scrollTicking = false;
            });
            scrollTicking = true;
        }
    });
    // Create and manage scroll progress indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);
        function updateProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }
        registerScrollListener(updateProgress);
    }
    // Create and manage back-to-top button
    function initBackToTop() {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '↑';
        button.setAttribute('aria-label', 'Back to top');
        document.body.appendChild(button);
        function updateButtonVisibility() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 300) {
                button.classList.add('visible');
            }
            else {
                button.classList.remove('visible');
            }
        }
        registerScrollListener(updateButtonVisibility);
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    // Animate elements on scroll
    function initScrollAnimations() {
        if (!('IntersectionObserver' in window))
            return;
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
        document.querySelectorAll('.feature-card, .post-card, section').forEach(htmlEl => {
            htmlEl.style.opacity = '0';
            htmlEl.style.transform = 'translateY(20px)';
            htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(htmlEl);
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
        heroElements.forEach(htmlEl => {
            const text = htmlEl.textContent || '';
            if (text.length > 20) { // Only animate longer headings
                htmlEl.textContent = '';
                htmlEl.style.borderRight = '2px solid var(--primary-color)';
                htmlEl.style.paddingRight = '5px';
                htmlEl.style.animation = 'blink 0.7s step-end infinite';
                let i = 0;
                const typeSpeed = 50;
                type();
                function type() {
                    if (i < text.length) {
                        htmlEl.textContent += text.charAt(i);
                        i++;
                        setTimeout(type, typeSpeed);
                    }
                    else {
                        htmlEl.style.borderRight = 'none';
                        htmlEl.style.animation = 'none';
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
            }
        });
    }
    // Add hover effects to links
    function enhanceLinkEffects() {
        document.querySelectorAll('a:not(.no-effect)').forEach(link => {
            link.addEventListener('mouseenter', () => {
                if (!link.classList.contains('cta-btn') && !link.classList.contains('read-more-btn')) {
                    link.style.transition = 'all 0.3s ease';
                }
            });
        });
    }
    // Particle effect for hero section (lightweight, disabled on small screens/reduced motion)
    function initParticleEffect() {
        if (window.innerWidth < 768)
            return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        const hero = document.querySelector('.feature_text, .feature-text, [class*="feature"]');
        if (!hero)
            return;
        const heroEl = hero;
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.opacity = '0.3';
        canvas.style.zIndex = '0';
        if (heroEl.style.position !== 'relative' && heroEl.style.position !== 'absolute') {
            heroEl.style.position = 'relative';
        }
        heroEl.insertBefore(canvas, heroEl.firstChild);
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        canvas.width = heroEl.offsetWidth;
        canvas.height = heroEl.offsetHeight;
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
                if (this.x < 0 || this.x > canvas.width)
                    this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height)
                    this.vy *= -1;
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
            if (!ctx || !canvas)
                return;
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
            canvas.width = heroEl.offsetWidth;
            canvas.height = heroEl.offsetHeight;
        });
    }
    // Pointer aura with pixel sparks for fine pointers only
    function initPointerAura() {
        if (!('PointerEvent' in window))
            return;
        const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (!hoverQuery.matches || motionQuery.matches)
            return;
        const canvas = document.createElement('canvas');
        canvas.className = 'pointer-aura';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            canvas.remove();
            return;
        }
        const pointer = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            targetX: window.innerWidth / 2,
            targetY: window.innerHeight / 2,
            lastX: window.innerWidth / 2,
            lastY: window.innerHeight / 2,
            active: false,
            intensity: 0
        };
        const trailNodes = [];
        const sparks = [];
        const maxTrailNodes = 18;
        const maxSparks = 40;
        let width = window.innerWidth;
        let height = window.innerHeight;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);
        let rafId = 0;
        let lastFrame = performance.now();
        let isRunning = false;
        function hexToRgb(hex) {
            const normalized = hex.trim().replace('#', '');
            const expanded = normalized.length === 3
                ? normalized.split('').map(char => char + char).join('')
                : normalized;
            const int = parseInt(expanded, 16);
            if (Number.isNaN(int)) {
                return { r: 249, g: 115, b: 22 };
            }
            return {
                r: (int >> 16) & 255,
                g: (int >> 8) & 255,
                b: int & 255
            };
        }
        function rgba(rgb, alpha) {
            return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${Math.max(0, Math.min(1, alpha))})`;
        }
        function resolveAuraColours() {
            const styles = getComputedStyle(document.documentElement);
            const primary = hexToRgb(styles.getPropertyValue('--primary-color') || '#f97316');
            const secondary = hexToRgb(styles.getPropertyValue('--primary-dark') || '#ea580c');
            return { primary, secondary };
        }
        let colours = resolveAuraColours();
        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            colours = resolveAuraColours();
        }
        function startLoop() {
            if (isRunning)
                return;
            isRunning = true;
            lastFrame = performance.now();
            canvas.classList.add('pointer-aura--visible');
            rafId = window.requestAnimationFrame(render);
        }
        function stopLoop() {
            if (!isRunning)
                return;
            isRunning = false;
            canvas.classList.remove('pointer-aura--visible');
            window.cancelAnimationFrame(rafId);
        }
        function addTrailNode(x, y, velocity) {
            trailNodes.push({
                x,
                y,
                size: Math.min(18, 8 + velocity * 0.15),
                life: 1
            });
            while (trailNodes.length > maxTrailNodes) {
                trailNodes.shift();
            }
        }
        function spawnSparks(x, y, force, burst = false) {
            const sparkCount = burst
                ? 14
                : Math.max(2, Math.min(6, Math.round(force / 6)));
            for (let i = 0; i < sparkCount; i++) {
                const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.7;
                const speed = (burst ? 1.8 : 0.8) + Math.random() * (burst ? 2.2 : 1.4) + force * 0.015;
                sparks.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    size: burst ? 3 + Math.random() * 3 : 2 + Math.random() * 2,
                    rotation: Math.random() * Math.PI * 2,
                    spin: (Math.random() - 0.5) * 0.18,
                    life: 1
                });
            }
            while (sparks.length > maxSparks) {
                sparks.shift();
            }
        }
        function drawAura() {
            if (pointer.intensity <= 0.02)
                return;
            const outerRadius = 90 + pointer.intensity * 36;
            const innerRadius = 12 + pointer.intensity * 8;
            const gradient = ctx.createRadialGradient(pointer.x, pointer.y, innerRadius, pointer.x, pointer.y, outerRadius);
            gradient.addColorStop(0, rgba(colours.primary, 0.22 * pointer.intensity));
            gradient.addColorStop(0.35, rgba(colours.primary, 0.12 * pointer.intensity));
            gradient.addColorStop(0.7, rgba(colours.secondary, 0.05 * pointer.intensity));
            gradient.addColorStop(1, rgba(colours.primary, 0));
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(pointer.x, pointer.y, outerRadius, 0, Math.PI * 2);
            ctx.fill();
        }
        function drawTrail() {
            trailNodes.forEach((node, index) => {
                const alpha = node.life * (0.08 + index / (trailNodes.length * 18));
                const size = Math.max(2, node.size * node.life);
                const x = Math.round(node.x - size / 2);
                const y = Math.round(node.y - size / 2);
                ctx.fillStyle = rgba(index % 2 === 0 ? colours.primary : colours.secondary, alpha);
                ctx.fillRect(x, y, size, size);
            });
        }
        function drawSparks() {
            sparks.forEach((spark, index) => {
                const alpha = spark.life * (0.3 + (index % 4) * 0.04);
                const size = spark.size * spark.life;
                ctx.save();
                ctx.translate(spark.x, spark.y);
                ctx.rotate(spark.rotation);
                ctx.fillStyle = rgba(index % 3 === 0 ? colours.secondary : colours.primary, alpha);
                ctx.fillRect(-size / 2, -size / 2, size, size);
                ctx.restore();
            });
        }
        function render(timestamp) {
            const frameDelta = Math.min(2.2, (timestamp - lastFrame) / 16.67);
            lastFrame = timestamp;
            ctx.clearRect(0, 0, width, height);
            pointer.x += (pointer.targetX - pointer.x) * (0.16 * frameDelta);
            pointer.y += (pointer.targetY - pointer.y) * (0.16 * frameDelta);
            pointer.intensity += ((pointer.active ? 1 : 0) - pointer.intensity) * (0.12 * frameDelta);
            for (let i = trailNodes.length - 1; i >= 0; i--) {
                trailNodes[i].life -= 0.08 * frameDelta;
                if (trailNodes[i].life <= 0) {
                    trailNodes.splice(i, 1);
                }
            }
            for (let i = sparks.length - 1; i >= 0; i--) {
                const spark = sparks[i];
                spark.x += spark.vx * frameDelta;
                spark.y += spark.vy * frameDelta;
                spark.vx *= 0.985;
                spark.vy *= 0.985;
                spark.rotation += spark.spin * frameDelta;
                spark.life -= 0.05 * frameDelta;
                if (spark.life <= 0) {
                    sparks.splice(i, 1);
                }
            }
            drawAura();
            drawTrail();
            drawSparks();
            if (!pointer.active && pointer.intensity <= 0.03 && trailNodes.length === 0 && sparks.length === 0) {
                stopLoop();
                return;
            }
            rafId = window.requestAnimationFrame(render);
        }
        function handlePointerMove(event) {
            if (event.pointerType !== 'mouse')
                return;
            if (!pointer.active && trailNodes.length === 0 && sparks.length === 0) {
                pointer.x = event.clientX;
                pointer.y = event.clientY;
                pointer.lastX = event.clientX;
                pointer.lastY = event.clientY;
            }
            const dx = event.clientX - pointer.lastX;
            const dy = event.clientY - pointer.lastY;
            const velocity = Math.min(48, Math.hypot(dx, dy));
            pointer.active = true;
            pointer.targetX = event.clientX;
            pointer.targetY = event.clientY;
            pointer.lastX = event.clientX;
            pointer.lastY = event.clientY;
            addTrailNode(event.clientX, event.clientY, velocity);
            if (velocity > 3) {
                spawnSparks(event.clientX, event.clientY, velocity);
            }
            startLoop();
        }
        function handlePointerDown(event) {
            if (event.pointerType !== 'mouse')
                return;
            pointer.active = true;
            pointer.targetX = event.clientX;
            pointer.targetY = event.clientY;
            spawnSparks(event.clientX, event.clientY, 22, true);
            startLoop();
        }
        function deactivatePointer() {
            pointer.active = false;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas, { passive: true });
        window.addEventListener('pointermove', handlePointerMove, { passive: true });
        window.addEventListener('pointerdown', handlePointerDown, { passive: true });
        document.documentElement.addEventListener('pointerleave', deactivatePointer);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                deactivatePointer();
            }
        });
        window.addEventListener('blur', deactivatePointer);
    }
    // Enhanced navigation scroll behavior
    function initStickyHeader() {
        const header = document.querySelector('.site-header');
        if (!header)
            return;
        function updateHeader() {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                header.classList.add('scrolled');
            }
            else {
                header.classList.remove('scrolled');
            }
        }
        registerScrollListener(updateHeader);
    }
    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
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
                    img.src = img.dataset.src || '';
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
                input.addEventListener('focus', () => {
                    input.style.transform = 'scale(1.02)';
                    input.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.2)';
                    input.style.transition = 'all 0.3s ease';
                });
                input.addEventListener('blur', () => {
                    input.style.transform = 'scale(1)';
                    input.style.boxShadow = 'none';
                });
            });
            form.addEventListener('submit', () => {
                const button = form.querySelector('button[type="submit"]');
                if (button) {
                    button.disabled = true;
                    const originalText = button.textContent;
                    button.dataset['originalText'] = originalText || '';
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
    // Add dynamic accent colour animation
    function initColourPulse() {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes colourPulse {
        0%, 100% { filter: hue-rotate(0deg); }
        50% { filter: hue-rotate(10deg); }
      }
      
      .logo-svg circle,
      .header__logo svg circle {
        animation: colourPulse 4s ease-in-out infinite;
      }
    `;
        document.head.appendChild(style);
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
    // Interactive Roadmap scroll animations
    function initRoadmapAnimations() {
        const roadmapItems = document.querySelectorAll('.roadmap-item');
        if (roadmapItems.length === 0)
            return;
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
    // Theme toggle button logic
    function initThemeToggle() {
        const toggleButton = document.getElementById('theme-toggle');
        if (!toggleButton)
            return;
        toggleButton.addEventListener('click', () => {
            let currentTheme = document.documentElement.getAttribute('data-theme');
            // If data-theme is not explicitly set, determine it based on system preferences
            if (!currentTheme) {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                currentTheme = prefersDark ? 'dark' : 'light';
            }
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    // Initialize all functionality when DOM is ready
    ready(() => {
        // Core layout and effects
        initThemeToggle();
        initStickyHeader();
        initSmoothScroll();
        initScrollProgress();
        initBackToTop();
        initColourPulse();
        initPointerAura();
        // Visual animation effects
        if ('IntersectionObserver' in window) {
            initLazyLoading();
            initScrollAnimations();
            initRoadmapAnimations();
        }
        // Interactive modules
        initFormEnhancements();
        initPrintStyles();
        enhanceLinkEffects();
        initTypingAnimation();
        initParticleEffect();
        // Blog-specific functionality
        initCategoryNavigation();
        // Add class to indicate JS is loaded
        document.documentElement.classList.add('js-loaded');
        console.log('GIL794 site JavaScript loaded successfully');
    });
})();
