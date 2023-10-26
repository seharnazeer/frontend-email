import React from 'react';
// import './App.css';
import '../index.css';

import { useState } from "react";

export default function Signin() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
   
    <div className=' flex  min-h-screen items-center justify-center bg-gray-100'>
    <div className=" flex flex-col self-center grow gap-10">

        <h1 className="text-3xl font-bold  self-center ">Welcome Back</h1>

        <div className=" flex flex-col justify-between gap-4 w-full  max-w-md mx-auto p-6 bg-white rounded-lg">
        <button className='bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-gray-300 hover:border-transparent rounded'>Sign in through Google</button>    
        <input placeholder='Email' className='bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-gray-500'></input>

        {/* password */}
<div className="relative  container ">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full
        px-4
        py-2
        text-base
        border border-gray-300
        rounded
        outline-none
        focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>


        <a className=' self-end   text-gray-600 dark:text-gray-400 decoration-2 hover:underline font-medium" href="#"'>forgot password?</a>

        <button id='login'  className='bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-blue-600 py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Log in</button> 
        <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 self-center' > Don't have account <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">Sign up</a></p>
        </div>

    </div>
    </div>
    </>
  )
}
