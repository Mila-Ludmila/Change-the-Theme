document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-stylesheet");

  // Check localStorage for user preference
  const userTheme = localStorage.getItem("style");

  // Apply user preference or default to light theme
  if (userTheme === "dark") {
      themeStylesheet.href = "style-dark.css";
  }

  // Theme toggle button click event
  themeToggle.addEventListener("click", function () {
      if (themeStylesheet.href.includes("light")) {
          themeStylesheet.href = "style-dark.css";
          localStorage.setItem("style", "dark");
      } else {
          themeStylesheet.href = "style-light.css";
          localStorage.setItem("style", "light");
      }
  });
});