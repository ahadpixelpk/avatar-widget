# 🤖 AI Avatar Widget - Dynamic Integration Guide

This package provides an AI avatar chat widget that can be easily integrated into any website. The widget is now fully configurable with data attributes, making it simple for users to customize.

## 📁 Package Contents

```
deployment-package/
├── assets/
│   ├── avatar-widget.umd.js        # Main widget bundle
│   ├── avatar-widget-loader.js     # Automatic loader script
│   └── ai-avatar.css               # Widget styles
├── examples/
│   ├── simple-example.html         # Basic integration
│   ├── dynamic-integration.html    # Integration with data attributes
│   └── advanced-example.html       # Advanced features
└── README.md                       # This file
```

## 🚀 Quick Integration (One Line)

Add this single script tag to your HTML:

```html
<!-- Place this where you want the chat widget to appear -->
<div id="ai-avatar-widget" 
     data-knowledge-id="your_knowledge_id"
     data-avatar-name="Tyler-insuit-20220721"
     data-opening-message="Hello! I'm Aiva. How can I help you today?">
</div>

<!-- Add this before the closing </body> tag -->
<script src="https://your-cdn.com/assets/avatar-widget-loader.js"></script>
```

That's it! The loader script automatically handles:
- Loading CSS styles
- Loading React dependencies if needed
- Initializing the widget with your configuration

## 📋 Configuration Options

You can configure the widget using data attributes on the container element:

| Data Attribute | Description | Required | Default |
|---------------|-------------|----------|---------|
| `data-knowledge-id` | Your knowledge base ID | ✅ Yes | - |
| `data-avatar-name` | Avatar model to use | ❌ No | `"Tyler-insuit-20220721"` |
| `data-opening-message` | First message shown to users | ❌ No | `"Hello! I'm Aiva. How can I help you today?"` |
| `data-position` | Position on screen (bottom-right, bottom-left, etc.) | ❌ No | `"bottom-right"` |
| `data-theme` | Color theme (light, dark) | ❌ No | `"light"` |

## 💻 Manual Integration

For more control over the loading process, you can manually integrate the widget:

```html
<!-- 1. Add CSS -->
<link rel="stylesheet" href="https://your-cdn.com/assets/ai-avatar.css">

<!-- 2. Add container with configuration -->
<div id="chat-container"
     data-knowledge-id="your_knowledge_id"
     data-avatar-name="Tyler-insuit-20220721"
     data-opening-message="Hello! I'm Aiva. How can I help you today?"
     style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;">
</div>

<!-- 3. Load dependencies -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
<script src="https://your-cdn.com/assets/avatar-widget.umd.js"></script>

<!-- 4. Initialize widget -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('chat-container');
    
    window.renderAvatarWidget('chat-container', {
      knowledgeID: container.getAttribute('data-knowledge-id'),
      avatarId: container.getAttribute('data-avatar-name') || 'Tyler-insuit-20220721',
      openingMessage: container.getAttribute('data-opening-message') || 'Hello! I\'m Aiva. How can I help you today?'
    });
  });
</script>
```

## 🌟 Multiple Widgets

You can have multiple widgets on the same page with different configurations:

```html
<!-- Customer Support Widget -->
<div id="support-widget" 
     data-knowledge-id="support_knowledge_id"
     data-avatar-name="Susan_public_2_20240328"
     data-opening-message="Need help with our products?">
</div>

<!-- Sales Assistant Widget -->
<div id="sales-widget" 
     data-knowledge-id="sales_knowledge_id"
     data-avatar-name="Anna_public_3_20240108"
     data-opening-message="Looking for pricing information?">
</div>

<script src="https://your-cdn.com/assets/avatar-widget-loader.js"></script>
```

## 🧪 Testing Your Integration

1. Make sure you have a valid `data-knowledge-id`
2. Check browser console for any errors
3. Verify the widget loads and responds to questions
4. Test on different devices and screen sizes

## 📱 Mobile Considerations

The widget is fully responsive, but consider:

- Position on mobile screens (bottom-center may work better)
- Touch interaction (ensure buttons are large enough)
- Performance on slower devices

## 🔒 Security Best Practices

- Always use HTTPS for the CDN URLs
- Don't include sensitive information in the opening message
- Consider content security policy implications

## 📞 Need Help?

If you encounter any issues:

1. Check browser console for errors
2. Verify all files are loading correctly
3. Ensure your knowledge ID is valid
4. Try the simple example first to isolate the issue

---

Enjoy your new AI Avatar Widget! 🚀