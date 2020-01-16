const pathOfHamburgerIcon = "./assets/hamburger-menu.png";
const pathOfCloseIcon = "./assets/close.png";

function toggleMobileMenu(){
  let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
  let nav = document.getElementsByClassName("nav")[0];
  if(menuIcon.src.match(/hamburger-menu/g)){
    nav.style.height = "300px";
    menuIcon.src = pathOfCloseIcon;
  }else{
    nav.style.height = "55px";
    menuIcon.src = pathOfHamburgerIcon;
  }
}

let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
menuIcon.addEventListener("click", toggleMobileMenu);