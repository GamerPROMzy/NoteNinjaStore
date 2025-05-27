// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Your Firebase config here:
const firebaseConfig = {
 apiKey: "AIzaSyB3alKmHqnG0_tMl-1O7-BfShRA96RuSUM",
  authDomain: "noteninja-71326.firebaseapp.com",
  projectId: "noteninja-71326",
  storageBucket: "noteninja-71326.firebasestorage.app",
  messagingSenderId: "636549547943",
  appId: "1:636549547943:web:322a916aecb9ce12c1d882"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register function
window.registerUser = function () {
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPass").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Registered successfully!"))
    .catch(error => alert(error.message));
};

// Login function
window.loginUser = function () {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPass").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert("Login successful!"))
    .catch(error => alert(error.message));
};

