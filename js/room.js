
function changeBackground(imgs) {
  let expandImg = document.getElementById('expandedImg');
  // let imgText = document.getElementById('imgtext');
  expandImg.src = imgs.src;
  // imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = 'block';
}

let storedJsonString = localStorage.getItem('userChoiceItemKey');

// Convert the JSON string from quiz.html back into a playlist array
let storedArray = JSON.parse(storedJsonString);

// Now, 'storedArray' contains the array you stored in localStorage
console.log(storedArray);


function appendToConsole(playlist) {
  let logTextarea = document.getElementById('consoleLogs');

  // Check if the message is an object and stringify it
  if (typeof playlist === 'object') {
    playlist = JSON && JSON.stringify ? JSON.stringify(playlist) : playlist;
  }

  // Append the message to the textarea
  logTextarea.value += playlist + '\n';
}

// Store the original console.log function
let originalConsoleLog = console.log;

// Override console.log to display messages in the textarea
console.log = function () {
  for (let i = 0; i < arguments.length; i++) {
    appendToConsole(arguments[i]);
  }

  // Call the original console.log function to output messages to the browser console
  if (typeof originalConsoleLog === 'function') {
    originalConsoleLog.apply(console, arguments);
  }
  console.log(storedArray);

};






