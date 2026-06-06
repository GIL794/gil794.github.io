# Blog Post Scheduling Documentation

## Overview

This site implements a time-based blog post visibility feature that allows posts to be scheduled for specific times of the day. Posts are configured to appear at **9:00 AM (morning)** and **5:00 PM (afternoon)**, enabling a consistent publishing schedule of **2 posts per day**.

## How It Works

### Client-Side Filtering

The blog uses JavaScript to filter posts based on their scheduled publication time. This is implemented in `blog.md` and runs entirely in the browser:

1. **Page Load**: When the blog page loads, the `filterBlogPostsByTime()` function executes
2. **Time Comparison**: For each post, the function compares the current date/time with the post's scheduled date/time
3. **Visibility Control**: Posts are shown or hidden based on whether their scheduled time has passed
4. **Auto-Update**: The filter re-runs every minute to ensure posts appear at the correct time

### Post Configuration

Each blog post includes a `time` field in its front matter:

```yaml
---
layout: post
title: "Your Post Title"
date: 2025-11-20
time: "09:00"  # or "17:00" for afternoon posts
categories: [Category1, Category2]
tags: [tag1, tag2]
excerpt: "Post description"
---
```

### Visibility Rules

- **Past Posts**: Always visible (date < today's date)
- **Today's Posts**: Visible only after their scheduled time has passed
  - Morning posts (09:00): Visible from 9:00 AM onwards
  - Afternoon posts (17:00): Visible from 5:00 PM onwards
- **Future Posts**: Hidden until their date and time arrive

## Implementation Details

### Front Matter Fields

- **`date`** (required): Publication date in `YYYY-MM-DD` format
- **`time`** (optional): Publication time in `HH:MM` format (24-hour)
  - Default: `09:00` if not specified
  - Recommended values: `09:00` (9 AM) or `17:00` (5 PM)

### Data Attributes

The blog template adds these attributes to each post card:

```html
<article class="post-card" 
         data-post-date="2025-11-20" 
         data-post-time="09:00">
  <!-- Post content -->
</article>
```

### JavaScript Function

Located in `blog.md`, the `filterBlogPostsByTime()` function:

1. Gets current date and time
2. Parses each post's date and time from data attributes
3. Calculates visibility based on comparison
4. Sets `display: none` for hidden posts
5. Removes `display` style for visible posts

### Auto-Refresh

The filter runs:
- On initial page load (DOMContentLoaded or immediate if DOM ready)
- Every 60 seconds (1 minute) via `setInterval`

This ensures posts become visible within 1 minute of their scheduled time.

## Adding New Posts

### For Morning Posts (9 AM)

```yaml
---
layout: post
title: "Morning Post Title"
date: 2025-11-25
time: "09:00"
categories: [Your, Categories]
tags: [your, tags]
excerpt: "Post description"
---
```

### For Afternoon Posts (5 PM)

```yaml
---
layout: post
title: "Afternoon Post Title"
date: 2025-11-25
time: "17:00"
categories: [Your, Categories]
tags: [your, tags]
excerpt: "Post description"
---
```

## Scheduling Pattern

For optimal content distribution, alternate between morning and afternoon posts:

| Date | Post 1 | Post 2 |
|------|--------|--------|
| Day 1 | 09:00 AM | 17:00 PM |
| Day 2 | 09:00 AM | 17:00 PM |
| Day 3 | 09:00 AM | 17:00 PM |

If you have only one post per day, use `09:00` for morning publication.

## Testing

To verify the feature works correctly:

1. **Check Current Time**: Note your local time
2. **View Blog Page**: Navigate to `/blog/`
3. **Verify Visibility**: 
   - Posts from past dates should be visible
   - Today's posts should only show if their time has passed
   - Future posts should be hidden

### Manual Testing

You can test with different times by modifying your system clock or by checking the browser console:

```javascript
// Check which posts are currently visible
document.querySelectorAll('.post-card[data-post-date]').forEach(post => {
  const isVisible = post.style.display !== 'none';
  console.log(post.querySelector('.post-title').textContent, isVisible);
});
```

## Browser Compatibility

The feature requires:
- JavaScript enabled
- Modern browser with ES6 support (2015+)
- `querySelectorAll`, `setAttribute`, `setInterval` support

Fallback: If JavaScript is disabled, all posts will be visible (progressive enhancement).

## Performance

- **Initial Load**: Single DOM query and iteration (O(n) where n = number of posts)
- **Updates**: Lightweight check every 60 seconds
- **No External Dependencies**: Pure JavaScript, no libraries required
- **Client-Side Only**: No server-side processing or API calls

## Customisation

### Changing Publication Times

Edit the default time in `blog.md`:

```javascript
const postTime = post.getAttribute('data-post-time') || '09:00';
```

Change `'09:00'` to your preferred default time.

### Adding More Publication Times

To support more than 2 posts per day, simply add more time values in post front matter:

```yaml
time: "12:00"  # Noon post
time: "21:00"  # Evening post
```

The filter will automatically handle any valid time.

### Changing Update Frequency

Edit the interval in `blog.md`:

```javascript
setInterval(filterBlogPostsByTime, 60000); // 60000ms = 1 minute
```

Change to `30000` for 30 seconds, `120000` for 2 minutes, etc.

## Timezone Considerations

The feature uses the **visitor's local time** for filtering. This means:

- A post scheduled for 09:00 will appear at 9 AM in the reader's timezone
- No server-side timezone conversion needed
- Consistent experience for all users based on their local time

If you need to use a specific timezone (e.g., UTC or EST), you'll need to modify the JavaScript to use a fixed timezone reference.

## Troubleshooting

### Posts Not Appearing

1. Check the post's `date` and `time` fields in front matter
2. Verify data attributes are rendered in HTML (`data-post-date`, `data-post-time`)
3. Check browser console for JavaScript errors
4. Ensure JavaScript is enabled

### Posts Appearing Too Early/Late

1. Verify your system time is correct
2. Check the post's `time` field format (must be `HH:MM`)
3. Remember the filter updates every minute

### All Posts Visible

1. Check if JavaScript is running (open browser console)
2. Verify the filter function executed (look for console logs)
3. Check for JavaScript errors that might prevent execution

## Future Enhancements

Potential improvements:

- Admin interface for scheduling posts
- Server-side rendering for SEO (SSR/SSG at build time)
- Email notifications when posts go live
- Analytics tracking for post visibility
- A/B testing different publication times
- Timezone selector for readers
- Preview mode for testing scheduled posts

## Security

- **No Security Risk**: Client-side filtering only affects display
- **Content Protection**: Server still serves all post HTML
- **Not DRM**: Determined users can view source or disable JavaScript
- **SEO Friendly**: Search engines will index all posts regardless of visibility

This is a UX feature, not a security feature. If you need true access control, implement server-side authentication.
