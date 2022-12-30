import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAguwzaliS4QpzbDKG3DImokO6G8BtnS7E",
    authDomain: "danny-bloggy.firebaseapp.com",
    projectId: "danny-bloggy",
    storageBucket: "danny-bloggy.appspot.com",
    messagingSenderId: "1062758328474",
    appId: "1:1062758328474:web:b84e47fdfb97ff24731723"
  };

  firebase.initializeApp(firebaseConfig); //init firebase

  let db = firebase.firestore(); // database setup
  let timestamp = firebase.firestore.FieldValue.serverTimestamp; 
  export {db, timestamp};