const pathOfHamburgerIcon = "./assets/hamburger-menu.png";
const pathOfCloseIcon = "./assets/close.png";

function toggleMobileMenu(){
  let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
  let nav = document.getElementsByClassName("nav")[0];
  if(! nav.classList.contains('nav--opened')){
    nav.classList.add("nav--opened");
    menuIcon.src = pathOfCloseIcon;
  }else{
    nav.classList.remove("nav--opened");
    menuIcon.src = pathOfHamburgerIcon;
  }
}

let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
menuIcon.addEventListener("click", toggleMobileMenu);