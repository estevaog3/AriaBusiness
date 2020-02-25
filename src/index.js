import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';

let mobileMenu = ( ()=> {
  let menuIcons = document.getElementsByClassName("nav__menu-icon");
  let nav = document.getElementsByClassName("nav")[0];
  let menuItems = nav.getElementsByClassName("menu__item");

  function toggleMobileMenu(){
    nav.classList.toggle("nav--opened");
    for (let i = 0; i < menuIcons.length; i++){
      menuIcons[i].classList.toggle("nav__menu-icon--active");
    }
  }
  
  
  function closeMobileMenuOnMenuItemClick(){
    if(nav.classList.contains("nav--opened")){
      toggleMobileMenu();
    }
  }

  for(let i = 0; i < menuItems.length; i++){
    menuItems[i].addEventListener("click", closeMobileMenuOnMenuItemClick);
  }

  for (let i = 0; i < menuIcons.length; i++) {
    menuIcons[i].addEventListener("click", toggleMobileMenu);
  }
})();

let tabBodies = document.getElementsByClassName('tab-container__tab-body');
let navItems = document.getElementsByClassName("tab-container__nav-item");
let current = {
  'tabBodySelected': tabBodies[0],
  'navItemSelected': navItems[0]
};
function handleTabInteraction(event){
  if(tabBodies.length != navItems.length){
    console.error("There must be a equal number of nav items and tab bodies");
    return;
  }
  let selectedItem = parseInt(event.target.classList[0].slice(-1)); //the last character must be the item number
  if(isNaN(selectedItem) || selectedItem < 0 || selectedItem > navItems.length){
    console.error("'selectedItem' is invalid:", selectedItem);
    return;
  }
  current['navItemSelected'].classList.remove('tab-container__nav-item--selected');
  current['tabBodySelected'].classList.remove('tab-container__tab-body--selected');
  navItems[selectedItem - 1].classList.add('tab-container__nav-item--selected');
  tabBodies[selectedItem - 1].classList.add('tab-container__tab-body--selected');
  current['navItemSelected'] = navItems[selectedItem - 1];
  current['tabBodySelected'] = tabBodies[selectedItem - 1];
}

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener('click', handleTabInteraction);
}

function carousel (){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.slick-next'),
    prevArrow: $('.slick-prev'),
    mobileFirst: true,
    responsive :[
      {
        breakpoint: 755,
        settings:{
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1000,
        settings:{
          slidesToShow: 3,
        },
      }
    ]
  });
}
$(document).ready(carousel);

let formHandler = ( () => {
  let forms = document.getElementsByClassName("form");
  let formMessages = {};

  function handleFormSubmit(e){
    e.preventDefault();
    e.target.reset();
    formMessages[e.target.id].classList.add('form__submit-message--show');
    setTimeout(()=>{
      formMessages[e.target.id].classList.remove('form__submit-message--show');
    }, 3000);
  }

  for(let i = 0; i < forms.length; i++){
    forms[i].addEventListener("submit", handleFormSubmit);
    formMessages[forms[i].id] = document.querySelector(`[data-message-of='${forms[i].id}']`);
  }
})();

const scrollTopThreshold = 2;
let nav = document.getElementsByClassName('nav')[0];

function handleScroll(){
  if(document.body.scrollTop > scrollTopThreshold || document.documentElement.scrollTop > scrollTopThreshold){
    nav.classList.add('nav--on-scroll');
  }else{
    nav.classList.remove('nav--on-scroll');
  }
}

window.onscroll = () => {handleScroll()};

let navigationHanler = (() =>{
  let navigationTriggers = document.querySelectorAll("[data-navigate-to]");
  navigationTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      let destination = trigger.getAttribute('data-navigate-to');
      document.location.href = destination;
    });
  });
})();

let animatedTextHandler = (() => {
  let textList = ['SOLUTIONS', 'SERVICES', 'RESULTS'];
  let animatedText = document.querySelector('.js-animated-text');
  let next = 0;
  for(let i = 0; i < textList.length; i++){
    if(animatedText.innerText == textList[i]){
      next = (i + 1) % textList.length;
    }
  }
  
  let timeToFade = 2000;
  function changeText(){
    if(animatedText.classList.contains('js-animated-text--fade-out')){
      animatedText.innerText = textList[next];
      next = (next + 1) % textList.length;
      animatedText.classList.remove('js-animated-text--fade-out')
      animatedText.classList.add('js-animated-text--fade-in');
    }else{
      setTimeout(() => {
        animatedText.classList.remove('js-animated-text--fade-in');
        animatedText.classList.add('js-animated-text--fade-out');
      }, timeToFade);
    }
  }
  animatedText.addEventListener('transitionend', changeText);
  animatedText.classList.add('js-animated-text--fade-out');
})();