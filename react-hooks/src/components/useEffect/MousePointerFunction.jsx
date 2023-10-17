import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function MousePointerFunction() {
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const setPosition=(e)=>{
        console.log("---------Postion of pointer------");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("---------useEffect------");
        window.addEventListener("mousemove",setPosition);
        return ()=>{
            window.removeEventListener("mousemove",setPosition); // When we remove coponent from than event should stop
        }
    },[])

  return (
    <div>
        <h3>{`Mouse Position x: ${x} , y: ${y}`}</h3>
    </div>
  )
}
