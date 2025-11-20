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
    <h2>Explore the Unexpected - Curated Tech Insights</h2>
    <p class="lead">Discover handpicked articles on AI, automation, and technology strategy. Each piece is carefully curated to bring you diverse perspectives—from technical deep dives to strategic business insights—ensuring every visit reveals something new and valuable.</p>
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
      <article class="post-card" data-post-date="{{ post.date | date: '%Y-%m-%d' }}" data-post-time="{{ post.time | default: '09:00' }}">
        <div class="card-content">
          {% assign latest_array = "Latest" | split: "," %}
          {% assign all_categories = post.categories | concat: latest_array | uniq %}
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

<script>
/**
 * Filter blog posts to show 2 per day (9 AM and 5 PM)
 * Posts are made visible according to their scheduled time
 */
(function() {
  'use strict';
  
  function filterBlogPostsByTime() {
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeInMinutes = currentHour * 60 + currentMinute;
    
    const posts = document.querySelectorAll('.post-card[data-post-date]');
    
    posts.forEach(post => {
      const postDate = post.getAttribute('data-post-date');
      const postTime = post.getAttribute('data-post-time') || '09:00';
      
      // Parse post time (HH:MM format)
      const [postHour, postMinute] = postTime.split(':').map(Number);
      const postTimeInMinutes = postHour * 60 + postMinute;
      
      // Determine visibility based on date and time
      let shouldShow = false;
      
      if (postDate < currentDate) {
        // Past posts are always visible
        shouldShow = true;
      } else if (postDate === currentDate) {
        // For today's posts, check if current time has passed the post time
        shouldShow = currentTimeInMinutes >= postTimeInMinutes;
      } else {
        // Future posts are hidden
        shouldShow = false;
      }
      
      // Apply visibility
      if (shouldShow) {
        post.style.display = '';
        post.classList.remove('post-hidden');
      } else {
        post.style.display = 'none';
        post.classList.add('post-hidden');
      }
    });
  }
  
  // Run filter when page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', filterBlogPostsByTime);
  } else {
    filterBlogPostsByTime();
  }
  
  // Re-run filter every minute to catch time changes
  setInterval(filterBlogPostsByTime, 60000);
})();
</script>
