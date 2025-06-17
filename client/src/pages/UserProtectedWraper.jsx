import React from 'react'
import { useContext, useEffect } from 'react'
import { UserContextData } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserProtectedWraper = ({ children }) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContextData);
    const [isloading, setIsloading] = useState(true)
    useEffect(() => {
        if (!token) { 
            navigate('/login');
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }}).then((response) => {
                if (response.status === 200) {
                    const data = response.data;
                    setUser(data.user);
                    console.log("user", data.user);
                }
            }).catch((error)=>{
                console.log(error);
                localStorage.removeItem('token');
                navigate('/login');
            })
    }, [token])

    if(isloading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>{children}</div>
    )
}

export default UserProtectedWraper