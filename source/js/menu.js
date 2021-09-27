const menu = document.querySelector ('.header-nav');
const buttonMenu = document.querySelector ('.header-nav__toggle');
const introBlock = document.querySelector ('.intro-wrapper');

menu.classList.remove('header-nav--nojs');
introBlock.classList.remove('intro-wrapper--open');

buttonMenu.addEventListener('click', (evt)=> {
  evt.preventDefault();
  menu.classList.toggle('header-nav--open');
  introBlock.classList.toggle('intro-wrapper--open');
});
