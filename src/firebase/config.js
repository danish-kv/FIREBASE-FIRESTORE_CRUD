import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  // Import Firebase Authentication


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-ZkmfG5ypy922M6n5Fxeh3i8yKeATnB4",
  authDomain: "fir-20968.firebaseapp.com",
  projectId: "fir-20968",
  storageBucket: "fir-20968.appspot.com",
  messagingSenderId: "80115400319",
  appId: "1:80115400319:web:9b17832d7e14e5b80c094a",
  measurementId: "G-YPRYEWYFEP"
};

export const Firebase = firebase.initializeApp(firebaseConfig)