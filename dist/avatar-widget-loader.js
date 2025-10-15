/**
 * AI Avatar Widget CDN Integration Script
 * Version: 1.0.0
 * 
 * This script automatically loads all necessary dependencies and initializes
 * the AI Avatar Widget with custom parameters.
 * 
 * Usage:
 * <div id="ai-avatar-widget" 
 *      data-knowledge-id="your_knowledge_id" 
 *      data-avatar-name="Tyler-insuit-20220721" 
 *      data-opening-message="Hello! I'm Aiva. How can I help you today?">
 * </div>
 * <script src="https://your-cdn.com/avatar-widget-loader.js"></script>
 */

(function(window, document) {
  // Configuration
  const DEFAULT_CONTAINER_ID = 'ai-avatar-widget';
  const DEFAULT_AVATAR = 'Tyler-insuit-20220721';
  const DEFAULT_MESSAGE = 'Hello! I\'m Aiva. How can I help you today?';
  
  // CDN URLs - Using GitHub Pages URL for avatar-widget repository
  const CDN_BASE = 'https://ahadpixelpk.github.io/avatar-widget';
  const CSS_URL = `${CDN_BASE}/dist/ai-avatar.css`;
  const WIDGET_URL = `${CDN_BASE}/dist/avatar-widget.umd.js`;
  const REACT_URL = 'https://unpkg.com/react@18/umd/react.production.min.js';
  const REACT_DOM_URL = 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js';
  
  /**
   * Loads a script asynchronously and executes callback when loaded
   */
  function loadScript(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.crossOrigin = 'anonymous';
    
    if (callback) {
      script.onload = callback;
    }
    
    document.head.appendChild(script);
    return script;
  }
  
  /**
   * Loads CSS file
   */
  function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
    return link;
  }
  
  /**
   * Creates a container element if it doesn't exist
   */
  function ensureContainer(id) {
    let container = document.getElementById(id);
    
    // If container doesn't exist, create one
    if (!container) {
      container = document.createElement('div');
      container.id = id;
      container.style.position = 'fixed';
      container.style.bottom = '20px';
      container.style.right = '20px';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }
    
    return container;
  }
  
  /**
   * Initialize the widget with the given container and config
   */
  function initializeWidget(containerId) {
    // Get or create container
    const container = ensureContainer(containerId);
    
    // Read configuration from data attributes
    const config = {
      knowledgeID: container.getAttribute('data-knowledge-id'),
      avatarId: container.getAttribute('data-avatar-name') || DEFAULT_AVATAR,
      openingMessage: container.getAttribute('data-opening-message') || DEFAULT_MESSAGE
    };
    
    // Apply position if specified
    const position = container.getAttribute('data-position');
    if (position) {
      const [vertical, horizontal] = position.split('-');
      
      // Clear existing position styles
      container.style.top = '';
      container.style.bottom = '';
      container.style.left = '';
      container.style.right = '';
      
      // Set new position
      if (vertical === 'top') container.style.top = '20px';
      else container.style.bottom = '20px';
      
      if (horizontal === 'left') container.style.left = '20px';
      else container.style.right = '20px';
    }
    
    // Apply theme if specified
    const theme = container.getAttribute('data-theme');
    if (theme === 'dark') {
      config.theme = 'dark';
    }
    
    // Validate required parameters
    if (!config.knowledgeID) {
      console.error('Avatar Widget: Missing required data-knowledge-id attribute');
      container.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px;">Error: Missing knowledge ID</div>';
      return;
    }
    
    // Initialize the widget if function exists
    if (typeof window.renderAvatarWidget === 'function') {
      try {
        window.renderAvatarWidget(containerId, config);
      } catch (error) {
        console.error('Avatar Widget: Initialization error', error);
        container.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px;">Widget initialization failed</div>';
      }
    } else {
      console.error('Avatar Widget: renderAvatarWidget function not found');
      container.innerHTML = '<div style="background: #f8d7da; color: #721c24; padding: 10px; border-radius: 5px;">Widget function not available</div>';
    }
  }
  
  /**
   * Load all dependencies and initialize widget
   */
  function loadDependenciesAndInitialize() {
    // Find all container elements with the data-knowledge-id attribute
    const containers = document.querySelectorAll('[data-knowledge-id]');
    const containersArray = Array.from(containers);
    
    // If no containers found, look for default container
    if (containersArray.length === 0) {
      const defaultContainer = document.getElementById(DEFAULT_CONTAINER_ID);
      if (defaultContainer) {
        containersArray.push(defaultContainer);
      }
    }
    
    // If no containers found at all, create a default one
    if (containersArray.length === 0) {
      const container = ensureContainer(DEFAULT_CONTAINER_ID);
      containersArray.push(container);
      
      // Show warning about missing knowledge ID
      console.warn('Avatar Widget: No container with data-knowledge-id found. Using default container.');
      container.innerHTML = '<div style="background: #fff3cd; color: #856404; padding: 10px; border-radius: 5px;">Warning: Missing knowledge ID</div>';
    }
    
    // Load CSS first
    loadCSS(CSS_URL);
    
    // Check if React is loaded
    if (typeof React === 'undefined') {
      // Load React first
      loadScript(REACT_URL, function() {
        // Then React DOM
        loadScript(REACT_DOM_URL, function() {
          // Finally, load widget
          loadScript(WIDGET_URL, function() {
            // Initialize for each container
            containersArray.forEach(container => {
              initializeWidget(container.id);
            });
          });
        });
      });
    } else if (typeof ReactDOM === 'undefined') {
      // Only need to load React DOM
      loadScript(REACT_DOM_URL, function() {
        // Then widget
        loadScript(WIDGET_URL, function() {
          // Initialize for each container
          containersArray.forEach(container => {
            initializeWidget(container.id);
          });
        });
      });
    } else {
      // React and ReactDOM already loaded, just load widget
      loadScript(WIDGET_URL, function() {
        // Initialize for each container
        containersArray.forEach(container => {
          initializeWidget(container.id);
        });
      });
    }
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDependenciesAndInitialize);
  } else {
    loadDependenciesAndInitialize();
  }
  
  // Export loader for external use
  window.AvatarWidgetLoader = {
    load: loadDependenciesAndInitialize,
    initialize: initializeWidget
  };
  
})(window, document);