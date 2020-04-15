'use strict';

var mainNav = document.querySelector('.main-nav');
var menuToggler = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--no-js');
mainNav.classList.add('main-nav--closed');

menuToggler.addEventListener('click', function () {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
  } else {
    mainNav.classList.add('main-nav--closed');
  }
});
