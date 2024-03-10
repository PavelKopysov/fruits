const background = document.querySelector(".popup__bg");
const popup = document.querySelector(".popup__order");
const btnClosePopup = document.querySelector(".popup-close");
const btnOpenPopup = document.querySelector(".section-order_button");
const btnSubmitPopup = document.querySelector(".popup-button");
const btnClosePopupThanks = document.querySelector(".popup-thanks__close-img");
const popupThanks = document.querySelector(".popup-thanks");
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");
const hamburgerMenu = document.querySelector(".nav-links");

btnOpenPopup.addEventListener("click", function (event) {
  if (event.target.closest(".section-order_button")) {
    event.preventDefault;
    background.classList.add("active");
    popup.classList.add("active");
    document.querySelector(".last-section__title").style.zIndex = "-1";
  }
});
btnSubmitPopup.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("active");
  popupThanks.classList.add("active");
});
btnClosePopup.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("active");
  background.classList.remove("active");
  document.querySelector(".last-section__title").style.zIndex = "1";
});
background.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.closest(".popup__order")) {
    return;
  }
  popup.classList.remove("active");
  popupThanks.classList.remove("active");
  background.classList.remove("active");
  document.querySelector(".last-section__title").style.zIndex = "1";
});
hamburger.addEventListener("click", function (e) {
  e.preventDefault;
  hamburger.classList.toggle("hamburger-active");
  navContainer.classList.toggle("nav-container-active");
});
hamburgerMenu.addEventListener("click", function (e) {
  e.preventDefault;
  hamburger.classList.toggle("hamburger-active");
  navContainer.classList.toggle("nav-container-active");
});
