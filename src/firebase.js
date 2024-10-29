// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpalP2sTLhD6bptv_jgBGf3ZN5IWDZaGU",
  authDomain: "singing-studio.firebaseapp.com",
  projectId: "singing-studio",
  storageBucket: "singing-studio.appspot.com",
  messagingSenderId: "131655993656",
  appId: "1:131655993656:web:db00430f2f5b7b7e1cd9cd",
  measurementId: "G-W06KTSKJVK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;