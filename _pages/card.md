---
layout: default
title: Business Card
permalink: /card/
---

<style>
/* Business Card Specific Styles */
.business-card-container {
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
}

.business-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 60px 50px;
  color: white;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.business-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
}

.business-card::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  background: rgba(255,255,255,0.05);
  border-radius: 50%;
}

.business-card .card-content {
  position: relative;
  z-index: 1;
  background: transparent;
  color: white;
}

.card-header {
  margin-bottom: 30px;
}

.card-name {
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 10px 0;
  letter-spacing: -0.5px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.card-title {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  opacity: 0.95;
  line-height: 1.4;
}

.card-divider {
  width: 80px;
  height: 4px;
  background: white;
  margin: 30px 0;
  border-radius: 2px;
}

.card-section {
  margin-bottom: 25px;
}

.card-section-title {
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.8;
  margin-bottom: 10px;
}

.card-contact-item {
  display: flex;
  align-items: center;
  margin: 12px 0;
  font-size: 16px;
}

.card-contact-item svg, .card-contact-item span.icon {
  margin-right: 15px;
  width: 20px;
  display: inline-block;
  font-size: 20px;
}

.card-contact-item a {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  transition: border-color 0.3s ease;
}

.card-contact-item a:hover {
  border-bottom-color: white;
}

.card-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.card-skill-badge {
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.card-cta {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.card-cta-button {
  background: white;
  color: #667eea;
  padding: 14px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  display: inline-block;
}

.card-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

.card-cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.card-cta-button.secondary:hover {
  background: white;
  color: #667eea;
}

/* QR Code Section */
.qr-section {
  text-align: center;
  margin-top: 40px;
  padding: 40px;
  background: #f9fafb;
  border-radius: 12px;
}

.qr-section h3 {
  color: #1f2937;
  margin-bottom: 20px;
}

.qr-code-container {
  display: inline-block;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.qr-code-container img {
  display: block;
  width: 200px;
  height: 200px;
}

.qr-instructions {
  margin-top: 20px;
  color: #6b7280;
  font-size: 14px;
}

/* Print Styles */
@media print {
  .business-card-container {
    margin: 0;
    padding: 0;
  }
  
  .qr-section,
  .card-cta,
  nav,
  footer,
  header {
    display: none !important;
  }
  
  .business-card {
    box-shadow: none;
    page-break-inside: avoid;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .business-card {
    padding: 40px 30px;
  }
  
  .card-name {
    font-size: 32px;
  }
  
  .card-title {
    font-size: 18px;
  }
  
  .card-cta {
    flex-direction: column;
  }
  
  .card-cta-button {
    width: 100%;
    text-align: center;
  }
}

.achievements-highlight {
  margin-top: 30px;
  padding: 20px;
  background: rgba(255,255,255,0.15);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
}

.achievements-highlight h4 {
  margin: 0 0 15px 0;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.achievement-item {
  margin: 10px 0;
  font-size: 15px;
  display: flex;
  align-items: start;
  line-height: 1.6;
}

.achievement-item::before {
  content: '✓';
  margin-right: 10px;
  font-weight: bold;
  font-size: 18px;
}
</style>

<div class="business-card-container container">
  <div class="business-card">
    <div class="card-content">
      <div class="card-header">
        <h1 class="card-name">Gabriele I. Langellotto</h1>
        <p class="card-title">AI Solution Architect | HP Lecturer | Blockchain Developer</p>
      </div>
      
      <div class="card-divider"></div>
      
      <div class="card-section">
        <h3 class="card-section-title">Contact</h3>
        <div class="card-contact-item">
          <span class="icon">📧</span>
          <a href="mailto:gilangellotto@gmail.com">gilangellotto@gmail.com</a>
        </div>
        <div class="card-contact-item">
          <span class="icon">🌐</span>
          <a href="https://gil794.github.io" target="_blank">gil794.github.io</a>
        </div>
        <div class="card-contact-item">
          <span class="icon">💼</span>
          <a href="https://www.linkedin.com/in/gabriele-iacopo-langellotto-aa7095a9" target="_blank">LinkedIn Profile</a>
        </div>
        <div class="card-contact-item">
          <span class="icon">🐙</span>
          <a href="https://github.com/GIL794" target="_blank">github.com/GIL794</a>
        </div>
      </div>
      
      <div class="card-section">
        <h3 class="card-section-title">Core Expertise</h3>
        <div class="card-skills">
          <span class="card-skill-badge">AI/ML Solutions</span>
          <span class="card-skill-badge">Blockchain/Web3</span>
          <span class="card-skill-badge">Full-Stack Development</span>
          <span class="card-skill-badge">NLP & LLMs</span>
          <span class="card-skill-badge">Python</span>
          <span class="card-skill-badge">React/Next.js</span>
          <span class="card-skill-badge">Solidity</span>
          <span class="card-skill-badge">Data Science</span>
        </div>
      </div>

      <div class="achievements-highlight">
        <h4>Key Achievements</h4>
        <div class="achievement-item">5 AI products launched with 75% productivity gains</div>
        <div class="achievement-item">Polkadot Blockchain Academy Graduate (May 2025)</div>
        <div class="achievement-item">10+ years cross-industry experience</div>
        <div class="achievement-item">Multilingual: English, Italian, Spanish, French</div>
      </div>
      
      <div class="card-cta">
        <a href="/contact/" class="card-cta-button">Get In Touch</a>
        <a href="/projects/" class="card-cta-button secondary">View Portfolio</a>
        <button onclick="window.print()" class="card-cta-button secondary" style="border: none; cursor: pointer;">Print Card</button>
      </div>
    </div>
  </div>

  <div class="qr-section">
    <h3>Scan to View Full Portfolio</h3>
    <div class="qr-code-container">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://gil794.github.io" alt="QR Code to Portfolio" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
      <div style="display: none; padding: 20px; text-align: center;">
        <p>Visit: <strong>gil794.github.io</strong></p>
      </div>
    </div>
    <p class="qr-instructions">
      Scan this QR code with your phone to instantly access my complete portfolio, projects, and blog.
    </p>
  </div>
</div>

<script>
// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.business-card');
  
  // Add subtle tilt effect on desktop
  if (window.innerWidth > 768) {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
  }
});
</script>
