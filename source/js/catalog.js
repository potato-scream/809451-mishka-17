var cartLinks = document.querySelectorAll(".catalog__button");
var modal = document.querySelector(".modal");
var backdrop = document.querySelector(".modal-backdrop");

for (var i = 0; i < cartLinks.length; i = i + 1) {
  cartLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
      backdrop.classList.add("backdrop-show");
    });
}

backdrop.addEventListener("click", function (evt) {
    modal.classList.remove("modal-show");
    backdrop.classList.remove("backdrop-show");
});

var siteNav = document.querySelector(".header__site-navigation");
var userNav = document.querySelector(".header__user-navigation");
var cross = document.querySelector(".header__menu-btn--cross");
var burger = document.querySelector(".header__menu-btn--burger");

cross.classList.remove("header__menu-btn--nojs");

cross.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteNav.classList.remove("header__site-navigation--opened");
  siteNav.classList.add("header__site-navigation--closed");
  userNav.classList.remove("header__user-navigation--opened");
  userNav.classList.add("header__user-navigation--closed");

  burger.classList.add("header__menu-btn--show");
  cross.classList.add("header__menu-btn--hide");
});

burger.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteNav.classList.remove("header__site-navigation--closed");
  siteNav.classList.add("header__site-navigation--opened");
  userNav.classList.remove("header__user-navigation--closed");
  userNav.classList.add("header__user-navigation--opened");

  burger.classList.remove("header__menu-btn--show");
  cross.classList.remove("header__menu-btn--hide");
});
