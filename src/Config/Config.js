import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHCWiHfLUtc8UUPdJ7YIYIu_2O0YTZSM",
  authDomain: "codmarkt-ea9c4.firebaseapp.com",
  databaseURL: "https://codmarkt-ea9c4.firebaseio.com",
  projectId: "codmarkt-ea9c4",
  storageBucket: "codmarkt-ea9c4.appspot.com",
  messagingSenderId: "507272403886",
  appId: "1:507272403886:web:e5d6938077b06c4098463f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }