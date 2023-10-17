import React from 'react'
import { useState } from 'react'

export default function FunctionUseState() {
    const [counter, setCounter]=useState(0)

    const IncrementBy5=()=>{
      // for(let i=0;i<5;i++)setCounter(counter+1); This will not work fine
      for(let i=0;i<5;i++)setCounter(pre=>pre+1);
    }
  return (
    <div>
        <h2>Total Count {counter}</h2>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement</button>

        <button onClick={IncrementBy5}>Increment By 5</button>

    </div>
  )
}
// Only Call hooks at the top level
//  Don't call hooks inside loops, conditions, or nested functions
//  only call hooks from react functions
//  Call them from within react function component and not just as a regular JS function