import { useContext } from "react";
import React from "react";

export const TodoContext=React.createContext({
    todos:[
        {
            value:"This is first Item",
            id: 1
        }
    ],
    add:()=>{},
    remove:()=>{},
    update:() =>{}
})

export const TodoContextProvider=TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}
