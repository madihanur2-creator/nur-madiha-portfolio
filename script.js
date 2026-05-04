// Set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple theme toggle demo (light/future vs dark/future)
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Optional: you can define different colors for .light-mode later in CSS
