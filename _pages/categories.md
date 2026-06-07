---
layout: default
title: Categories
permalink: /categories/
feature_text: |
  # Blog Categories
  Explore articles by topic - discover insights across technology, development, and innovation
feature_image: "/assets/images/featured_community.png"
---

<div class="container">
  <div class="section hero">
    <h2>Browse by Category</h2>
    <p class="lead">Find articles organised by topic to explore specific areas of interest</p>
  </div>
</div>

<div class="categories-container">
  <div class="categories-grid">
    {% assign all_categories = site.posts | map: "categories" | join: "," | split: "," | uniq | sort %}
    {% assign latest_array = "Latest" | split: "," %}
    {% assign all_categories = all_categories | concat: latest_array | uniq %}
    
    {% for category in all_categories %}
      {% if category != "" %}
        {% assign posts_in_category = site.posts | where_exp: "post", "post.categories contains category" %}
        {% if category == "Latest" %}
          {% assign posts_in_category = site.posts %}
        {% endif %}
        
        <div class="category-card" id="{{ category | slugify }}">
          <div class="category-header">
            <h3 class="category-title">{{ category }}</h3>
            <span class="post-count">{{ posts_in_category.size }} {% if posts_in_category.size == 1 %}article{% else %}articles{% endif %}</span>
          </div>
          
          <div class="category-posts">
            {% assign sorted_posts = posts_in_category | sort: "date" | reverse %}
            {% for post in sorted_posts %}
              <article class="category-post-item">
                <div class="post-item-date">
                  <time datetime="{{ post.date | date_to_xmlschema }}">
                    {{ post.date | date: "%b %d, %Y" }}
                  </time>
                </div>
                <h4 class="post-item-title">
                  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                </h4>
                <p class="post-item-excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
                {% if post.categories.size > 0 %}
                  <div class="post-item-categories">
                    {% assign latest_cat_array = "Latest" | split: "," %}
                    {% assign post_categories = post.categories | concat: latest_cat_array | uniq %}
                    {% for cat in post_categories limit:3 %}
                      {% if cat != category %}
                        <a href="#{{ cat | slugify }}" class="mini-category-badge">{{ cat }}</a>
                      {% endif %}
                    {% endfor %}
                  </div>
                {% endif %}
              </article>
            {% endfor %}
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>
</div>


