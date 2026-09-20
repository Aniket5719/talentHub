// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { logout } from '../store/authSlice'

// const Navbar = () => {
//     const dispatch= useDispatch()
//     const navigate=useNavigate()
//     const handleLogout=(e)=>{
//         localStorage.removeItem('token')
//         dispatch(logout())
//         navigate('/login')
//     }
//     return (
//         <nav className='bg-amber-400 border-b border-amber-500 sticky top-0 z-50 shadow-sm'>
//             <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
//                 <div className='flex items-center justify-between h-16'>
//                     {/* Logo Segment */}
//                     <div className='shrink-0 flex items-center'>
//                         <Link to='/' className='text-xl font-bold text-slate-900 tracking-wider flex items-center gap-2'>
//                             💼 <span className='hidden sm:inline'>JobPortal</span>
//                         </Link>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <div className='hidden md:flex items-center space-x-4'>
//                         <Link to='/' >Home</Link>
//                         <Link to='/jobs' >Jobs</Link>
//                         <Link to='/applications' >My Applications</Link>
//                         <Link to='/profile' >Profile</Link>
//                     </div>

//                     {/* Action Button */}
//                     <div className='hidden md:flex items-center'>
//                         <button className='bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 rounded-lg text-sm font-semibold shadow transition-all duration-200 hover:shadow-md transform active:scale-95' onClick={handleLogout}>
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/authSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(logout())
    navigate('/login')
  }

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900"
            >
              <span className="text-2xl">💼</span>
              <span className="hidden sm:inline">
                Talent<span className="text-indigo-600">Hub</span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/jobs" className={navLinkClass}>
              Jobs
            </NavLink>

            <NavLink to="/applications" className={navLinkClass}>
              My Applications
            </NavLink>

            <NavLink to="/profile" className={navLinkClass}>
              Profile
            </NavLink>
          </div>

          {/* Logout */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 active:scale-95"
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar