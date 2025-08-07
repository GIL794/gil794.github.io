---
layout: default
title: Blog Categories
---

# Blog Categories

Here you can browse all posts by topic. This page updates automatically as new categories are added to posts.

<div>
  {% for category in site.categories %}
    <h2 id="{{ category[0] | slugify }}">{{ category[0] }}</h2>
    <ul>
      {% for post in category[1] %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
      {% endfor %}
    </ul>
  {% endfor %}
</div>
