// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAWsH18G_mdafg3TXJMWZZ3JAQ5HnzCnk",
  authDomain: "virtualnotes-1b487.firebaseapp.com",
  projectId: "virtualnotes-1b487",
  storageBucket: "virtualnotes-1b487.firebasestorage.app",
  messagingSenderId: "512643527380",
  appId: "1:512643527380:web:ce6d6b938efa2fa77cc141"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const db = getFirestore(app);

// export { app, auth, db };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const google = new GoogleAuthProvider();
export { app, auth, db, google };




