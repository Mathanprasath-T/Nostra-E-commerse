
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3VS6XccGSGP613SHMVrkA2YiCVjk9dFQ",
  authDomain:  "nostra-e-commerce.firebaseapp.com",
  projectId: "nostra-e-commerce",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };