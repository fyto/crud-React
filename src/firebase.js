import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSm5OXLQJC4UmjKCwwwD43w4VAhUdma7s",
    authDomain: "crud-40295.firebaseapp.com",
    projectId: "crud-40295",
    storageBucket: "crud-40295.appspot.com",
    messagingSenderId: "438415624583",
    appId: "1:438415624583:web:115a47b737e0536cc5eb22"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)