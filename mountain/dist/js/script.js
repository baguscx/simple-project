const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});


