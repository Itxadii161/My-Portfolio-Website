const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("nav-list ul");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle("active");
});
