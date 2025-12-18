# Drafts Folder

This folder contains **public** draft materials and blog post planning documents that are tracked in the repository.

## Purpose

Unlike the `_drafts/` folder (which is gitignored and kept private), this `drafts/` folder is committed to the repository and serves as a public workspace for:

1. **Blog Post Ideas** - Titles and descriptions of posts that haven't been written yet
2. **Content Planning** - Publishing schedules and content strategy
3. **Topic Tracking** - Ensuring all repositories and projects have corresponding blog coverage

## Contents

### `blog-post-ideas.md`

A comprehensive list of blog post titles and descriptions for content that hasn't been published yet, including:

- **Missing Repository Posts**: Projects and repositories that currently lack dedicated blog coverage
- **Professional Experiences**: Career highlights and case studies waiting to be documented
- **Future Ideas**: Backlog of technical tutorials and deep-dives

This file helps track:
- Which repositories from the projects page need blog posts
- Professional experiences that should be shared as case studies
- Content gaps and opportunities for new posts
- Publishing timeline and priorities

## Difference from `_drafts/`

| Feature | `drafts/` (this folder) | `_drafts/` |
|---------|-------------------------|------------|
| **Visibility** | Public (committed to repo) | Private (gitignored) |
| **Purpose** | Planning & ideas tracking | Actual post drafts |
| **Content** | Titles, descriptions, outlines | Full draft blog posts |
| **Jekyll** | Not processed by Jekyll | Processed with `--drafts` flag |

## Workflow

1. **Idea Generation**: Add new blog post ideas to `blog-post-ideas.md`
2. **Planning**: Review and prioritize ideas based on content strategy
3. **Drafting**: Create actual draft posts in `_drafts/` folder (private)
4. **Publishing**: Move completed posts from `_drafts/` to `_posts/` with dates
5. **Tracking**: Update `blog-post-ideas.md` as posts are published

## Usage

This folder is particularly useful for:
- Identifying content gaps across repositories and projects
- Planning publishing schedules aligned with the 9 AM / 5 PM system
- Ensuring comprehensive coverage of all professional work
- Collaborating with others on content ideas (if applicable)
- Maintaining a content roadmap

## Maintenance

- **Regular Reviews**: Check `blog-post-ideas.md` monthly to update priorities
- **Archive Published**: Remove or mark ideas as published once blog posts go live
- **Add New Ideas**: Continuously add new topics as projects and experiences evolve

---

**Created:** December 18, 2024
**Last Updated:** December 18, 2024
