const pathOfHamburgerIcon = "./assets/hamburger-menu.png";
const pathOfCloseIcon = "./assets/close.png";

function handleMobileMenu(){
  let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
  let nav = document.getElementsByClassName("presentation__nav")[0];
  if(menuIcon.src.match(/hamburger-menu/g)){
    nav.style.height = "300px";
    menuIcon.src = pathOfCloseIcon;
  }else{
    nav.style.height = "55px";
    menuIcon.src = pathOfHamburgerIcon;
  }
}