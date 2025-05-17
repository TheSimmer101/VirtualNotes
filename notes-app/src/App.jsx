import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import app from "./firebase"; 
import HTMLFlipBook from 'react-pageflip';
import './App.css'


function BookContent({pageType, pageContent})
{
  if(pageType == "image")
    return (
      <img src = {pageContent}></img> )
  else
      return (
        <p>{pageContent}</p>
    )
  
}
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HTMLFlipBook width={600} height={1000} showCover={true} size="stretch">
            <div className = "bookCover">Book Title
              <img src = {reactLogo}/>
            </div>
            <div className="bookPage">Page 1</div>
            <div className="bookPage">Page 2</div>
            <div className="bookPage">Page 3</div>
            <div className="bookPage">Page 4</div>
            <div className = "bookCover">End of Book</div>
        </HTMLFlipBook>
    <BookContent pageType = {"text"} pageContent = {"some words i wrote idk"} />
    <MyButton />
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
      </p>
    </>
  )
}

export default App
