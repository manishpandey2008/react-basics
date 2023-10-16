import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const username="Manish Pandey";

const CreatedComponent=React.createElement('a',{href:'https://www.google.com',target:'_blank'},'Visit Gioohle',username)
// username work like a {username} in React.createElement function

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  CreatedComponent
)


// {} => Evaluate Expression
// We cann't use any other exporession in side {} , like we can not use if else etc.
