document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".nav");

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav")) {
      menu.classList.remove("nav--active");
    }
  });

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("nav--active");
  });
});