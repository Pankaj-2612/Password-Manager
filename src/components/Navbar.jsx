import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user, onSignOut }) => {
  return (
    <nav className='bg-slate-800 p-4 h-14 flex items-center justify-around'>
      <div className="logo font-bold text-white text-2xl mx-14">
        <span className='text-green-700'>&lt;</span>
        <span>Pass</span>
        <span className='text-green-700'>Op</span>
        <span className='text-green-700'>/&gt;</span>
      </div>
      <ul className="flex items-center space-x-4">
        {user ? (
          <>
            <li className='text-white'>Welcome, {user.name}</li>
            <li>
              <button
                onClick={onSignOut}
                className='text-white hover:text-green-700'>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="text-white hover:text-green-700">Login</Link></li>
            <li><Link to="/signup" className="text-white hover:text-green-700">SignUp</Link></li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
