import firebase from 'firebase/app'

import 'firebase/firestore'
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyAUsHd_Kef4H4NqPVBFM78zstH7DI7S_-g",
    authDomain: "laboratorios-f52bb.firebaseapp.com",
    databaseURL: "https://laboratorios-f52bb.firebaseio.com",
    projectId: "laboratorios-f52bb",
    storageBucket: "laboratorios-f52bb.appspot.com",
    messagingSenderId: "590019991375",
    appId: "1:590019991375:web:7930f3fb84b7138165d73a"
  };
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db,auth}