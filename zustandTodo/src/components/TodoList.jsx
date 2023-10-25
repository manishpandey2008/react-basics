import React from 'react'
import { useTodoStore } from '../stors/TodoStore'
import './TodoList.css'
import deleteIcon from "../assets/delete.svg"

export default function TodoList() {

    const todoList = useTodoStore((store)=> store.todoList)
    const updateTodo = useTodoStore((store)=> store.updateTodo)

  return (
    <div className='list-wrapper'>
        {
                todoList.map((todo)=>
                    <div className={'list-item ' + todo.status} key={todo.value}>
                        <div>
                          {todo.value}
                        </div>
                        <div onClick={()=>updateTodo(todo.value,'DELETED')}>
                            <img 
                              src={deleteIcon} 
                              alt="" 
                              />
                        </div>
                    </div>
                )
        }
    </div>
  )
}
// npm instal classnames