import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

var submit = document.querySelector(".submit1");

submit.addEventListener("click", async function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      message: message
    });

    alert("✅ Data stored successfully!");
  } catch (e) {
    console.log(e);
  }
});
