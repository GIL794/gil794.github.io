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
  <div class="section hero blog-hero">
    <h2>Latest Articles</h2>
    <p class="lead">Deep dives into technology trends, practical guides, and strategic insights for modern businesses and developers.</p>
    <div class="blog-stats">
      <div class="stat-item">
        <span class="stat-icon">📚</span>
        <span class="stat-number">{{ site.posts | size }}</span>
        <span class="stat-label">Articles</span>
      </div>
      <div class="stat-item">
        <span class="stat-icon">🏷️</span>
        <span class="stat-number">{{ site.categories | size }}</span>
        <span class="stat-label">Categories</span>
      </div>
      <div class="stat-item">
        <span class="stat-icon">💡</span>
        <span class="stat-number">∞</span>
        <span class="stat-label">Insights</span>
      </div>
    </div>
  </div>
</div>

<div class="blog-container">
  <div class="blog-grid" id="blog-posts-container">
    {% for post in site.posts %}
      <article class="post-card">
        <div class="card-content">
          {% assign all_categories = post.categories | concat: "Latest" | uniq %}
          {% if all_categories.size > 0 %}
            <div class="post-categories">
              {% for category in all_categories limit:4 %}
                <a href="/categories/#{{ category | slugify }}" class="category-badge">{{ category }}</a>
              {% endfor %}
            </div>
          {% endif %}
          
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">
              {{ post.title }}
            </a>
          </h2>
          
          <div class="post-meta-wrapper">
            <p class="post-meta">
              <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: "%B %d, %Y" }}
              </time>
            </p>
            {% assign words = post.content | strip_html | number_of_words %}
            {% assign reading_time = words | divided_by: 200 %}
            {% if reading_time < 1 %}
              {% assign reading_time = 1 %}
            {% endif %}
            <span class="reading-time">
              <span class="reading-icon">📖</span>
              {{ reading_time }} min read
            </span>
          </div>
          
          <div class="post-excerpt">
            {{ post.excerpt | strip_html | truncatewords: 30 }}
          </div>
          
          <div class="post-actions">
            <a href="{{ post.url | relative_url }}" class="read-more-btn">
              Read Full Article
            </a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
