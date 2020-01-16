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