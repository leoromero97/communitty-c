// Navbar logic
const backdrop = document.querySelector(".navbar__backdrop");
const buttonBurger = document.querySelector(".navbar__container-menu-burger");
const buttonClose = document.querySelector(".navbar__items-container--item__head--icon");
const body = document.body;

function toggleBackdrop() {
  const isBackdropHidden = backdrop.classList.contains("hidden");
  backdrop.classList.toggle("hidden", !isBackdropHidden);
  backdrop.classList.toggle("show", isBackdropHidden);
  body.style.overflowY = isBackdropHidden ? "hidden" : "scroll";
}

buttonBurger.addEventListener("click", toggleBackdrop);
buttonClose.addEventListener("click", toggleBackdrop);
