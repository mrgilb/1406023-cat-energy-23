const navMain = document.querySelector('.main-nav__list');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__list--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav__list--active')) {
    navMain.classList.add('main-nav__list--disabled');
    navMain.classList.remove('main-nav__list--active');
  } else {
    navMain.classList.remove('main-nav__list--disabled');
    navMain.classList.add('main-nav__list--active');
  }
});

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-nav__toggle--active')) {
    navToggle.classList.remove('main-nav__toggle--active');
  } else {
    navToggle.classList.add('main-nav__toggle--active');
  }
});

const inputRange = document.querySelector('.example__range')
const fatCat = document.querySelector('.example__image-container-fat-cat')
const skinnyCat = document.querySelector('.example__image-container-skinny-cat')
const before = document.querySelector('.example__button--before')
const after = document.querySelector('.example__button--after')
const specialColor = document.querySelector('.example__special-background')
const screenWidth = window.screen.width

if (screenWidth >= 768) {
  inputRange.value = 50;
}
after.addEventListener('click', function () {
  inputRange.value = 0;
  fatCat.style.width = 0;
  skinnyCat.style.width = 100 + "%";
})
before.addEventListener('click', function () {
  inputRange.value = 100;
  skinnyCat.style.width = 0;
  fatCat.style.width = 100 + "%";
})
const background = document.querySelector('.example')
function imageSize() {
  fatCat.style.width = inputRange.value + "%";
  skinnyCat.style.width = 100 - inputRange.value + "%";
  background.style.setProperty('--color-divide', (inputRange.value/2)+ 2.4 + '%');
}
