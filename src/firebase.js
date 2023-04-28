import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC0o1Y-3H_riP8TZQASwwSejS0Klh1vuVQ",
    authDomain: "disneyplus-clone-71640.firebaseapp.com",
    projectId: "disneyplus-clone-71640",
    storageBucket: "disneyplus-clone-71640.appspot.com",
    messagingSenderId: "124868018668",
    appId: "1:124868018668:web:c428996b1fe9e10fbac0c9",
    measurementId: "G-VG5JE01ZGW"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage}
export default db;