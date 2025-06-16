import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogut = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            withCredentials: true // if your backend uses cookies
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
        .catch(() => {
            localStorage.removeItem('token');
            navigate('/login');
        });
    }, [token, navigate]);

    return (
        <div>User Logout</div>
    )
}

export default UserLogut