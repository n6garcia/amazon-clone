import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJZ2srEiJfxhmLiar9vz7oOqScRn2NGY",
  authDomain: "clone-28916.firebaseapp.com",
  projectId: "clone-28916",
  storageBucket: "clone-28916.appspot.com",
  messagingSenderId: "861403040058",
  appId: "1:861403040058:web:809edf37900c73098ce803",
  measurementId: "G-05V8QW678M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
