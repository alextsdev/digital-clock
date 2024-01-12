function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function setInitialTheme() {
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
  } else {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDarkMode ? "dark" : "light");
  }
}

setInitialTheme();

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('clock').innerText = timeString;

  const progressBar = document.getElementById('progressBar');
  const progress = (seconds % 60) / 60;

  if (seconds % 60 === 0) {
      progressBar.style.backgroundColor = getRandomColor();
      progressBar.style.width = '0';
  }

  const clockWidth = document.getElementById('clock').offsetWidth;
  progressBar.style.width = `${(progress * clockWidth)}px`;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(updateClock, 1000);

updateClock();

