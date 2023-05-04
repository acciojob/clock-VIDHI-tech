//your JS code here. If required.
function updateTime() {
  const now = new Date();
  const timer = document.getElementById('timer');
  timer.textContent = now.toLocaleString();
}

// Update the timer every second
setInterval(updateTime, 1000);
