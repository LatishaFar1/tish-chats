
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhm3vDk0-WZXub9qbBX-J_LMSUlfUOSmI",
  authDomain: "tish-chats.firebaseapp.com",
  projectId: "tish-chats",
  databaseURL: "http://tish-chats.firebaseio.com",
  storageBucket: "tish-chats.appspot.com",
  messagingSenderId:"126878923393",
  appId: "1:126878923393:web:cff2ade2a2746946a32b80",
  measurementId: "G-RYEHET1301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db};