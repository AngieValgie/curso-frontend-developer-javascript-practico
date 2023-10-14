const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuOption = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
function togglemobileMenu() {
  mobileMenu.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuOption.addEventListener("click", togglemobileMenu);
