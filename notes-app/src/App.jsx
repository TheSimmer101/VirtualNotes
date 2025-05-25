import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import app from "./firebase"; 
// import { db, auth, google } from "./firebase.ts";
import { app, db, auth, google } from "./firebase";

import { doc, getDoc, setDoc, updateDoc, addDoc, collection } from "firebase/firestore";
import { signInWithPopup, signOut, signInWithRedirect,getRedirectResult, onAuthStateChanged, } from "firebase/auth";

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


    
//   useEffect(() => {
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result?.user) {
//           setUser(result.user); // ✅ Updates user state
//         }
//       })
//       .catch(console.error);

//     // Also listen for authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//     });

//     return () => unsubscribe(); // Cleanup listener on unmount
//   }, []);
  
//  useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log('User:', currentUser ? (currentUser.displayName || currentUser.email) : 'None');
//     });

//     return () => unsubscribe();
//   }, []);
// const handleAuthClick1 = async () => {
// if (user) {
//     // If signed in, sign them out
//     try {
//       await signOut(auth);
//       console.log("User signed out successfully!");
//     } catch (error) {
//       console.error("Error signing out:", error.message);
//       alert(error.message);
//     }
//   } else {
//     // If not signed in, initiate sign-in with redirect
//     google.setCustomParameters({ prompt: 'select_account' });
//     try {
//       await signInWithRedirect(auth, google);
//     } catch (error) {
//       console.error("Error initiating sign-in:", error.message);
//       alert(error.message);
//     }
//   }
// };

const addNote = () =>
{
  addDoc(collection(db,"notes"),
  {
    title: "my note title",
    noteText: "lorem ipsum blah blah blah"
  });

  console.log("you want to add a note!");
}


//Annoying error in console sometimes, idk how to get rid of it: firebase_auth.js?v=0d44b53f:7547 Cross-Origin-Opener-Policy policy would block the window.close call.

  const handleAuthClick = () => {
    if (user) {
      signOut(auth).catch(console.error);
      setUser(null);
    } else {
      signInWithPopup(auth, google)
        .then((result) => setUser(result.user))
        .catch(console.error);
    }
  };

  if(user)
    console.log("signed in")
  return (
    <>
    <button onClick={handleAuthClick}>{user ? "sign out" : "sign in"}</button>
    <button onClick ={addNote}>Add a Note</button>
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
