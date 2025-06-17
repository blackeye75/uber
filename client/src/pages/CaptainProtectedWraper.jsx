import React, { useEffect, useState } from 'react'
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectedWraper = ({ children }) => {

    const [isloading, setIsloading] = useState(true)

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
        
        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                const data = response.data;
                setCaptain(data.captian);
                console.log("captain", data.captian);
                
                setIsloading(false);
            }
        }).catch((error) => {
            console.log(error);
            localStorage.removeItem('token');
            navigate('/captain-login');
        })
        
    }, [token])
        if (isloading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>{children}</div>
    )
}

export default CaptainProtectedWraper