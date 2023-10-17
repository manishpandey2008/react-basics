import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterClass from './components/useState/CounterClass'
import FunctionUseState from './components/useState/FunctionUseState'
import ByObject from './components/useState/ByObject'
import ByArray from './components/useState/ByArray'
import ClassCounter from './components/useEffect/ClassCounter'
import ClassCountByUseEffect from './components/useEffect/ClassCountByUseEffect'
import MousePointerClass from './components/useEffect/MousePointerClass'
import MousePointerFunction from './components/useEffect/MousePointerFunction'
import DisplayContainer from './components/useEffect/DisplayContainer'
import CounterByClass from './components/useEffect/CounterByClass'
import CounterByFunction from './components/useEffect/CounterByFunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CounterClass /> */}
      {/* <FunctionUseState /> */}
      {/* <ByObject /> */}
      {/* <ByArray /> */}
    {/* --------------useEffect---------- */}
    {/* <ClassCounter /> */}
      {/* <ClassCountByUseEffect /> */}
      {/* <MousePointerClass /> */}
      {/* <MousePointerFunction /> */}
      {/* <DisplayContainer /> */}
      {/* <CounterByClass /> */}
      <CounterByFunction />
    </>
  )
}

export default App
