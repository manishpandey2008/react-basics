import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvide'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
      {/* <h1>Test Context Api In React</h1> */}
      <Login></Login>
      <Profile></Profile>
   </UserContextProvider>
  )
}

export default App
