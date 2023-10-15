document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeStylesheet = document.getElementById("theme-stylesheet");
  const userTheme = localStorage.getItem("style");
  if (userTheme === "dark") {
      themeStylesheet.href = "style-dark.css";
  }
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
