function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.onscroll = function () {
  let scrollButton = document.querySelector(".scroll-to-top-btn");
  let header = document.querySelector(".header-top-container");

  if (header && window.scrollY > header.offsetHeight) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
};
