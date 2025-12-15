import * as useGlobalVariable from "./global-variables.js";
import * as useFunction from "./functions.js";
import * as mobile from "./mobile.js";
import * as temporaryScript from "./temporary-scripts.js"


const landingPageElement = document.querySelector('.landing-page');
const secondPageElement = document.querySelector('.second-page');
const h1Element = document.getElementById('js-h1');
const heroViewPortfolioBtn = document.getElementById('js-view-portfolio-btn')
const viewPortfolioBtn2 = document.getElementById("js-view-portfolio-btn2")
const landingPageHeroTitleContainerElement = document.getElementById('js-landing-page-hero-title-container')
const aboutMeSection = document.getElementById('js-about-me-section');
const contactSection = document.getElementById('js-contact-me-section');
const portfolioSectionElement = document.getElementById('js-portfolio-section');
const quoteSectionElement = document.getElementById('js-quote-section')
const footerElement = document.getElementById('js-footer');
const landingPageHeaderElement = document.getElementById("js-landing-page-header");
const brandNameElement = document.getElementById("js-brand-name");
const viewMyWorksBtn = document.getElementById("js-view-my-works-btn");
const userMessageFormElement = document.getElementById("js-user-message")
const formSubmitConfirmationMessage = document.getElementById("js-form-submit-confirmation")


//On reload, scroll screen back to top to prevent wierd animation behaviour
scrollPageTo("top")

//Listen for scroll...
let displayed = false;

document.addEventListener('scroll', (event) =>{
   // console.log(window.scrollY)
if (mobileNavElement.classList.contains('mobile-nav-display')) 
{
//... animate the hamburger menu divs
   hamburgerMenuLines[0].classList.toggle('hamburger-1');
   hamburgerMenuLines[1].classList.toggle('hamburger-2');
   hamburgerMenuLines[2].classList.toggle('hamburger-3');

   mobileNavElement.classList.remove('mobile-nav-display');
}
 else 
{
   if (window.scrollY > 4) {
      secondPageElement.classList.add("animation-second-page");
      landingPageElement.classList.add("header-animation");
      display(landingPageHeroTitleContainerElement, "no");
      landingPageHeroTitleContainerElement.style.opacity = 0;
      heroViewPortfolioBtn.style.opacity = 0;
      if (!displayed) {
         scrollPageTo("about-me");
         setTimeout (() => {
            displayed = true;
         }, 1000)
      };
      display(aboutMeSection);
      slowlyReveal(aboutMeSection, 0.8);
      display(contactSection);
      display(portfolioSectionElement);
      display(footerElement);
      display(quoteSectionElement);
   }
   else {
      secondPageElement.classList.remove("animation-second-page");
      landingPageElement.classList.remove("header-animation");
      display(landingPageHeroTitleContainerElement);
      slowlyReveal(landingPageHeroTitleContainerElement);
      slowlyReveal(heroViewPortfolioBtn, 0.9);
      display(portfolioSectionElement, "no");
      display(contactSection, "no");
      display(aboutMeSection, "no");
      display(footerElement, "no");
      display(quoteSectionElement, "no");
      setTimeout (() => {
      displayed = false;
      }, 1100);
   };

   if (window.scrollY > 2752 && window.scrollY < 3100){
      landingPageHeaderElement.style.background = "var(--secondary-color)";
      brandNameElement.style.color = "var(--primary-color)";

      hamburgerMenuLines.forEach((lines) => {
         lines.style.background = "var(--primary-color)"
      });
   } else {
      landingPageHeaderElement.style.background = "none";
      brandNameElement.style.color = "var(--secondary-color)";

      hamburgerMenuLines.forEach((lines) => {
         lines.style.background = "var(--secondary-color)"
      });
   };
}
})


viewMyWorksBtn.addEventListener("click", () => {
   window.location.href = "../portfolio-page/index.html";
})

heroViewPortfolioBtn.addEventListener("click", () => {
   window.location.href = "../portfolio-page/index.html";
})

viewPortfolioBtn2.addEventListener("click", () => {
   window.location.href = "../portfolio-page/index.html";
})


// USER MESSAGE 


userMessageFormElement.addEventListener("submit", async (event) => {
   event.preventDefault()

});