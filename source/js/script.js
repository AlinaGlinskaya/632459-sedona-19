'use strict';

var mainNav = document.querySelector('.main-nav');
var menuButton = mainNav.querySelector('.main-nav__button');

mainNav.classList.add('main-nav--closed');

menuButton.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
  mainNav.classList.remove('main-nav--closed');
  } else {
    mainNav.classList.add('main-nav--closed');
  }
});
