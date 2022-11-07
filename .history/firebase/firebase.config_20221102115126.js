// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBds4Bohy1xk4m_wN0mzV6CQWmbmBiB1ag",
  authDomain: "login-with-firebase-62646.firebaseapp.com",
  projectId: "login-with-firebase-62646",
  storageBucket: "login-with-firebase-62646.appspot.com",
  messagingSenderId: "919050484118",
  appId: "1:919050484118:web:014b16cb19a1038ca805b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);