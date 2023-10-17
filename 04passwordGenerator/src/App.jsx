import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [isNumber, setIsNumber] = useState(false)
  const [isString, setIsString] = useState(false)
  const [password, setPaassword] = useState()

  const passwordGenerator=useCallback(()=>{
    let fixedChars="Thiscorrelationchartillustrateshow";
    if(isNumber)fixedChars+="1234567890";
    if(isString)fixedChars+="!@#$%^&*()";
    let char="";
    for(let i=0;i<length;i++){
      const index=Math.floor(Math.random() * fixedChars.length+1)
      char+=fixedChars[index];
    }
    setPaassword(char);
  },[length,isNumber,setPaassword])

  useEffect(()=>{passwordGenerator()},[length,isNumber,isString,passwordGenerator])

  return (
    <>
      <h1>Password Generator</h1>
      <div className='input-wrapper2'>
        <div className='input-area'>
            <div className="input-wrapper">
              <input readOnly 
                type="text" 
                className="input" 
                value={password} 
                />
              <button className="copy-btn">Copy</button>
            </div>
        </div>
        <div className='tools'>
          <div className='range-class'>
            <input type="range" min={0}
            max={100}
            value={length}  
            onChange={(e)=>setLength(e.target.value)}
            />
             <label htmlFor="isNumber" >Lenth : {length}</label>
          </div>
          <div className=''>
            <input 
            type="checkbox" 
            defaultChecked={isNumber}
            onChange={()=> setIsNumber((pre)=>!pre)} 
            />
            <label htmlFor="isNumber" >Number is {isNumber}</label>
          </div>
          <div>
            <input type="checkbox" 
            defaultChecked={isString}
            onChange={()=> setIsString((pre)=>!pre)} 
            />
            <label htmlFor="string">String is {isString}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
