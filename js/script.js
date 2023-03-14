let openMenu = document.querySelectorAll('.open-menu');
const closeMenu = document.querySelectorAll('.close-menu');
const menuContainer = document.querySelector('.menu');

openMenu.forEach(open =>{
  open.addEventListener('click', () =>{
    menuContainer.classList.remove('menu-hide');
  });
});

closeMenu.forEach(close => {
  close.addEventListener('click', () => {
    menuContainer.classList.add('menu-hide');
  });
});


/* ------------------ about -----------------------*/

new Swiper ('.about-swiper', {
  navigation:{
    nextEl: '.about-slide-next',
    prevEl: '.about-slide-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  simulateTouch: true,
  grabCursor: true,
  loop: true,
  // spaceBetween:
});


new Swiper ('.trainer-card-container',{
  navigation:{
    nextEl: '.arrow-btn-right',
    prevEl: '.arrow-btn-left'
  },

  simulateTouch: true,
  slidesPerView: 2.5,
  
  loop: true,

  onlyInViewport: true,

  pageupDown: true,

  mouseWheel:{
    sensivity: 1,
  }
});




const rules = document.querySelectorAll('.rules-item');
const suptitles = document.querySelectorAll('.suptitle');

suptitles.forEach((suptitle, index) => {
  suptitle.addEventListener('click', () => {
  document.querySelector('.rules-item--active')?.classList.remove('rules-item--active');

  document.querySelector('.suptitle-active')?.classList.remove('suptitle-active') ; 

  rules[index].classList.add('rules-item--active');
  suptitle.classList.add('suptitle-active');
})
})
/*-----------------------------------------------*/

