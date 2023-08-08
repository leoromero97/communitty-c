// Navbar logic
const backdrop = document.querySelector(".navbar__backdrop");
const navbarItemsMobile = document.querySelector(".navbar__items-container");
const buttonBurger = document.querySelector(".navbar__container-menu-burger");
const buttonClose = document.querySelector(".navbar__items-container--item__head--icon");

buttonBurger.addEventListener("click", () => {
  if (backdrop.style.display = "none") {
    backdrop.style.display = "flex";
  } else {
    backdrop.style.display = "none";
  }
});

buttonClose.addEventListener("click", () => {
  if (backdrop.style.display = "flex") {
    backdrop.style.display = "none";
  } else {
    backdrop.style.display = "flex";
  }
});
