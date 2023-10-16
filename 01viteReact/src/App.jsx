import React, { useState } from 'react'
import './App.css'
import TopNave from './components/top-nav/TopNav'
import SideNave from './components/sid-nav/SideNave'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='home'>
      <div className='top-nav-wrapper'>
        <TopNave />
      </div>
      <div className='body'>
          <div className='side-nav-wrapper'>
            <SideNave />
          </div>
          <div className='main-body'>
            CreatedComponent
          </div>
      </div>
    </div>
   
  )
}

export default App
