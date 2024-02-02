onmessage = function (event) {
    const startTime = performance.now();
    const result = processData(event.data);
    postMessage({ result, startTime });
  };
  
  function processData(data) {
    return data.sort((a, b) => a[1] - b[1]);
  }
  
