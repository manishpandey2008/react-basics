import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  // let counter=0;
  const addInCounter=()=>{
    setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)

    setCount(preCounter=> preCounter+1)
    setCount(preCounter=> preCounter+1)
    setCount(preCounter=> preCounter+1)
  } 
  const removeFromCounter=()=>{
    setCount(count-1)
  }

  return (
   <div className='body'>
      <h1>Counter Project</h1>

      <h2>Total count= {count}</h2>
      <h2>Total count= {count}</h2>
      <h2>Total count= {count}</h2>
      <h2>Total count= {count}</h2>
      <h2>Total count= {count}</h2>
      <h2>Total count= {count}</h2>

      <button onClick={addInCounter}>Add Counter</button>

      <button onClick={removeFromCounter}>Remove Counter</button>



   </div>
  )
}

export default App
