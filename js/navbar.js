const nav = document.querySelector('.links');
const navLinks = document.querySelectorAll('.nav-links li');
const burger = document.querySelector('.burger');


const navSlide = () => {
  burger.addEventListener('click', () => {
    toggle();
    
  });
};
navSlide();

function toggle() {


  //Toggle nav
  nav.classList.toggle('nav-active');

  //Animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });

  // Burger animate
  burger.classList.toggle('toggle');
}