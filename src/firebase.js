// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAgXBMAQ6M818qvet75TTd9b3AMlkPDLkI",
    authDomain: "todo-app-cp-def50.firebaseapp.com",
    projectId: "todo-app-cp-def50",
    storageBucket: "todo-app-cp-def50.appspot.com",
    messagingSenderId: "965964592508",
    appId: "1:965964592508:web:222232fe8a637ce63420f9",
    measurementId: "G-MSFNRC32K2"
  });

  const db = firebaseApp.firestore();


  export { db } ;