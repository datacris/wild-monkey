// Your web app's Firebase configuration
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAvwOAoVyKRipGXUWEZxeAVFd-TBEhYbKg",
  authDomain: "wild-monkey.firebaseapp.com",
  projectId: "wild-monkey",
  storageBucket: "wild-monkey.appspot.com",
  messagingSenderId: "686221622454",
  appId: "1:686221622454:web:691d1ff6c04279b94aba17",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
