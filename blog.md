---
layout: home
title: Blog
permalink: /blog/
---

# Blog

Welcome to my blog! Here you'll find insights on AI, technology, automation, and business strategy.

<div class="blog-posts">
  {% for post in paginator.posts %}
    <article class="post-preview">
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p class="post-meta">{{ post.date | date: "%B %d, %Y" }}</p>
      <div class="post-excerpt">
        {{ post.excerpt }}
      </div>
      <a href="{{ post.url | relative_url }}" class="read-more">Read more →</a>
    </article>
  {% endfor %}
</div>

<!-- Pagination -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    {% if paginator.previous_page == 1 %}
      <a class="previous" href="{{ '/blog/' | relative_url }}">← Newer posts</a>
    {% else %}
      <a class="previous" href="{{ '/blog/page' | append: paginator.previous_page | append: '/' | relative_url }}">← Newer posts</a>
    {% endif %}
  {% endif %}
  
  <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  
  {% if paginator.next_page %}
    <a class="next" href="{{ '/blog/page' | append: paginator.next_page | append: '/' | relative_url }}">Older posts →</a>
  {% endif %}
</div>
{% endif %}
