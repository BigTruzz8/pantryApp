// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABh6Q0ItI9KPG3J-v65bssh6tSK49KnI4",
  authDomain: "inventory-5be7a.firebaseapp.com",
  projectId: "inventory-5be7a",
  storageBucket: "inventory-5be7a.appspot.com",
  messagingSenderId: "1018094347206",
  appId: "1:1018094347206:web:4fbad090127f90937b88c7",
  measurementId: "G-7G42X2XX40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}