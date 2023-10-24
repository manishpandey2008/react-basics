import { useMemo } from "react";
import { usestore } from "./store";
import { shallow } from 'zustand/shallow'

export default function Temp({state}){
    const tasks=usestore(
        (store)=>store.tasks.filter((task)=>task.state===state),
        shallow
        );

    // const filterTasks=useMemo(()=>tasks.filter((task)=>task.state===state), [tasks,state])
}