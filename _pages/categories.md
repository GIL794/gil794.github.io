---
layout: default
title: Categories
permalink: /categories/
feature_text: |
  # Blog Categories
  Explore articles by topic - discover insights across technology, development, and innovation
feature_image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1600&q=80"
---

<div class="container">
  <div class="section hero">
    <h2>Browse by Category</h2>
    <p class="lead">Find articles organized by topic to explore specific areas of interest</p>
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

<style>
.categories-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.categories-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.category-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 2px solid rgba(249, 115, 22, 0.1);
  transition: all 0.3s ease;
  scroll-margin-top: 100px;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(249, 115, 22, 0.15);
  border-color: rgba(249, 115, 22, 0.3);
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid rgba(249, 115, 22, 0.2);
}

.category-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.post-count {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-secondary);
  background: rgba(249, 115, 22, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(249, 115, 22, 0.2);
}

.category-posts {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.category-post-item {
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.02), rgba(3, 102, 214, 0.02));
  border-radius: 12px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.category-post-item:hover {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.08), rgba(3, 102, 214, 0.08));
  transform: translateX(8px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.post-item-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.post-item-date time::before {
  content: '📅 ';
}

.post-item-title {
  margin: 0 0 0.75rem 0;
  font-size: 1.25rem;
  font-weight: 700;
}

.post-item-title a {
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.post-item-title a:hover {
  color: var(--primary-color);
}

.post-item-excerpt {
  margin: 0 0 1rem 0;
  color: var(--text-secondary);
  line-height: 1.6;
}

.post-item-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.mini-category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: rgba(3, 102, 214, 0.1);
  color: var(--secondary-color);
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  transition: all 0.2s ease;
  border: 1px solid rgba(3, 102, 214, 0.2);
}

.mini-category-badge:hover {
  background: var(--secondary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(3, 102, 214, 0.3);
}

@media (max-width: 768px) {
  .categories-container {
    padding: 1rem;
  }
  
  .category-card {
    padding: 1.5rem;
  }
  
  .category-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .category-title {
    font-size: 1.5rem;
  }
}
</style>
