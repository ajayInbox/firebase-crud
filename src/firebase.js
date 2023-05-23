// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi7Xej2GfTykg6IPj7AMq9qDJDa4fQVlU",
  authDomain: "beginner-project-2df86.firebaseapp.com",
  projectId: "beginner-project-2df86",
  storageBucket: "beginner-project-2df86.appspot.com",
  messagingSenderId: "571828441065",
  appId: "1:571828441065:web:2b5dc25701644e40ca8578",
  measurementId: "G-T3ER3FS77E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
