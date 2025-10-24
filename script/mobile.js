const hamburgerMenuElement = document.querySelector('.hamburger-menu');
const mobileNavLinks = document.querySelectorAll("#js-mobile-nav>nav>ul>li")

//On click of the hamburger menu...
hamburgerMenuDiv.addEventListener("click", () => {

//... animate the hamburger menu divs
  hamburgerMenuLines[0].classList.toggle('hamburger-1');
  hamburgerMenuLines[1].classList.toggle('hamburger-2');
  hamburgerMenuLines[2].classList.toggle('hamburger-3');

//...Display the navbar
  mobileNavElement.classList.toggle('mobile-nav-display')
});


document.addEventListener('click', (event) => {
    if (!hamburgerMenuElement.contains(event.target) && !mobileNavElement.contains(event.target) && mobileNavElement.classList.contains('mobile-nav-display')){
      //... animate the hamburger menu divs
      hamburgerMenuLines[0].classList.toggle('hamburger-1');
      hamburgerMenuLines[1].classList.toggle('hamburger-2');
      hamburgerMenuLines[2].classList.toggle('hamburger-3');

      mobileNavElement.classList.remove('mobile-nav-display');

    }
})



