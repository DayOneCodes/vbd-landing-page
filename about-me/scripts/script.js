import * as mobile from "./mobile.js"

const viewMyWorksBtn3 = document.getElementById("js-view-my-works-btn3");
const contactMeBtn = document.getElementById("contact-me-btn");

viewMyWorksBtn3.addEventListener("click", () => {
  window.location.href = "../../portfolio-page/index.html"
})

contactMeBtn.addEventListener("click", () => {
  window.location.href = "../../contact/index.html"
})