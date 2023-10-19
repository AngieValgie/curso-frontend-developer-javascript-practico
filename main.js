const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuOption = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    //si está apareciendo (si NO tiene el inactive entonces)
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function togglemobileMenu() {
  const isAsideOpen = !aside.classList.contains("inactive");

  if (isAsideOpen) {
    //si está apareciendo (si NO contiene el inactive entonces)
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function togglemenuCarritoIcon() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
  const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

  if (isMobileMenuOpen) {
    //si está apareciendo (si NO contiene el inactive entonces )
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClose) {
    desktopMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuOption.addEventListener("click", togglemobileMenu);
menuCarritoIcon.addEventListener("click", togglemenuCarritoIcon);
