import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './button/Button'

function App() {
  const [color, setColor] =  useState('bg-black');
  
  const handleCallback=(color)=>{
      setColor(color)
  }

  return (

   <div className={'main-page '+color}>
      <div className='footer'>
        <div className='button-collection'>
            <Button text='Red' color="bg-red" parentCallback = {handleCallback} />
            <Button text='Blue' color="bg-blue" parentCallback = {handleCallback} />
            <Button text='Black' color="bg-black" parentCallback = {handleCallback} />
            <Button text='Yellow' color="bg-yellow" parentCallback = {handleCallback} />
            <Button text='Orange' color="bg-orange" parentCallback = {handleCallback} />
            <Button text='Aqua' color="bg-aqua" parentCallback = {handleCallback} />
            <Button text='Blueviolet' color="bg-blueviolet" parentCallback = {handleCallback} />
        </div>  
      </div>
   </div>
  )
}

export default App
