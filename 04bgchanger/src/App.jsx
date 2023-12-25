import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("olive")
  return (
      <div className="container" style={{backgroundColor:color}}>
        <div className="buttons" >
          <button id="btn" onClick={()=>{setColor("Red")}}>Red</button>
          <button id="btn" onClick={()=>{setColor("Green")}}>Green</button>
          <button id="btn" onClick={()=>{setColor("Blue")}}>Blue</button>
          <button id="btn" onClick={()=>{setColor("Yellow")}}>Yellow</button>
          <button id="btn" onClick={()=>{setColor("Black")}}>Black</button>
          <button id="btn" onClick={()=>{setColor("White")}}>White</button>
        </div>
      </div>
  )
}

export default App
