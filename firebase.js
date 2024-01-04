import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCvwqIK1UOWBwubeQbTdLFP1emCZNek2G0",
    authomain: "clone-35866.firebaseapp.com",
    projectId: "clone-35866",
    storageBucket: "clone-35866.appspot.com",
    messagingSenderId: "682769674315",
    appId: "1:682769674315:web:393f3e91d989ac7a6e1dce",
    measurementId: "G-WNZ447BFSR"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
const auth=firebase.auth();

  export {  db,auth };

