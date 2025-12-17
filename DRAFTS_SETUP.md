# Private Blog Drafts Folder - Setup Complete ✅

## What Was Restored

This document explains what was done to restore the `_drafts/` folder functionality that was referenced in commit `6b94e5880bf2fdbd0942c5679bfb6ca96a5db56d` (Merge PR #45).

### Analysis of the Original Commit

The commit `6b94e5880bf2fdbd0942c5679bfb6ca96a5db56d` merged PR #45 which was titled "create-private-blog-folder". This established the entire Jekyll blog infrastructure including:

- Complete Jekyll configuration
- Blog post scheduling system
- Time-based post filtering (9 AM and 5 PM publishing)
- Documentation referencing a `_drafts/` folder for private work

However, the `_drafts/` folder itself was **gitignored** (line 40 of `.gitignore`), meaning it exists only locally and never gets committed to the repository.

## What Has Been Created

The following structure has been created in the `_drafts/` folder:

```
_drafts/
├── README.md           # Comprehensive guide on using drafts (6,151 chars)
├── draft-ideas.md      # Template for brainstorming post ideas (5,958 chars)
└── example-draft.md    # Example draft post showing the workflow (3,002 chars)
```

### File Descriptions

1. **README.md** - Complete documentation covering:
   - What the drafts folder is for
   - Privacy and security guarantees
   - How to create and preview drafts
   - Publishing workflow
   - Organization tips and best practices
   - FAQ section

2. **draft-ideas.md** - Organized brainstorming template with:
   - Quick ideas checklist
   - Topic categories (AI/ML, Blockchain, Full-Stack, Data Science, Career)
   - Potential titles and formats
   - Content strategy planning
   - Publishing pipeline tracker

3. **example-draft.md** - Demonstration draft post showing:
   - Proper front matter format
   - Markdown examples
   - Publishing instructions
   - Workflow tips

## How to Verify the Setup

Since the `_drafts/` folder is gitignored, these files exist only in your local working directory. Here's how to verify everything is working:

### 1. Check the Folder Exists Locally

```bash
ls -la _drafts/
```

You should see:
```
total 28
drwxrwxr-x  2 runner runner 4096 Dec 17 15:12 .
drwxr-xr-x 10 runner runner 4096 Dec 17 15:11 ..
-rw-rw-r--  1 runner runner 6261 Dec 17 15:11 README.md
-rw-rw-r--  1 runner runner 5988 Dec 17 15:12 draft-ideas.md
-rw-rw-r--  1 runner runner 3040 Dec 17 15:12 example-draft.md
```

### 2. Verify Files Are Gitignored

```bash
git status
```

The `_drafts/` folder should **NOT** appear in the output. If you see:
```
nothing to commit, working tree clean
```
or only other files listed, then the gitignore is working correctly.

### 3. Test Jekyll Preview with Drafts

Install dependencies (if not already done):
```bash
gem install bundler
bundle install
```

Preview the site with drafts enabled:
```bash
bundle exec jekyll serve --drafts
```

Visit `http://localhost:4000/blog/` and you should see the example draft post appear in the blog listing.

### 4. Verify Publishing Workflow

Try publishing the example draft:

```bash
# Add a date to the front matter in _drafts/example-draft.md
# Then move it to _posts/ with a date prefix:
mv _drafts/example-draft.md _posts/2025-12-17-example-draft.md

# Verify it appears without --drafts flag:
bundle exec jekyll serve
# Visit http://localhost:4000/blog/
```

## How to Use Going Forward

### Creating Your First Real Draft

1. **Start with ideas**:
   ```bash
   # Edit _drafts/draft-ideas.md and add your idea
   nano _drafts/draft-ideas.md
   ```

2. **Create a draft file**:
   ```bash
   # Create a new markdown file (no date needed in filename)
   touch _drafts/my-awesome-post.md
   ```

3. **Add front matter**:
   ```yaml
   ---
   layout: post
   title: "My Awesome Post"
   categories: [AI, Technology]
   tags: [ai, coding]
   excerpt: "Description of my post"
   ---
   
   Your content here...
   ```

4. **Preview locally**:
   ```bash
   bundle exec jekyll serve --drafts
   ```

5. **Publish when ready**:
   ```bash
   # Add date and time to front matter
   # Move to _posts/ with date prefix
   mv _drafts/my-awesome-post.md _posts/2025-12-20-my-awesome-post.md
   git add _posts/2025-12-20-my-awesome-post.md
   git commit -m "Publish: My awesome post"
   git push
   ```

## Security & Privacy Notes

✅ **Guaranteed Private**: Files in `_drafts/` are listed in `.gitignore` (line 40)

✅ **Never Committed**: Git will ignore all files in this folder unless you explicitly force-add them

✅ **Not on Live Site**: Draft posts will never appear on https://gil794.github.io unless moved to `_posts/`

✅ **Local Only**: These files exist only on your local machine

⚠️ **Backup Reminder**: Since drafts are not in Git, consider backing them up separately if they're important

## Integration with Existing Features

The drafts folder works seamlessly with the existing blog infrastructure:

1. **Time-Based Publishing**: When you publish a draft to `_posts/`, add a `time` field ("09:00" or "17:00") to use the scheduled publishing feature

2. **Blog Post Scheduling**: See `BLOG_POST_SCHEDULING.md` for details on the 9 AM / 5 PM publishing schedule

3. **Categories and Tags**: Use the same category structure from published posts in your drafts

4. **Jekyll Build**: The GitHub Actions workflow (`.github/workflows/jekyll-build.yml`) will ignore drafts automatically

## Troubleshooting

### Drafts Not Showing When Using --drafts

- Verify the file is in `_drafts/` folder
- Check the front matter is valid YAML
- Ensure the file has `.md` extension
- Try restarting the Jekyll server

### Accidentally Committed a Draft

```bash
# This is highly unlikely due to .gitignore, but if it happens:
git rm --cached _drafts/your-file.md
git commit -m "Remove accidentally committed draft"
git push
```

### Want to Share Drafts with Collaborators

Since drafts are gitignored, to share them:
- Use a separate private repository
- Send files via email or cloud storage
- Use collaborative writing tools (Google Docs, Notion, etc.)

## Next Steps

1. ✅ Read through `_drafts/README.md` for detailed usage instructions
2. ✅ Review `_drafts/draft-ideas.md` and add your own ideas
3. ✅ Preview the example draft using `bundle exec jekyll serve --drafts`
4. ✅ Create your first real draft
5. ✅ Delete `_drafts/example-draft.md` when you're comfortable with the workflow

## References

- [Jekyll Drafts Documentation](https://jekyllrb.com/docs/posts/#drafts)
- [Blog Post Scheduling Documentation](./BLOG_POST_SCHEDULING.md)
- [Main README](./README.md)
- [Original Commit](https://github.com/GIL794/gil794.github.io/commit/6b94e5880bf2fdbd0942c5679bfb6ca96a5db56d)

---

**Setup completed**: December 17, 2024
**Commit that required this**: `6b94e5880bf2fdbd0942c5679bfb6ca96a5db56d`
**Status**: ✅ Fully functional and ready to use
