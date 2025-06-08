import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
	return (
		<div className='bg-[url("https://images.unsplash.com/photo-1567536303373-0eb3957ba696?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-no-repeat  h-screen pt-5  w-full flex justify-between flex-col  b' >
			<img className='w-20 ml-10 mt-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png" alt="" />
			<div className='bg-white pb-7 px-4 py-4 ' >
				<h2 className='text-3xl font-bold' >Get Started With Uber</h2>
				<Link to="/login" className='inline-block w-full bg-black text-white py-3 px-3 font-bold text-lg mt-5 rounded' >Continue</Link>
			</div>
		</div>
	)
}

export default Start;