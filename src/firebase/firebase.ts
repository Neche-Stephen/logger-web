// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, Firestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpEayi-KN1TbBpI2esBvKqd4o0meGgIvo",
  authDomain: "escalate-71861.firebaseapp.com",
  projectId: "escalate-71861",
  storageBucket: "escalate-71861.firebasestorage.app",
  messagingSenderId: "860433271230",
  appId: "1:860433271230:web:a6cf203b8a71db192691ef",
  measurementId: "G-NL6P777WN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db: Firestore = getFirestore(app);