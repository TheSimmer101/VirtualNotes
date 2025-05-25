import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import app from "./firebase"; 
// import { db, auth, google } from "./firebase.ts";
import { app, db, auth, google } from "./firebase";

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { signInWithPopup, signOut, signInWithRedirect,onAuthStateChanged } from "firebase/auth";

import './App.css'



  const DeleteNote = () => {
    
      console.log("delete!");
    } ;
  

function NoteCard()
{
  return (
    <div className = "noteCard">
      <h1>Title here</h1>
      <h3>Text here</h3>
      <button onClick= {DeleteNote}>Delete</button>
    </div>
  )
}

function App() {

    const [docRef, setDocRef] = useState(null);
    const [user, setUser] = useState(null);
    const [count, setCount] = useState(0)


    


const handleAuthClick = async () => {
//const provider = new GoogleAuthProvider(); // Use 'GoogleAuthProvider' directly
google.setCustomParameters({ prompt: 'select_account' });
try {
//await signInWithPopup(auth, google); // Use 'provider' directly here
await signInWithRedirect(auth, google);
} catch (error) {
alert(error.message);
}
};

//VERY ANNOYING ERROR in console: firebase_auth.js?v=0d44b53f:7547 Cross-Origin-Opener-Policy policy would block the window.close call.
  // const handleAuthClick = () => {
  //   if (user) {
  //     signOut(auth).catch(console.error);
  //     setUser(null);
  //   } else {
  //     signInWithPopup(auth, google)
  //       .then((result) => setUser(result.user))
  //       .catch(console.error);
  //   }
  // };

  return (
    <>
    <button onClick={handleAuthClick}>{user ? "sign out" : "sign in"}</button>
    <div className = "mainContainer">
      
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
      <NoteCard></NoteCard>
    </div>
     
    {/* <BookContent pageType = {"text"} pageContent = {"some words i wrote idk"} /> */}
    {/* <MyButton />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
