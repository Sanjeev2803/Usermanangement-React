import React, { useContext } from 'react'
import { contextLogin } from './LoginContext'


function UserProfile() {
  let [current]=useContext(contextLogin)
 
  return (
    <div>

    <p className='lead fs-1 text-center text-primary'>Welcome,{current.username}</p>
    </div>
  )
}

export default UserProfile