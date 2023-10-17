import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function ClassCountByUseEffect(props) {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`Clicked ${count} times`
    },[count])
    // if u not pass 2nd argument than it will run every rander
    // if u pass [] array than i will not run on any change
    // if you pass ['abc'] than it will cahnge after change in abc

  return (
    <div>
        <button
            onClick={()=>setCount((pre=>pre+1))}
        >Coute {count}</button>
    </div>
  )
}


export default ClassCountByUseEffect
