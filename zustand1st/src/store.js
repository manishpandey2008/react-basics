import create from 'zustand'
import {devtools, persist} from 'zustand/middleware'


const store=(set)=>({
    tasks:[],
    dragTask: null,
    addTask: (title,state)=>
        set(
            (store)=>({tasks:[...store.tasks,{title,state}]}),
            false,
            "addTask"
            ),
    deleteTask: (title)=>
        set((store)=>({tasks:store.tasks.filter(task=>task.title!==title)})),
    setDragTask: (title)=>set({dragTask:title}),
    moveTask: (title,stage)=>
        set((store)=>({
            tasks: store.tasks.map((task)=> 
                task.title === title ? {title,state:stage} : task
            ),
        }))
})

export const usestore=create(store)

// export const usestore=create(devtools(store))



// export const usestore=create(persist(devtools(store),{name : "dragStore"})) // persist => use for store dala in localstorage


const log=(config)=>(set,get,api)=>
            config(
                (...args) => {
                    console.log(args);
                    set(...args)
                },
                get,
                api
            );

// export const usestore=create(log(persist(devtools(store),{name : "dragStore"})))


