
//On click of the hamburger menu...
hamburgerMenuDiv.addEventListener("click", () => {

//... animate the hamburger menu divs
  hamburgerMenuLines[0].classList.toggle('hamburger-1');
  hamburgerMenuLines[1].classList.toggle('hamburger-2');
  hamburgerMenuLines[2].classList.toggle('hamburger-3');

//...Display the navbar
  mobileNavElement.classList.toggle('mobile-nav-display')
});