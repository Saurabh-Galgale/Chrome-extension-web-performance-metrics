chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getPerformanceData') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError) {
          sendResponse({ error: chrome.runtime.lastError.message });
        } else if (!tabs[0]) {
          sendResponse({ error: 'No active tab found' });
        } else {
          chrome.tabs.sendMessage(tabs[0].id, { message: 'getPerformanceData' }, (response) => {
            if (chrome.runtime.lastError) {
              sendResponse({ error: chrome.runtime.lastError.message });
            } else {
              sendResponse(response);
            }
          });
        }
      });
      return true;
    }
});
  