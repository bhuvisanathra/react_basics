import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  // Character Length Use State
  const [length,setLength]=useState(8);

  // Include No or not Use State
  const [addNumber,setAddNumber] = useState(false);

  // Include Special Character or not Use State
  const [addSpCharacter,setAddSpCharacter] = useState(false);

  // Use State for shown password which will be changes according to event of the user
  const [password,setPassword]=useState("");


  // useRef Concept
  const passwordRef=useRef(null)

  // Password Generator Method
  // with callback add functiona s well as dependeice which we need in our app
  // Memoization Concept done using useCallback Hook
  // It will optimize as well as store in cache

  const passwordGenerator = useCallback(()=>{
    
    let password="" // to store the password
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Data using which i will generate password

    //conditons if number included then add number to string
    if(addNumber) string+="0123456789"
    
    //conditons if number included then add number to string
    if(addSpCharacter) string+="!@#$%^&*()_+~<>?:/*-"

    // for loop to generate password
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*string.length+1);
      password+=string.charAt(char);
    }
    
    // Set Password Use State
    setPassword(password);
  },[length,addNumber,addSpCharacter,setPassword])

  const copyToClipBoard = useCallback(()=>{
    // GIving selected effect to user using useRef()
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  // useEffect
  // it contains two thing
  // 1.callback 2.dependencies
  // When there will be any type of changes in length, addNumber, addSpecialCharacter, passwordGenerator then run the functopm passwordGenerator

  useEffect(()=>{
    passwordGenerator()
  },[length,addNumber,addSpCharacter,passwordGenerator])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Generate Password'
          readOnly

          // When we need to copy the password form clipboard
          ref={passwordRef}
          />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyToClipBoard}>Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input 
            type="range"  
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'

            // onChange event value
            onChange={(e)=>{setLength(e.target.value);}}
          />
          <label>Length:{length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          
          {/* Added Number Component */}
          <input 
            type="checkbox"
            defaultChecked={addNumber}
            id="numberInput"
            onChange={()=>
              // Change the value invertly
              {setAddNumber((prev) => !prev);
            }} 
          />
          <label>Numbers</label>

          {/* Added Special Character Component */}
          <input 
            type="checkbox"
            defaultChecked={addSpCharacter}
            id="CharacterInput"
            onChange={()=>
              // Change the value invertly
              {setAddSpCharacter((prev) => !prev);
            }} 
          />
          <label>Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
