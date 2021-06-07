import firebase from "firebase/app";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCeW8UQ6fUCReFVbksLJ93R1Gic4mdTYwQ",
  authDomain: "bd-fys.firebaseapp.com",
  databaseURL: "https://bd-fys-default-rtdb.firebaseio.com",
  projectId: "bd-fys",
  storageBucket: "bd-fys.appspot.com",
  messagingSenderId: "592186688209",
  appId: "1:592186688209:web:e27bace92a808864eb3bf0",
  measurementId: "G-QGPS0H03ST",
});

const DB = firebaseConfig.firestore();
export default DB;
