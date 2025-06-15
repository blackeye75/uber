import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContextData } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWraper = ({ children }) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) { 
            navigate('/login');
        }
    }, [token])

    return (
        <div>{children}</div>
    )
}

export default UserProtectedWraper