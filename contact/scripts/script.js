import * as mobile from "./mobile.js"
import { EMAILJS_CONFIG } from "./config.js"


const userMessageFormElement = document.getElementById("user-message-form");
const formSubmitConfirmationMessage = document.getElementById("js-form-submit-confirmation")

emailjs.init(EMAILJS_CONFIG.USER_ID);


// MESSAGE SEND
userMessageFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  emailjs.sendForm(
    EMAILJS_CONFIG.SERVICE_ID, 
    EMAILJS_CONFIG.TEMPLATE_ID, 
    userMessageFormElement
  ).then(
    () => {
    alert("Message sent successfully");
    userMessageFormElement.reset();
  }, 
   (error)=> {
    alert(`Error: ${error.text}`);
  })
})