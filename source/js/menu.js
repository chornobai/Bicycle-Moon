const menu = document.querySelector ('.header-nav');
const menuButton = document.querySelector ('.header-nav__toggle');
const introBlock = document.querySelector ('.intro-wrapper');
const menuLinks  = document.querySelectorAll('.header-nav__link');
const body = document.querySelector('body');


menu.classList.remove('header-nav--nojs');
introBlock.classList.remove('intro-wrapper--open');

menuButton.addEventListener('click', (evt)=> {
  evt.preventDefault();
  menu.classList.toggle('header-nav--open');
  body.classList.toggle('body--overflow');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    menu.classList.remove('header-nav--open');
    const blockId = item.getAttribute('href');
    document.querySelector(`${  blockId}`).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    body.classList.remove('body--overflow');
  });
});
