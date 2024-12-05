chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'getPerformanceData') {
      const [navigationTiming] = window.performance.getEntriesByType('navigation');
  
      let loadTime = navigationTiming.loadEventEnd - navigationTiming.startTime;

      const performanceData = { loadTime: loadTime.toFixed(2) }
  
      sendResponse(performanceData);
    }
  });
  