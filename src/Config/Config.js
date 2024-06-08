import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDALM_ndyiJs5fNZUd7n_YkecAistn30sw",
  authDomain: "codmarkt-1ffbe.firebaseapp.com",
  projectId: "codmarkt-1ffbe",
  storageBucket: "codmarkt-1ffbe.appspot.com",
  messagingSenderId: "170264770313",
  appId: "1:170264770313:web:a475580b7842e0fab205d8"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }