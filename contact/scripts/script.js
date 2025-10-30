import * as mobile from "./mobile.js"

import { createClient  } from "https://esm.sh/@supabase/supabase-js"


const userMessageFormElement = document.getElementById("user-message-form");

// MESSAGE SEND

const supabaseUrl = 'https://nmlcxzwtsstqoipzscqd.supabase.co';

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tbGN4end0c3N0cW9pcHpzY3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MzQyMDMsImV4cCI6MjA3NzQxMDIwM30.UM3uvUq6wINCAAOTmQXGP4avVoNmgdild9YYL2J2Hvc";

const supabase = createClient (supabaseUrl, supabaseKey);

userMessageFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("name-two").value;
  const email = document.getElementById("email-two").value;
  const message = document.getElementById("message-two").value;

  const { error } = await supabase
    .from("user-message")
    .insert([{name, email, message}]);


  if (error) {
    alert (error.message)
  }
  else {
    alert("Message successfully sent")
  }

  document.getElementById("name-two").value = "";
  document.getElementById("email-two").value = "";
  document.getElementById("message-two").value = "";
})