import React from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-4">
      <div>
        <img
          className="w-20  mb-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <form action="">
          <h3 className="text-lg font-medium mb-2">Email Your Email</h3>
          <input
            type="email"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border  w-full text-lg  placeholder:text-base"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            className="bg-[#eeeeee] rounded px-4 py-2 border  mb-7 w-full text-lg  placeholder:text-base"
            required
            placeholder="password"
          />
          <button className="bg-black text-white font-semibold rounded mb-7 w-full px-4 py-2">
            Login
          </button>
          <p className="text-blue-500 text-center mb-3" >New Here?
            <Link to="/signup" className="text-black" > Create new Account</Link>
          </p>
        </form>
      </div>
      <div>
        <button className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base">
          Sign in as Captian
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
