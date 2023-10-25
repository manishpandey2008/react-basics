import { create } from 'zustand'

const store=(set)=>({
    todoList:[{value:"Todo 1",status:'DONE'}],
    addTodo : (value,status) => set(
        (store)=> ({todoList : [...store.todoList,{value,status}]})
    ), 
    updateTodo : (value,status) => set(
        (store)=> (
            {
                todoList: store.todoList.map((todo)=>todo.value===value?{value,status}:todo)
            }
        )
    ),
    deleteTodo : (value) =>set(
        (store) =>(
            {
                todoList : store.todoList.filter((todo)=> todo.value !==value)
            }
        )
    )
})

export const useTodoStore=create(store)