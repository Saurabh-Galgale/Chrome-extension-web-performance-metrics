document.addEventListener('DOMContentLoaded', () => {
    const metricsDiv = document.getElementById('metrics');
    chrome.runtime.sendMessage({ message: 'getPerformanceData' }, (response) => {
      if(isNaN(response.loadTime)) {
        metricsDiv.innerText = "No data available. please refresh the website!";
      }  else {
        metricsDiv.innerText = `Load Time: ${response.loadTime} milliseconds`;
      }
    });
  });
  