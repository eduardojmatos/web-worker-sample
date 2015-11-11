
// main script
window.addEventListener("load", function () {
  var worker = new Worker('js/worker.js');

  var button = document.querySelector(".worker-input button");
  var input = document.querySelector(".worker-input input");
  var messageContainer = document.querySelector(".worker-messages");

  worker.addEventListener('message', function(e) {
    var timeStamp = new Date(e.timeStamp);

    timeStamp = timeStamp.toLocaleDateString() + " | " + timeStamp.toLocaleTimeString();

    input.focus();
    button.classList.remove("disabled");

    if (e.data === "Invalid number") {
      alert("Invalid Number!");
      return false;
    }

    var message = document.createElement("p");
    message.innerHTML = "<p><strong>"+ timeStamp + "</strong> | Worker answers: Square of "+ input.value +" is: <em>" + e.data + "</em></p>";
    messageContainer.appendChild(message);

    message.style.opacity = 0;
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  }, false);

  button.addEventListener("click", function (event) {
    if ( button.className.includes("disabled") ) return false;

    button.classList.add("disabled");
    worker.postMessage(input.value);
  });
});

