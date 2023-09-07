// Relógio:

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const timeText = `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
  document.getElementById('clock').textContent = timeText;
}

function formatTimeComponent(component) {
  return component < 10 ? `0${component}` : component;
}

updateClock();
setInterval(updateClock, 1000);
