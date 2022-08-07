
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAmJ0jzDt5KU439Cb3JWM4emdjyjObgcrc",
  authDomain: "phyfun-cdb94.firebaseapp.com",
  projectId: "phyfun-cdb94",
  storageBucket: "phyfun-cdb94.appspot.com",
  messagingSenderId: "1068755243520",
  appId: "1:1068755243520:web:2097f6d24cb91add197ee5",
  measurementId: "G-CHETS040NV"
};
//initialzing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
//database
const db = firebaseApp.firestore();
//authentication for login and logout
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default db;

 
   

 

