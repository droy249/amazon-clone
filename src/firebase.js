import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD50Tc69AQwUsdURT9JyMAJhxgrIQBK4XQ",
    authDomain: "amz-36905.firebaseapp.com",
    projectId: "amz-36905",
    storageBucket: "amz-36905.appspot.com",
    messagingSenderId: "25945227406",
    appId: "1:25945227406:web:c7e7bfd3304fd0d69849df",
    measurementId: "G-K718LY916J",
};

const db = firebase.initializeApp(firebaseConfig).firestore();
const auth = firebase.auth();

export { db, auth };
