onmessage = function (event) {
    const startTime = performance.now();
    const result = processData(event.data);
    postMessage({ result, startTime });
  };
  
  function processData(data) {
    // Replace this with your heavy data processing logic
    return data.sort((a, b) => a - b);
  }
  