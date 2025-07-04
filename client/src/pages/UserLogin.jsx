import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContextData } from "../context/UserContext";
import axios from "axios";


const UserLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [userData, setuserData] = useState({})

  const { user, setuser } = useContext(UserContextData);
  const navigate = useNavigate();

  const submitHandler =async (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
    if(response.status === 200) {
      const data=response.data;
      setuser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home')
    }


    setEmail('')
    setPassword('')
    // console.log(user);
  } 

  return (
    <div className="p-4 pt-16 h-screen  flex flex-col justify-between">
      <div>
        <img
          className="w-20  mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={(e) => { submitHandler(e) }} action="">
          <h3 className="text-base font-medium mb-2">Email Your Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg  placeholder:text-base"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-base font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-4 py-2 border  mb-7 w-full text-lg  placeholder:text-base"
            required
            placeholder="password"
          />
          <button className="bg-black text-white font-semibold rounded mb-7 w-full px-4 py-2">
            Login
          </button>
          <p className=" text-center mb-3 text-black" >New Here?
            <Link to="/signup" className=" text-blue-500" > Create new Account</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to="/captain-login" className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captian
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
