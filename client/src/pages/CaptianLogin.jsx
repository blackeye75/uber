import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptianLogin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [captianData, setcaptianData] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    setcaptianData({ email: email, password: password })
    setEmail('')
    setPassword('')
    console.log(userData);
  }


  return (
    <div className="p-4  h-screen  flex flex-col justify-between">
      <div>
        <img
          className="w-20  mb-4"
          src="https://pngimg.com/uploads/uber/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={(e) => { submitHandler(e) }} action="">
          <h3 className="text-lg font-medium mb-2">Email Your Email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg  placeholder:text-base"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            password={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-4 py-2 border  mb-7 w-full text-lg  placeholder:text-base"
            required
            placeholder="password"
          />
          <button className="bg-black text-white font-semibold rounded mb-7 w-full px-4 py-2">
            Login
          </button>
          <p className=" text-center mb-3 text-black" >Join us?
            <Link to="/captian-signup" className=" text-blue-500" > Register as a captian!</Link>
          </p>
        </form>
      </div>
      <div>
        <Link to="/login" className="bg-[#c4bc21] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptianLogin