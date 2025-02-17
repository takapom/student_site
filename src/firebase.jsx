// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiTv7ffPK-koffQwWaITAWP33ZeaBVw6Q",
  authDomain: "blog-553b2.firebaseapp.com",
  projectId: "blog-553b2",
  storageBucket: "blog-553b2.firebasestorage.app",
  messagingSenderId: "1084414963116",
  appId: "1:1084414963116:web:06936c1e8a5eda38cc5e09",
  measurementId: "G-CCMN7R9MV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);