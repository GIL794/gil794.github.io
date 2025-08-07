---
layout: default
title: Blog 
---

# Blog Posts

Here you can browse all posts by the latest added. This page updates automatically as new posts are added to the blog so you always see something fresh.

<div>
  <ul>
    {% for post in site.posts %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
