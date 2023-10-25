import React, { useState } from 'react'
import { useTodoStore } from '../stors/TodoStore'

export default function TodoForm() {
    const [text,setText] =useState('')
    const addTodo =useTodoStore((store)=>store.addTodo)

  return (
    <div className='form-wrapper'>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
        <button 
        onClick={()=>{
            addTodo(text,'TODO')
            setText('')
        }}>Submit</button>
    </div>
  )
}
