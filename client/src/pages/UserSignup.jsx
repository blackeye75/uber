import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContextData } from '../context/UserContext'

const UserSignup = () => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [userData, setuserData] = useState({})

  const navigate = useNavigate()

  const {user, setuser} = useContext(UserContextData)

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = { fullname: { firstname, lastname }, email: email, password: password }

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
    const data = response.data;
    // setuser(data.user)
    console.log(data.user);
    
    if(response.status== 201){
      setuser(response.data.user)
      navigate('/home')
    }
    setFirstname('')
    setLastname('')
    setPassword('')
    setEmail('')
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
          <h3 className="text-base font-medium mb-2">Enter Your Full Name</h3>
          <div className='flex gap-2' >
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg  placeholder:text-base"
              required
              placeholder="First Name"
            />

            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg  placeholder:text-base"
              required
              placeholder="Last Name"
            />
          </div>
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
            Create Account
          </button>
        </form>
        <p className=" text-center mb-3 text-black" >Already Regitered?
          <Link to="/login" className=" text-blue-500" > Login here!</Link>
        </p>
      </div>
      <div>
        <p className='text-xs leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default UserSignup