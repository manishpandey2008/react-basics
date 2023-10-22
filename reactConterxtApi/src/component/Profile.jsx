import React, { useContext } from 'react'
import userContext from '../context/UserContext'

export default function Profile() {
  const {user}=useContext(userContext);

  if(!user) return (<p> Please Login</p>)

  return (<p>Hi, {user.username}</p>)
}
