chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'click') {
      console.log('Click detected on the page');
    }
    if (message.type === 'resources') {
      console.log(`Resources loaded: ${message.resources}`);
    }
    if (message.type === 'activity') {
      console.log(message.status);
    }
  });
  