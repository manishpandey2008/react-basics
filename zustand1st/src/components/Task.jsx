import { usestore } from '../store'
import './Task.css'
import className from 'classnames'
import deleteSvg from '../assets/delete.svg'


export default function Task({title}){
    const task=usestore((store)=>
        store.tasks.find((task)=>task.title===title)
    )

    const deleteTask=usestore((store)=> store.deleteTask);

    const setDragTask=usestore((store)=> store.setDragTask);

    return (
        <div className='task' draggable onDragStart={()=>setDragTask(task.title)}>
            <div>
                {task.title}
            </div>
            <div className='bottomWrapper'>
                <div >
                    <img onClick={()=>deleteTask(task.title)} src={deleteSvg} alt="" className='' />
                </div>
                <div className={className('status',task.state)}>{task.state}</div>
            </div>
        </div>
    )
}