// Initial set of person data
  const initialDataArray = [
    ["Alice", 28, 1.65, false],
    ["Bob", 35, 1.75, true],
    ["Charlie", 22, 1.80, false],
    ["David", 29, 1.70, true],
    ["Emily", 32, 1.68, true],
    ["Frank", 25, 1.72, false],
    ["Grace", 40, 1.60, true],
    ["Harry", 27, 1.78, false],
    ["Ivy", 33, 1.69, true],
    ["Jack", 31, 1.74, false],
    ["Karen", 26, 1.66, true],
    ["Leo", 36, 1.82, false],
    ["Mia", 29, 1.68, true],
    ["Nathan", 34, 1.76, false],
    ["Olivia", 23, 1.67, true],
    ["Paul", 37, 1.79, false],
    ["Quinn", 30, 1.71, true],
    ["Ryan", 28, 1.75, false],
    ["Sophia", 39, 1.63, true],
    ["Thomas", 24, 1.73, false],
    ["Ursula", 31, 1.69, true],
    ["Vincent", 38, 1.77, false],
    ["Wendy", 27, 1.76, true],
    ["Xander", 33, 1.68, false],
    ["Yara", 25, 1.70, true],
    ["Zane", 35, 1.81, false],
    ["Amy", 30, 1.72, true],
    ["Brian", 29, 1.74, false],
    ["Cindy", 28, 1.68, true],
    ["David", 36, 1.80, false],
    ["Emma", 31, 1.69, true],
    ["Frank", 27, 1.75, false],
    ["Grace", 32, 1.67, true],
    ["Harry", 25, 1.78, false],
    ["Ivy", 39, 1.65, true],
    ["Jack", 26, 1.76, false],
    ["Karen", 33, 1.68, true],
    ["Leo", 29, 1.77, false],
    ["Mia", 38, 1.70, true],
    ["Nathan", 24, 1.73, false],
    ["Olivia", 35, 1.69, true],
    ["Paul", 30, 1.71, false],
    ["Quinn", 28, 1.74, true],
    ["Ryan", 37, 1.79, false],
    ["Sophia", 23, 1.72, true],
    ["Thomas", 36, 1.76, false],
    ["Ursula", 31, 1.68, true],
    ["Vincent", 26, 1.75, false],
    ["Wendy", 38, 1.81, true],
    ["Xander", 32, 1.70, false],
    ["Yara", 27, 1.69, true],
    ["Zane", 34, 1.78, false],
    ["Amy", 29, 1.66, true],
    ["Brian", 35, 1.73, false],
    ["Cindy", 30, 1.77, true],
    ["David", 24, 1.68, false],
    ["Emma", 39, 1.71, true],
    ["Frank", 31, 1.75, false],
    ["Grace", 28, 1.72, true],
    ["Harry", 33, 1.70, false],
    ["Ivy", 26, 1.79, true],
    ["Jack", 37, 1.65, false],
    ["Karen", 32, 1.76, true],
    ["Leo", 29, 1.68, false],
    ["Mia", 36, 1.74, true],
    ["Nathan", 25, 1.77, false],
    ["Olivia", 38, 1.69, true],
    ["Paul", 23, 1.73, false],
    ["Quinn", 34, 1.68, true],
    ["Ryan", 31, 1.80, false],
    ["Sophia", 28, 1.69, true],
    ["Thomas", 35, 1.71, false],
    ["Ursula", 30, 1.76, true],
    ["Vincent", 27, 1.74, false],
    ["Wendy", 36, 1.68, true],
    ["Xander", 33, 1.79, false],
    ["Yara", 26, 1.72, true],
    ["Zane", 39, 1.70, false],
    ["Amy", 32, 1.78, true],
    ["Brian", 29, 1.66, false],
    ["Cindy", 24, 1.75, true],
    ["David", 37, 1.69, false],
    ["Emma", 30, 1.77, true],
    ["Frank", 35, 1.73, false],
    ["Grace", 22, 1.71, true],
    ["Harry", 39, 1.75, false],
    ["Ivy", 28, 1.68, true],
    ["Jack", 31, 1.80, false],
    ["Karen", 36, 1.76, true],
    ["Leo", 23, 1.69, false],
    ["Mia", 38, 1.70, true],
    ["Nathan", 25, 1.78, false],
    ["Olivia", 34, 1.72, true],
    ["Paul", 27, 1.74, false],
    ["Quinn", 32, 1.68, true],
    ["Ryan", 29, 1.79, false],
    ["Sophia", 35, 1.71, true],
    ["Thomas", 26, 1.77, false],
    ["Ursula", 31, 1.68, true],
    ["Vincent", 37, 1.75, false],
    ["Wendy", 30, 1.79, true],
    ["Xander", 24, 1.72, false],
    ["Yara", 33, 1.69, true],
    ["Zane", 38, 1.74, false],
    ["Amy", 28, 1.75, true],
    ["Brian", 35, 1.71, false],
    ["Cindy", 22, 1.68, true],
  ];
  
  // Function to process data (sorting based on age)
function processData(data) {
    return data.sort((a, b) => a[1] - b[1]);
  }
  
  
  function processWithoutWebWorker() {
    const dataArray = parseDataArray();
    const startTime = performance.now();
    const result = processData([...initialDataArray, dataArray]);
    const endTime = performance.now();
  
    displayResult("resultWithoutWebWorker", result, endTime - startTime);
  }
  
  function processWithWebWorker() {
    const dataArray = parseDataArray();
    const worker = new Worker("worker.js");
  
    worker.postMessage([...initialDataArray, dataArray]);
  
    worker.onmessage = function (event) {
      const endTime = performance.now();
      displayResult("resultWithWebWorker", event.data.result, endTime - event.data.startTime);
      worker.terminate();
    };
  }
  
  function parseDataArray() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const height = parseFloat(document.getElementById("height").value);
    const isStudent = document.getElementById("isStudent").checked;
  
    // Return an array representing person data
    return [name, age, height, isStudent];
  }
  
  function displayResult(elementId, result, processingTime) {
    const resultElement = document.getElementById(elementId);
    resultElement.innerHTML = `
      <p>Result: ${result.map(person => person.join(", ")).join("<br>")}</p>
      <p>Processing Time: ${processingTime.toFixed(2)} milliseconds</p>
    `;
  }
  