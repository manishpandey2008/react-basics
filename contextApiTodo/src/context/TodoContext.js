import { useContext } from "react";

export const TodoContext=React.createContext({
    todos:[],
    add:()=>{},
    remove:()=>{},
    update:() =>{}
})

export const TodoContextProvider=TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext);
}
