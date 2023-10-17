import React from 'react'
import { useState } from 'react'
import MousePointerFunction from './MousePointerFunction'

export default function DisplayContainer() {

    const [display,setDisplay]=useState(true)

  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Display</button>
        {display && <MousePointerFunction />}
    </div>
  )
}
