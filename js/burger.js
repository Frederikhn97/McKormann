const burger = document.querySelector(".burger");
const topbar = document.querySelector(".topbar");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  topbar.classList.toggle("active");
});
