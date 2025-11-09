// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADrMIG6jVjI-paNJ9WsRQQWzQal-kFXGA",
  authDomain: "smart-deals-1d5d2.firebaseapp.com",
  projectId: "smart-deals-1d5d2",
  storageBucket: "smart-deals-1d5d2.firebasestorage.app",
  messagingSenderId: "700598583639",
  appId: "1:700598583639:web:693290047c216e8a613e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);