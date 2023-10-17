import React from 'react'
import { useState } from 'react'

export default function ByArray() {
    const [items,setItem]=useState([])
    const addItemFun=()=>{
        setItem([
            ...items,
            {
                key:items.length+1,
                value: "Value "+Math.floor(Math.random()*10)+1
            }
        ])
    }
  return (
    <div>
        <button onClick={addItemFun}>Add new item</button>
        <ul>
            {
                items.map((e,i)=>(
                    <li key={e.key}>{e.value}</li>
                ))
            }
        </ul>
    </div>
  )
}
