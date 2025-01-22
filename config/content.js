let clickCount = 0;
let scrollDepth = 0;

// Track clicks
document.addEventListener('click', () => {
  clickCount++;
});

// Track scroll depth
window.addEventListener('scroll', () => {
  const depth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
  scrollDepth = Math.max(scrollDepth, depth);
});

// Collect data
function getPageData() {
  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
  const resources = document.querySelectorAll('*').length;
  const images = document.querySelectorAll('img').length;
  const scripts = document.querySelectorAll('script').length;
  const links = document.querySelectorAll('a').length;
  const engagement = Math.min(Math.random() * 100 + scrollDepth, 100).toFixed(2); // Example engagement calculation

  return {
    clicks: clickCount,
    scrollDepth: scrollDepth,
    loadTime: loadTime,
    resources: resources,
    images: images,
    scripts: scripts,
    links: links,
    engagement: engagement,
  };
}

// Listen for messages
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'getPageData') {
    sendResponse(getPageData());
  }
});
