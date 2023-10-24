import React, { useState } from 'react'
import useTodo from '../context/TodoContext';

export default function TodoForm() {
    const [data,setData]=useState();
    const {todos,add} =useTodo();

    const saveItem =()=>{
        
    }

  return (
    <div className=''>
        <input type="text"  
            value={data} 
            onChange={(e)=>setData(e.target.value)} 
            className='w-full p-4 focus:outline-none border-2 border-gray-200'/>
        <button onClick={saveItem}>Save</button>
    </div>
  )
}
