const menuToggle = document.querySelector('.menu');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("showNav")
})