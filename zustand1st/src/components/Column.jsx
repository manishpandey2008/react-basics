import { useState } from 'react';
import { usestore } from '../store';
import './Column.css'
import Task from './Task'
import classNames from 'classnames';


export default function Column({ state }) {

    const [text, setText] = useState('');
    const [open, setOpne] = useState(false);
    const [drop,setDrop] = useState(false)

    const tasks = usestore(
        (store) => store.tasks.filter((task) => task.state === state)
    );

    const addTask = usestore((store) => store.addTask);
    
    const setDragTask = usestore((store) => store.setDragTask);
    const dragTask = usestore((store) => store.dragTask);
    const moveTask = usestore((store) => store.moveTask);

    

    // shallow

    return (
        <div className={classNames("column",{drop : drop})}
            onDragOver={(e)=>{
                setDrop(true)
                e.preventDefault()
            }}
            onDragLeave={e=>{
                setDrop(false)
                e.preventDefault()
            }}
            onDrop={(e)=>{
                moveTask(dragTask,state)
                setDrop(false)
                setDragTask(null)
            }}
        >
            <div className="titleWrapper">
                <p>{state}</p>
                <button onClick={() => setOpne(true)}>Add</button>
            </div>
            {tasks.map(task =>
                <Task title={task.title} key={task.title} />
            )}
            {
                open && 
                <div className="Modal">
                <div className="modalContent">
                    <input onChange={(e) => setText(e.target.value)} value={text} />
                    <button
                    onClick={() => {
                        addTask(text, state);
                        setText('');
                        setOpne(false);
                    }}
                    >
                        Submit
                    </button>
                </div>
            </div>
            }
            

        </div>




    )
}