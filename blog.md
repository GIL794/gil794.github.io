---
layout: default
title: Blog
permalink: /blog/
feature_text: |
  # Insights & Innovation
  Exploring AI, technology, automation, and business strategy in the modern digital landscape
feature_image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80"
---

<div class="container">
  <div class="section hero">
    <h2>Latest Articles</h2>
    <p class="lead">Deep dives into technology trends, practical guides, and strategic insights for modern businesses.</p>
  </div>
</div>

<div class="blog-container">
  <div class="blog-grid">
    {% for post in site.posts %}
      <article class="post-card">
        <div class="card-content">
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">
              {{ post.title }}
            </a>
          </h2>
          <p class="post-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%B %d, %Y" }}
            </time>
          </p>
          <div class="post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 25 }}
          </div>
          <div class="post-actions">
            <a href="{{ post.url | relative_url }}" class="read-more-btn">
              Read More →
            </a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
