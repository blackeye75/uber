import React from 'react'
import { useContext } from 'react'
import { UserContextData } from '../context/UserContext'
import { Navigate, useNavigate } from 'react-router-dom'

const UserProtectedWraper = ({children}) => {

    const {user}=useContext(UserContextData)
    const navigate = useNavigate();

  return (
    <div>{children}</div>
  )
}

export default UserProtectedWraper