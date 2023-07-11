// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/login")
  };
  function navigateHomePage(){
    navigate("/HomePage");
  }
  return (
    <div className='bg-blue-200 flex flex-col justify-center h-screen' >
      <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
        <h2 className='text-4x1 dark:text-white font-bold text-center'>Sign Up</h2>
        <div className='flex flex-col text-gray-400 py-2'>
        <label>Email</label>
        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
        </div>

        <div className='flex flex-col text-gray-400 py-2'>
        <label>Password</label>
        <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="Password" />
        </div>
        <button onClick={navigateHomePage}  className='w-full my-5 py-2 bg-rose-700 rounded-lg '>Sign Up</button>
        <div className='flex justify-between text-gray-400 py-2'>
          <p className='flex items-center '><input className='mr-2' type="Checkbox" />Remember Me?</p>
          <p>Forgot Password?</p>
        </div>
        <div>
          <p>Need an account? <a className='mr-4 hover:underline md:mr-6 cursor-pointer'onClick={handleLogin} >Login</a></p>
        </div>
       
      </form>
    </div>
  )
}
