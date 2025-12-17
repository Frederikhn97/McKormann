const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-panel");

burger.addEventListener("click", () => {
  burger.classList.toggle("active"); // Burger animation
  menu.classList.toggle("active"); // Menu slides ind
});
