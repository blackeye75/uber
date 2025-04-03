import React from 'react'

const CaptianSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  // console.log(userData);
  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }


    }
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
              placeholder="First name"
            />

            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg  placeholder:text-base"
              required
              placeholder="Last name"
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

export default CaptianSignup