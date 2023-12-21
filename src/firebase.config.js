import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA830tCXFDnnLUWP2xrQS4arlJ6Ktxj4Rw",
  authDomain: "to-do-fbde5.firebaseapp.com",
  projectId: "to-do-fbde5",
  storageBucket: "to-do-fbde5.appspot.com",
  messagingSenderId: "171625198417",
  appId: "1:171625198417:web:31430a8bb5a346e3041970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);