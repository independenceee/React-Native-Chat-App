import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvXBfYznFOF4FX9wL1X4idSkLBbIAXxpQ",
    authDomain: "react-native-chap-app.firebaseapp.com",
    projectId: "react-native-chap-app",
    storageBucket: "react-native-chap-app.appspot.com",
    messagingSenderId: "621917657832",
    appId: "1:621917657832:web:d3098d8a3175c18634475d",
    measurementId: "G-E0T8J0MTF0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
