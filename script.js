// Navbar logic
const backdrop = document.querySelector(".navbar__backdrop");
const navbarItemsMobile = document.querySelector(".navbar__items-container");
const buttonBurger = document.querySelector(".navbar__container-menu-burger");
const buttonClose = document.querySelector(".navbar__items-container--item__head--icon");
const body = document.body;

buttonBurger.addEventListener("click", () => {
  if (backdrop.style.display = "none") {
    backdrop.style.display = "flex";
    body.style.overflowY = "hidden";
  } else {
    backdrop.style.display = "none";
    body.style.overflowY = "scroll";
  }
});

buttonClose.addEventListener("click", () => {
  if (backdrop.style.display = "flex") {
    backdrop.style.display = "none";
    body.style.overflowY = "scroll";
  } else {
    backdrop.style.display = "flex";
    body.style.overflowY = "hidden";
  }
});
