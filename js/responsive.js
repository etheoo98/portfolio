let mobileMenuContainer = document.querySelector(".mobile-menu-container");
let footerNav = document.querySelector(".footer-nav");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let mobileNavToggleButton = document.querySelector(".toggle-mobile-menu-btn");
let footerToggleIcon = document.querySelector(".footer-toggle-icon");
let footerNavToggleButton = document.querySelector(
  ".toggle-mobile-footer-menu-btn"
);

function toggleMobileNav() {
  if (mobileMenuContainer.classList.contains("show")) {
    mobileMenuContainer.classList.remove("show");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    mobileNavToggleButton.setAttribute("aria-expanded", "false");
  } else {
    mobileMenuContainer.classList.add("show");
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    mobileNavToggleButton.setAttribute("aria-expanded", "true");
  }
}

function toggleMobileFooterNav() {
  if (footerNav.classList.contains("show")) {
    footerNav.classList.remove("show");
    footerToggleIcon.classList.remove("fa-xmark");
    footerToggleIcon.classList.add("fa-plus");
    footerNavToggleButton.setAttribute("aria-expanded", "false");
  } else {
    footerNav.classList.add("show");
    footerToggleIcon.classList.remove("fa-plus");
    footerToggleIcon.classList.add("fa-xmark");
    footerNavToggleButton.setAttribute("aria-expanded", "true");
  }
}

function handleWindowResize() {
  if (window.innerWidth > 1024) {
    mobileMenuContainer.classList.remove("show");
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");

    footerNav.classList.remove("show");
    footerToggleIcon.classList.remove("fa-xmark");
    footerToggleIcon.classList.add("fa-plus");
  }
}

window.addEventListener("resize", handleWindowResize);
handleWindowResize();
