import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-full'>
      <div className=''>
        <TodoForm />
      </div>

      <div className=''>
        <TodoItem />
      </div>
   </div>
  )
}

export default App
