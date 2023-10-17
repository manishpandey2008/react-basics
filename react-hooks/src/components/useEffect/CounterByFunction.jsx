import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function CounterByFunction() {

    const [count,setCount] = useState(0);

    useEffect(()=>{
        const interval=setInterval(updateCount,1000);
        return ()=>{
            clearInterval(interval)
        }
    },[count])

    const updateCount =()=>{
        setCount(count+1)
    }

  return (
    <h2>{count}</h2>
  )
}
