// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC531bH1sGOIC4hBYVizNKEmVCS3Y4Thw",
  authDomain: "netflixgpt-ab991.firebaseapp.com",
  projectId: "netflixgpt-ab991",
  storageBucket: "netflixgpt-ab991.appspot.com",
  messagingSenderId: "191443086776",
  appId: "1:191443086776:web:5b01deb84f3a77f0cfb34d",
  measurementId: "G-1S6VXVEFC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);