import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
    <Link to ="/">
    <div>
    <h1 className="text-red-700 text-4xl font-bold cursor-pointer">Cirama</h1>
    </div>
    </Link>
    <div>
    <input type='text' name='search' placeholder='Search Movies' className='px-6 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none '/>
    </div>
    <div>
    <Link to='/login'>
      <button className="text-white pr-4">Sign In</button>
      </Link>
      <Link to='signup'>
      <button className="bg-red-600 text-white px-5 py-2 rounded cursor-pointer">Sign Up</button>
      </Link>
    </div> 
    </div>
    </>
  )
}

export default Navbar