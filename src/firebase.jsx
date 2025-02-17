import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAiTv7ffPK-koffQwWaITAWP33ZeaBVw6Q",
  authDomain: "blog-553b2.firebaseapp.com",
  projectId: "blog-553b2",
  storageBucket: "blog-553b2.firebasestorage.app",
  messagingSenderId: "1084414963116",
  appId: "1:1084414963116:web:06936c1e8a5eda38cc5e09",
  measurementId: "G-CCMN7R9MV8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, provider, db};