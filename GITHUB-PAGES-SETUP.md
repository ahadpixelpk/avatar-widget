# GitHub Pages Setup Guide

Follow these steps to enable GitHub Pages for your repository:

1. Go to your GitHub repository at https://github.com/ahadpixelpk/avatar-widget

2. Click on the **Settings** tab near the top of the page

3. Scroll down to the **GitHub Pages** section (or click on "Pages" in the left sidebar)

4. Under **Source**, select "Deploy from a branch"

5. Under **Branch**, select "master" and "/root" as the folder, then click **Save**

6. Wait a few minutes for GitHub Pages to build your site

7. Your site will be available at: https://ahadpixelpk.github.io/avatar-widget/

8. You can verify that GitHub Pages is enabled by checking for a green box with a message like "Your site is published at..."

## Testing Your CDN Files

Once GitHub Pages is enabled, test that your CDN files are accessible:

1. Try accessing your CSS file:
   ```
   https://ahadpixelpk.github.io/avatar-widget/dist/ai-avatar.css
   ```

2. Try accessing your JavaScript file:
   ```
   https://ahadpixelpk.github.io/avatar-widget/dist/avatar-widget.umd.js
   ```

3. Try accessing your loader script:
   ```
   https://ahadpixelpk.github.io/avatar-widget/dist/avatar-widget-loader.js
   ```

## Integration Example

Once your files are accessible via GitHub Pages, users can integrate the widget with just:

```html
<!-- AI Avatar Widget -->
<div id="ai-avatar-widget" 
     data-knowledge-id="your_knowledge_id"
     data-avatar-name="Tyler-insuit-20220721"
     data-opening-message="Hello! I'm Aiva. How can I help you today?"></div>

<!-- Widget Loader -->
<script src="https://ahadpixelpk.github.io/avatar-widget/dist/avatar-widget-loader.js"></script>
```

Remember, it may take a few minutes for GitHub Pages to build your site after you enable it.