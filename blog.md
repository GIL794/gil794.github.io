---
layout: home
title: Blog
permalink: /blog/
---

# Blog

Welcome to my blog! Here you'll find insights on AI, technology, automation, and business strategy.

<div class="blog-container">
  <div class="blog-grid">
    {% for post in paginator.posts %}
      <article class="post-card">
        <div class="card-content">
          <h2 class="post-title">
            <a href="{{ post.url | relative_url }}">
              {{ post.title }}
            </a>
          </h2>
          <p class="post-meta">
            {{ post.date | date: "%B %d, %Y" }}
          </p>
          <div class="post-excerpt">
            {{ post.excerpt }}
          </div>
          <a href="{{ post.url | relative_url }}" class="read-more-btn">
            Read More
          </a>
        </div>
      </article>
    {% endfor %}
  </div>
</div>

<!-- Pagination -->
{% if paginator.total_pages > 1 %}
<div class="pagination-wrapper">
  <nav class="pagination">
    {% if paginator.previous_page %}
      {% if paginator.previous_page == 1 %}
        <a href="{{ '/blog/' | relative_url }}" class="pagination-btn prev-btn">
          ← Newer Posts
        </a>
      {% else %}
        <a href="{{ '/blog/page' | append: paginator.previous_page | relative_url }}" class="pagination-btn prev-btn">
          ← Newer Posts
        </a>
      {% endif %}
    {% endif %}
    
    <span class="pagination-info">
      Page {{ paginator.page }} of {{ paginator.total_pages }}
    </span>
    
    {% if paginator.next_page %}
      <a href="{{ '/blog/page' | append: paginator.next_page | relative_url }}" class="pagination-btn next-btn">
        Older Posts →
      </a>
    {% endif %}
  </nav>
</div>
{% endif %}
