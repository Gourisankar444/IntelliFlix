// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjQVUmHFOZMUxPOPAOXywaHdqGr-pPN6c",
  authDomain: "netflixgpt-e206c.firebaseapp.com",
  projectId: "netflixgpt-e206c",
  storageBucket: "netflixgpt-e206c.appspot.com",
  messagingSenderId: "441027260456",
  appId: "1:441027260456:web:78e544c076ace39e0dc51d",
  measurementId: "G-QG046PE34X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
