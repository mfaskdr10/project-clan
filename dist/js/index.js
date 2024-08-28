const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!navToggle.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
