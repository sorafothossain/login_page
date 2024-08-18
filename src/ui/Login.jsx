import React from 'react'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa'

export default function Login() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <div className="w-[700px] bg-white h-[500px] shadow-lg ">
        <div className="flex flex-col items-center justify-center pt-14">
          <h1 className="font-bold text-3xl ">Sign In</h1>
          <div className="flex gap-5 pt-8 ">
            <div className="bg-gray-400 p-3 flex items-center justify-center rounded-full shadow-sm ">
              <FaFacebookF />
            </div>
            <div className="bg-gray-400 p-3 flex items-center justify-center rounded-full shadow-sm ">
              <FaGoogle />
            </div>
            <div className="bg-gray-400 p-3 flex items-center justify-center rounded-full shadow-sm ">
              <FaLinkedinIn />
            </div>
          </div>
          <p className="pt-7 text-gray-400">or use your account</p>

          <div>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-72 h-10 bg-gray-300 pl-1 rounded-md mt-3 text-black placeholder:text-black"
          />
          
          <input
            type="text"
            placeholder="Enter your password"
            className="w-72 h-10 bg-gray-300 pl-1 rounded-md mt-5 text-black placeholder:text-black"
          />
          </div>

          <p
            className="mt-3
      text-blue-600"
          >
            Forgat your password?
          </p>
          <button className="bg-green-800 w-28 h-8 rounded-md text-white uppercase text-[16px] flex justify-center items-center mt-2">
            Sign in
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
