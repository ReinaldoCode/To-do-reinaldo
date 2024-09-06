import React from 'react'
import { Link } from 'react-router-dom'
import { FormRow } from "../Components/form-row"

export const Login = () => {
  return (
    <div className="flex  h-screen justify-center ">
      <div className="w-96 rounded-md h-96 text-center pt-8 mt-10  bg-gray-700 p-5"> 
      <form className=''>
      <h4 className="mt-8 font-bold text-2xl text-blue-400">Login</h4>
      <FormRow type='email' lableText='Email'name='email' defaultValue=''/>
      <FormRow type='password' lableText='Password' name='password' defaultValue=''/>
      <button type='submit' className="transition ease-in-out delay-100 bg-blue-400 hover:-translate-y-1 mt-4 hover:scale-110 hover:bg-indigo-400 duration-300 rounded-md w-20">
        submit
      </button>
      <p className='mt-4'>
          Don't have an account?
          <Link to="/register" className="text-blue-400 hover:text-indigo-400">
            Register
          </Link>
        </p>
    </form>

    </div>
    </div>
    )
}

