# Gabriele I. Langellotto - Professional Portfolio & Blog

[![Jekyll Build](https://github.com/GIL794/gil794.github.io/actions/workflows/jekyll-build.yml/badge.svg)](https://github.com/GIL794/gil794.github.io/actions/workflows/jekyll-build.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success)](https://gil794.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> **AI Solution Architect | HP Lecturer | Engineering Innovation & Business Strategy Expert**
>
> Transforming complex technology challenges into business wins through automation, cloud innovation, and strategic leadership.

🌐 **Live Site:** [https://gil794.github.io](https://gil794.github.io)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Content Management](#-content-management)
- [Customisation](#-customisation)
- [SEO Optimisation](#-seo-optimisation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

This repository powers my professional portfolio and blog—a modern, responsive website built with Jekyll and hosted on GitHub Pages. It showcases my expertise in AI solutions, cloud architecture, automation strategies, and technology leadership while providing valuable insights through regularly published blog posts.

**What You'll Find Here:**
- 💼 Professional portfolio showcasing projects and achievements
- 📝 Technical blog with insights on AI, automation, and digital transformation
- 🎨 Modern, responsive design with smooth animations and UX enhancements
- 🔍 SEO-optimised content for maximum discoverability
- ⚡ Fast, static-site performance with GitHub Pages hosting

---

## ✨ Key Features

### 🎨 Professional Design
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully mobile-responsive design that looks great on all devices
- **Custom Styling**: Enhanced SCSS styling with CSS custom properties for easy theming
- **Dynamic Effects**: Scroll progress indicators, back-to-top button, and interactive elements

### 📱 Content Sections
- **Home Page**: Eye-catching hero section showcasing services and value propositions
- **About**: Personal story, philosophy, and professional journey
- **Services**: Detailed overview of consulting and technology services offered
- **Projects**: Portfolio showcasing real-world implementations and case studies
- **Blog**: SEO-optimised blog posts on AI, automation, and technology trends
- **Community**: Information on thought leadership and collaboration opportunities
- **Contact**: Multiple channels for professional inquiries and partnerships

### 🔍 SEO & Performance
- **Search Engine Optimised**: Structured metadata, semantic HTML, and keyword optimisation
- **Fast Loading**: Static site generation for lightning-fast page loads
- **Social Media Ready**: Open Graph and Twitter Card metadata for rich social sharing
- **XML Sitemap**: Automatic sitemap generation for search engine crawling
- **RSS Feed**: Stay connected with automated RSS feed generation

### 🛠️ Developer-Friendly
- **Jekyll-Powered**: Static site generator with powerful templating
- **GitHub Actions**: Automated build and deployment workflow
- **Version Control**: Complete git history for change tracking
- **Modular Structure**: Clean separation of layouts, includes, and content
- **Easy Customisation**: Well-documented configuration and styling

---

## 🔧 Technology Stack

| Category | Technology |
|----------|-----------|
| **Static Site Generator** | [Jekyll](https://jekyllrb.com/) via the GitHub Pages bundle |
| **Theme** | [Alembic](https://github.com/daviddarnes/alembic) (Remote Theme) |
| **Hosting** | [GitHub Pages](https://pages.github.com/) |
| **Styling** | SCSS/CSS3 with custom properties |
| **JavaScript** | Vanilla JS for interactions |
| **Build System** | GitHub Actions + Jekyll |
| **Version Control** | Git + GitHub |

### Jekyll Plugins

- `jekyll-seo-tag` - SEO optimisation
- `jekyll-sitemap` - Automatic sitemap generation
- `jekyll-feed` - RSS feed generation
- `jekyll-remote-theme` - Remote theme support
- `jekyll-github-metadata` - GitHub repository metadata
- Additional plugins for enhanced functionality

---

## 🚀 Getting Started

### Prerequisites

- Ruby 3.x or higher
- Bundler gem
- Git

### Local Development

1. **Clone the Repository**
   ```bash
   git clone https://github.com/GIL794/gil794.github.io.git
   cd gil794.github.io
   ```

2. **Set Up Private Drafts Folder** (Optional)
   ```bash
   mkdir -p _drafts
   # The _drafts/ folder is gitignored and ready to use
   # See _drafts/README.md for usage instructions
   ```

3. **Install Dependencies**
   ```bash
   gem install bundler
   bundle install
   ```

4. **Run the Development Server**
   ```bash
   bundle exec jekyll serve
   ```

5. **View Locally**
   Open your browser and navigate to `http://localhost:4000`

### Development with Live Reload

```bash
bundle exec jekyll serve --livereload
```

This will automatically refresh your browser when you make changes to files.

### Build for Production

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

The production-ready site will be generated in the `_site` directory.

---

## 📁 Project Structure

```
gil794.github.io/
├── _config.yml              # Site configuration
├── _includes/               # Reusable HTML components
│   ├── header.html         # Site header with navigation
│   ├── footer.html         # Site footer
│   ├── site-feature.html   # Hero/feature section
│   └── site-logo.html      # Logo component
├── _layouts/               # Page templates
│   └── default.html        # Main layout template
├── _pages/                 # Static pages
│   ├── about.md           # About page
│   ├── services.md        # Services page
│   ├── projects.md        # Projects portfolio
│   ├── community.md       # Community engagement
│   └── contact.md         # Contact information
├── _posts/                # Blog posts (Markdown)
│   └── YYYY-MM-DD-title.md
├── drafts/                # Planning notes and draft ideas committed to the repo
├── assets/                # Static assets
│   ├── css/
│   │   └── styles.scss    # Main stylesheet
│   └── js/
│       └── main.js        # JavaScript interactions
├── .github/
│   └── workflows/
│       └── jekyll-build.yml  # CI/CD workflow
├── index.md               # Home page
├── blog.md               # Blog archive page
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

---

## ✍️ Content Management

### Managing Draft Content

This repository currently includes a committed `drafts/` folder for planning notes and content ideas.

If you want to keep unpublished posts private and preview them locally with native Jekyll draft support, create a local `_drafts/` folder. That folder is already ignored by git and will not be published.

To preview local `_drafts/` content without publishing:
```bash
bundle exec jekyll serve --drafts
```

### Creating a New Blog Post

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`

2. Add front matter:
   ```yaml
   ---
   layout: default
   title: "Your Post Title"
   date: 2025-09-02
   categories: [Category1, Category2]
   tags: [tag1, tag2, tag3]
   excerpt: "A brief description for SEO and previews"
   ---
   ```

3. Write your content in Markdown

4. Commit and push—the site will automatically rebuild

**Publishing a draft**: When ready, move the file from `_drafts/` to `_posts/` and rename to the required `YYYY-MM-DD-title.md` format (see step 1 above).

### Adding a New Page

1. Create a new file in `_pages/` or root directory
2. Add front matter with layout and permalink
3. Write your content
4. Update navigation in `_config.yml` if needed

### Updating Site Configuration

Edit `_config.yml` to change:
- Site title and description
- Author information
- Social media links
- Navigation menu
- Plugin settings

---

## 🎨 Customisation

### Colour Scheme

Edit CSS custom properties in `assets/css/styles.scss`:

```scss
:root {
  --primary-color: #f97316;       // Orange
  --primary-dark: #ea580c;       // Dark orange
  --secondary-color: #0366d6;     // Blue
  --text-primary: #1f2937;       // Dark grey
  --text-secondary: #6b7280;     // Medium grey
}
```

### Typography

Font sizes and styles can be adjusted in the SCSS variables and component styles.

### Layout

Modify layouts in `_layouts/` and includes in `_includes/` to change structure.

### Feature Images

Update feature images by changing the `feature_image` URL in page front matter:

```yaml
feature_image: "https://images.unsplash.com/photo-your-image-id"
```

---

## 🔍 SEO Optimisation

This site is optimised for search engines with:

### Built-in SEO Features
- ✅ Semantic HTML structure
- ✅ Meta descriptions and keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ XML sitemap (`/sitemap.xml`)
- ✅ RSS feed (`/feed.xml`)
- ✅ Canonical URLs
- ✅ Descriptive file names and URLs

### Best Practices Implemented
- Keyword-rich titles and headings
- Optimised content structure
- Internal linking strategy
- Mobile-responsive design
- Fast page load times
- Structured data markup

### Improving SEO Further
1. Regularly publish quality content
2. Use descriptive, keyword-rich titles
3. Optimise images with alt text
4. Build backlinks by sharing content
5. Keep content fresh and updated

---

## 🚀 Deployment

### Automatic Deployment

This site uses GitHub Actions for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions workflow builds the site
3. Site is automatically deployed to GitHub Pages
4. Live within minutes at `https://gil794.github.io`

### Manual Deployment

GitHub Pages automatically builds and deploys Jekyll sites. No manual deployment needed!

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file with your domain name
2. Configure DNS with your domain provider
3. Enable HTTPS in repository settings

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Areas for Contribution
- Bug fixes and improvements
- Performance optimisations
- Accessibility enhancements
- Documentation improvements
- Design suggestions

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

You're free to use this template for your own portfolio, but please:
- Remove or replace personal content
- Update configuration with your information
- Give credit where appropriate

---

## 📬 Contact

**Gabriele Iacopo Langellotto**

- 🌐 Website: [https://gil794.github.io](https://gil794.github.io)
- 📧 Email: [gilangellotto@gmail.com](mailto:gilangellotto@gmail.com)
- 💼 LinkedIn: [gabriele-iacopo-langellotto](https://www.linkedin.com/in/gabriele-iacopo-langellotto-aa7095a9)
- 🐙 GitHub: [@GIL794](https://github.com/GIL794)

---

## 🙏 Acknowledgments

- **Theme**: Built on [Alembic](https://github.com/daviddarnes/alembic) by David Darnes
- **Hosting**: Powered by [GitHub Pages](https://pages.github.com/)
- **Images**: Sourced from [Unsplash](https://unsplash.com/)
- **Icons**: Emoji icons for visual enhancement

---

<div align="center">

**⭐ Star this repo if you find it useful!**

Made with ❤️ by Gabriele I. Langellotto

</div>
