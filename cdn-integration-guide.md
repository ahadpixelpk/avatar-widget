# AI Avatar Widget - CDN Integration Guide

This guide explains how to make your AI avatar widget available for easy integration into any website using GitHub Pages as a CDN.

## Step 1: Create a GitHub Repository

1. Create a new public GitHub repository (e.g., `ai-avatar-widget`)
2. Structure your repository as follows:
   ```
   ai-avatar-widget/
   ├── dist/
   │   ├── avatar-widget.umd.js
   │   └── ai-avatar.css
   ├── examples/
   │   ├── simple-example.html
   │   └── advanced-example.html
   ├── README.md
   └── index.html
   ```

## Step 2: Enable GitHub Pages

1. Go to repository settings
2. Under "GitHub Pages" section, select "main" branch as source
3. Choose "/ (root)" folder
4. Save changes
5. Your CDN URL will be: `https://[your-username].github.io/ai-avatar-widget/`

## Step 3: Prepare Widget for CDN Use

Create a minified snippet that users can copy-paste into their websites:

```html
<!-- AI Avatar Widget Integration -->
<div id="ai-avatar-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;"></div>

<!-- One-line integration script -->
<script>
  (function(d,s,id,k,a,m){
    if(d.getElementById(id)) return;
    var js, fjs = d.getElementsByTagName(s)[0];
    js = d.createElement(s); js.id = id; js.async = true;
    js.src = "https://[your-username].github.io/ai-avatar-widget/dist/avatar-widget.umd.js";
    var link = d.createElement('link');
    link.rel = 'stylesheet'; 
    link.href = "https://[your-username].github.io/ai-avatar-widget/dist/ai-avatar.css";
    d.head.appendChild(link);
    fjs.parentNode.insertBefore(js, fjs);
    js.onload = function() {
      window.renderAvatarWidget('ai-avatar-widget', {
        knowledgeID: k || '68e604b9028f2f5066e31678', 
        avatarId: a || 'Tyler-insuit-20220721',
        openingMessage: m || 'Hello! How can I help you today?'
      });
    }
  })(document,'script','avatar-widget-script','YOUR_KNOWLEDGE_ID','Tyler-insuit-20220721','Hello! How can I help you today?');
</script>
```

## Step 4: Create Comprehensive Documentation

In your README.md, provide:

1. Basic integration snippet (above)
2. Configuration options
3. Examples
4. Troubleshooting tips

## Step 5: Add Auto-Loading Dependencies

Update your widget initialization script to automatically load React dependencies if they're not already present:

```javascript
function loadScript(src, callback) {
  var script = document.createElement('script');
  script.src = src;
  script.crossOrigin = "anonymous";
  script.onload = callback;
  document.head.appendChild(script);
}

// Check if React is loaded
if (typeof React === 'undefined') {
  loadScript('https://unpkg.com/react@18/umd/react.production.min.js', function() {
    // Load React DOM after React
    loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', function() {
      // Initialize widget after dependencies are loaded
      initializeWidget();
    });
  });
} else {
  // React already loaded, just check React DOM
  if (typeof ReactDOM === 'undefined') {
    loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', function() {
      initializeWidget();
    });
  } else {
    // Both already loaded
    initializeWidget();
  }
}
```

## Step 6: Create an Index Page

Create an `index.html` file in your repository root with:
- Widget demo
- Installation instructions
- Configuration examples

## Step 7: Versioning Strategy

Consider using semantic versioning for your widget:
```
https://[your-username].github.io/ai-avatar-widget/dist/v1/avatar-widget.umd.js
https://[your-username].github.io/ai-avatar-widget/dist/v1.2/avatar-widget.umd.js
https://[your-username].github.io/ai-avatar-widget/dist/latest/avatar-widget.umd.js
```

## Step 8: Usage Analytics (Optional)

Consider adding simple analytics to track widget usage:
```javascript
// Simple anonymous usage tracking
fetch('https://your-analytics-endpoint.com/track', {
  method: 'POST',
  body: JSON.stringify({
    event: 'widget_load',
    timestamp: new Date().toISOString(),
    referrer: document.referrer
  }),
  headers: { 'Content-Type': 'application/json' }
});
```