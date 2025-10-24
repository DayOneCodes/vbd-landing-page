const hamburgerMenuElement = document.querySelector('.hamburger-menu');
const hamburgerMenuDivs = document.querySelectorAll('.hamburger-menu>div');
const mobileNavElement = document.querySelector('.mobile-nav')

 //On click of the hamburger menu...
hamburgerMenuElement.addEventListener('click', () => {


//... animate the hamburger menu divs
  hamburgerMenuDivs[0].classList.toggle('hamburger-1');
  hamburgerMenuDivs[1].classList.toggle('hamburger-2');
  hamburgerMenuDivs[2].classList.toggle('hamburger-3');

//...Display the navbar
  mobileNavElement.classList.toggle('mobile-nav-display')
});

document.addEventListener('scroll', (event) =>{
    if (mobileNavElement.classList.contains('mobile-nav-display')) 
    {
    //... animate the hamburger menu divs
      hamburgerMenuDivs[0].classList.toggle('hamburger-1');
      hamburgerMenuDivs[1].classList.toggle('hamburger-2');
      hamburgerMenuDivs[2].classList.toggle('hamburger-3');

      mobileNavElement.classList.remove('mobile-nav-display');

    }
});

document.addEventListener('click', (event) => {
    if (!hamburgerMenuElement.contains(event.target) && !mobileNavElement.contains(event.target) && mobileNavElement.classList.contains('mobile-nav-display')){
      //... animate the hamburger menu divs
      hamburgerMenuDivs[0].classList.toggle('hamburger-1');
      hamburgerMenuDivs[1].classList.toggle('hamburger-2');
      hamburgerMenuDivs[2].classList.toggle('hamburger-3');

      mobileNavElement.classList.remove('mobile-nav-display');

    }
});











