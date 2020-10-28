
try {
  let cumulativeLayoutShiftScore = 0;

  const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Only count layout shifts without recent user input.
    console.log(entry);
    cumulativeLayoutShiftScore += entry.value;
  }
  });

  observer.observe({type: 'layout-shift', buffered: true});

  document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    // Force any pending records to be dispatched.
    observer.takeRecords();
    observer.disconnect();

    console.log('CLS:', cumulativeLayoutShiftScore);
  }
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
