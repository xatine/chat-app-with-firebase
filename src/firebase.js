import firebase from "firebase/app";
import "firebase/auth"; 
import "firebase/database"; 
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDqigXRrWZRxv_hwbmPJRIaHMeb7OkakZk",
  authDomain: "react-slack-clone-7a07f.firebaseapp.com",
  databaseURL: "https://react-slack-clone-7a07f.firebaseio.com",
  projectId: "react-slack-clone-7a07f",
  storageBucket: "react-slack-clone-7a07f.appspot.com",
  messagingSenderId: "432176020870",
  appId: "1:432176020870:web:d27e2e5b8361f747"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
