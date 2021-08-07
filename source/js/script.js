var navMain = document.querySelector('.main-nav__list');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__list--active')) {
    navMain.classList.add('main-nav__list--disabled');
    navMain.classList.remove('main-nav__list--active');
  } else {
    navMain.classList.remove('main-nav__list--disabled');
    navMain.classList.add('main-nav__list--active');
  }
});

navToggle.addEventListener('click', function() {
  if (navToggle.classList.contains('main-nav__toggle--active')) {
    navToggle.classList.remove('main-nav__toggle--active');
  } else {
    navToggle.classList.add('main-nav__toggle--active');
  }
});
