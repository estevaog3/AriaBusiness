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

let tabBodies = document.getElementsByClassName('tab-container__tab-body');

function handleTabInteraction(event){
  if(tabBodies.length != navItems.length){
    console.error("There must be a equal number of nav items and tab bodies");
    return;
  }
  let selectedItem = parseInt(event.target.classList[0].slice(-1)); //the last character must be the item number
  if(isNaN(selectedItem) || selectedItem < 0 
  || selectedItem > navItems.length || selectedItem > tabBodies.length){
    console.error("'selectedItem' is invalid:", selectedItem);
    return;
  }
  for (let i = 0; i < navItems.length; i++){
    navItems[i].classList.remove('tab-container__nav-item--selected');
    tabBodies[i].classList.remove('tab-container__tab-body--selected');
  }
  tabBodies[selectedItem - 1].classList.add('tab-container__tab-body--selected');
  navItems[selectedItem - 1].classList.add('tab-container__nav-item--selected');
}

let navItems = document.getElementsByClassName("tab-container__nav-item");
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', handleTabInteraction);
}

let menuIcon = document.getElementsByClassName("nav__menu-icon")[0];
menuIcon.addEventListener("click", toggleMobileMenu);