# AI Avatar Widget

Add a conversational AI avatar to any website with a single line of code.

## Quick Start

```html
<!-- AI Avatar Widget -->
<div id="ai-avatar" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999;"></div>

<script>
  (function(d,s,id,k){
    var js, fjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)){return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://[your-username].github.io/ai-avatar-widget/dist/avatar-widget.umd.js";
    fjs.parentNode.insertBefore(js, fjs);
    js.onload = function(){
      window.renderAvatarWidget('ai-avatar', {knowledgeID: k});
    }
  })(document, 'script', 'ai-avatar-js', 'YOUR_KNOWLEDGE_ID');
</script>
```

## Features

- 💬 Interactive AI chat assistant
- 🤖 3D avatar with realistic animations
- 🔌 Simple integration - just one script tag
- 🎨 Customizable appearance
- 📱 Mobile responsive
- ⚡ Fast loading (only 610KB)

## Documentation

Visit our [documentation site](https://[your-username].github.io/ai-avatar-widget/) for detailed guides and demos.

## Installation Options

### Method 1: CDN (Recommended)

Simply add our CDN snippet to your HTML file:

```html
<script src="https://[your-username].github.io/ai-avatar-widget/dist/avatar-widget.umd.js"></script>
```

### Method 2: Download & Host

Download the [latest release](https://github.com/[your-username]/ai-avatar-widget/releases) and host the files on your own server.

### Method 3: npm Package

```bash
npm install ai-avatar-widget
```

## Configuration

```javascript
window.renderAvatarWidget('container-id', {
  knowledgeID: 'your-knowledge-id',          // Required
  avatarId: 'Tyler-insuit-20220721',         // Optional
  openingMessage: 'Hello! Need help?',       // Optional
  // Additional options available
});
```

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

## License

MIT