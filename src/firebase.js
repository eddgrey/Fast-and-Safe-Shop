/* eslint-disable */
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCTtye5Go-ZW4L7WNxBTWUjg_8o9J3JS24",
  authDomain: "fs-test-58b42.firebaseapp.com",
  projectId: "fs-test-58b42",
  storageBucket: "fs-test-58b42.appspot.com",
  messagingSenderId: "262703073584",
  appId: "1:262703073584:web:b1a6062c300d7adddce0f5",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();