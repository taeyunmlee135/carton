//import firebase from "firebase/app"

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
//var firebase = require("firebase/app");

// Add the Firebase products that you want to use
//require("firebase/auth");
//require("firebase/firestore");
import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "carton-5d613.firebaseapp.com",
    databaseURL: "https://carton-5d613.firebaseio.com",
    projectId: "carton-5d613",
    storageBucket: "carton-5d613.appspot.com",
    messagingSenderId: "499457247630",
    appId: "1:499457247630:web:aee2dbbb8659e15be43cdf",
    measurementId: "G-ZHL2VK3TYY"
};
  
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig).firestore();

export default db