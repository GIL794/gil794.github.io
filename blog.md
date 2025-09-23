---
layout: blog
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
      <a href="{{ post.url | relative_url }}" class="read-more">Read more &rarr;</a>
    </article>
  {% endfor %}
</div>

<!-- Pagination -->
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="previous">&larr; Newer posts</a>
  {% endif %}
  
  <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
  
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="next">Older posts &rarr;</a>
  {% endif %}
</div>
{% endif %}
