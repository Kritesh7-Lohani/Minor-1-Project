document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  if (menuIcon && navbar) {
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });

    window.addEventListener("scroll", function () {
      if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
      }
    });
  }

  const themeSwitch = document.getElementById("theme-switch");
  if (themeSwitch) {
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("darkmode");
    }
    themeSwitch.addEventListener("click", function () {
      document.body.classList.toggle("darkmode");
      localStorage.setItem(
        "darkMode",
        document.body.classList.contains("darkmode") ? "enabled" : "disabled"
      );
    });
  }
});
