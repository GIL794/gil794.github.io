---
layout: default
title: Blog
permalink: /blog/
---

# Blog

Welcome to my blog! Here you'll find insights on AI, technology, automation, and business strategy.

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
