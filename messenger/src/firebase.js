import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    
    apiKey: "AIzaSyCtkSD3vRR7oZn-BzkK-W6fwAud6WghX6E",
    authDomain: "messenger-7a0fc.firebaseapp.com",
    projectId: "messenger-7a0fc",
    storageBucket: "messenger-7a0fc.appspot.com",
    messagingSenderId: "759895737218",
    appId: "1:759895737218:web:5f8cf7dc2b55ecd769c59b",
    measurementId: "G-GCWNRCD2M6"
  
});

const db=firebaseApp.firestore();

export default db;

