const pathOfHamburgerIcon = "./assets/hamburger-menu.png";
const pathOfCloseIcon = "./assets/close.png";

function handleMobileMenu(){
  let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
  let menuContent = document.getElementsByClassName("nav__menu-content")[0];
  if(menuIcon.src.match(/hamburger-menu/g)){
    menuContent.style.height = "275px";
    menuContent.style.padding = "25px";
    menuIcon.src = pathOfCloseIcon;
  }else{
    menuContent.style.height = "0";
    menuContent.style.padding = "0";
    menuIcon.src = pathOfHamburgerIcon;
  }
}