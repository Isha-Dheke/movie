import React from 'react'
import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <> <div className="w-full h-screen">
    <img
      className="hidden sm:block absolute w-full h-full object-cover"
      src="https://files.merca20.com/uploads/2022/07/Netflix-plan-anuncios-precios.jpeg"
      alt="error loading"
    />
    <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    <div className="fixed w-full px-4 py-24 z-50">
      <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
        <div className="max-w-[320px] mx-auto py-16">
          <h1 className="text-3xl font-bold">SignIn</h1>
          <form className="w-full flex flex-col py-4">
            <input
              className="bg-gray-700 py-3 my-3 rounded pl-2"
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="bg-gray-700 py-3 my-3 rounded pl-2"
              type="password"
              placeholder="Enter your password"
            />
            <button className="bg-red-600 font-bold py-3 my-6 rounded">
              Sign In
            </button>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">
                <input className="mr-2 cursor-pointer" type="checkbox" />
                Remember me?
              </p>
              <p className="text-gray-700 cursor-pointer">Need Help?</p>
            </div>
            <div className="py-10">
              <p className='flex justify-between items-center'>
                <span className="text-gray-700 cursor-pointer">New to Netflix?</span>{' '}
                <Link to='/signup'>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default Login