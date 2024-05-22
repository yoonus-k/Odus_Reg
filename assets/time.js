function refreshTime() {
  const timeDisplay = document.getElementById("time");

  const dateString = new Date().toLocaleTimeString();

  timeDisplay.textContent = dateString;
}
setInterval(refreshTime, 100);
// assign on time func


