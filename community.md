---
layout: page
title: Community
---

<style>
.community-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.hero-header {
  text-align: center;
  margin-bottom: 3rem;
}

.hero-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.hero-header .intro {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.connection-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #3498db;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.card p {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
}

.cta-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 24px;
  background: rgba(255,255,255,0.2);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid rgba(255,255,255,0.3);
}

.btn:hover {
  background: white;
  color: #667eea;
  transform: translateY(-2px);
  text-decoration: none;
}

.btn-primary {
  background: rgba(255,255,255,0.9);
  color: #667eea;
}

.btn-primary:hover {
  background: white;
  color: #5a6fd8;
}

@media (max-width: 768px) {
  .community-wrapper {
    padding: 1rem 0.5rem;
  }
  
  .hero-header h1 {
    font-size: 2rem;
  }
  
  .connection-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .cta-section {
    padding: 2rem 1rem;
  }
  
  .btn-group {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
}
</style>

<div class="community-wrapper">
  <section class="hero-header">
    <h1>Community & Collaboration</h1>
    <p class="intro">
      I believe in the power of collaboration and open source development. Whether you're looking to contribute to exciting projects, share knowledge, or simply connect with like-minded professionals, I'd love to hear from you.
    </p>
  </section>

  <div class="connection-cards">
    <div class="card">
      <span class="card-icon">🚀</span>
      <h3>Open Source Projects</h3>
      <p>
        Follow my GitHub repositories and contribute to exciting open source projects. From automation tools to web development frameworks, there's always something interesting brewing.
      </p>
    </div>

    <div class="card">
      <span class="card-icon">🤝</span>
      <h3>Professional Network</h3>
      <p>
        Connect with me on LinkedIn for professional networking, industry insights, and meaningful conversations about technology and innovation.
      </p>
    </div>

    <div class="card">
      <span class="card-icon">📬</span>
      <h3>Newsletter & Updates</h3>
      <p>
        Subscribe to my blog newsletter for regular updates on tech trends, project insights, and exclusive content you won't find anywhere else.
      </p>
    </div>
  </div>

  <section class="cta-section">
    <h2>Ready to Join the Conversation?</h2>
    <p>
      Let's build something amazing together! Subscribe to my newsletter for exclusive content and project updates, or follow my GitHub profile to stay up-to-date with my latest work.
    </p>
    <div class="btn-group">
      <a href="https://github.com/GIL794" class="btn btn-primary">Follow on GitHub</a>
      <a href="/contact" class="btn">Get in Touch</a>
      <a href="#newsletter" class="btn">Subscribe Newsletter</a>
    </div>
    <p style="margin-top: 2rem; opacity: 0.8; font-size: 0.9rem;">
      Together, we can shape the future of technology, one collaboration at a time.
    </p>
  </section>
</div>
