document.addEventListener('DOMContentLoaded', () => {
    const clicksElement = document.getElementById('clicks');
    const scrollDepthElement = document.getElementById('scroll-depth');
    const resourcesElement = document.getElementById('resources');
    const loadTimeElement = document.getElementById('load-time');
    const imageCountElement = document.getElementById('image-count');
    const scriptCountElement = document.getElementById('script-count');
    const linkCountElement = document.getElementById('link-count');
    const engagementElement = document.getElementById('engagement');
  
    // Query active tab and communicate with the content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
  
      // Send a message to the content script to gather data
      chrome.tabs.sendMessage(tabId, { type: 'getPageData' }, (response) => {
        if (response) {
          clicksElement.textContent = `Clicks: ${response.clicks || 0}`;
          scrollDepthElement.textContent = `Scroll Depth: ${response.scrollDepth || 0}%`;
          resourcesElement.textContent = `Resources Loaded: ${response.resources || 0}`;
          loadTimeElement.textContent = `Page Load Time: ${response.loadTime || 'Calculating...'} ms`;
          imageCountElement.textContent = `Images: ${response.images || 0}`;
          scriptCountElement.textContent = `Scripts: ${response.scripts || 0}`;
          linkCountElement.textContent = `Links: ${response.links || 0}`;
          engagementElement.textContent = `User Engagement: ${response.engagement || 'Calculating...'}%`;
        }
      });
    });
  });
  