// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {

//     return (

//         <div>
//             <NavLink to='/dashboard' className={({ isActive }) => {
//                 return isActive ? 'active' : 'normal'
//             }}>DashBoard</NavLink>


//             <NavLink to='/jobs' className={({ isActive }) => {
//                 return isActive ? 'active' : 'normal'
//             }}>Jobs</NavLink>

//             <NavLink to='/applications' className={({ isActive }) =>
//                 isActive ? 'active' : 'normal'
//             }>Applications</NavLink>
//             <NavLink to='/candidates' className={({ isActive }) =>
//                 isActive ? 'active' : 'normal'
//             }>Candidates</NavLink>
//             <NavLink to='/interviews' className={({ isActive }) => {
//                 return isActive ? 'active' : 'normal'
//             }}>Interviews</NavLink>
//             <NavLink to='/profile' className={({ isActive }) =>
//                 isActive ? 'active' : 'normal'
//             }>Profile</NavLink>

//         </div>
//     )
// }

// export default Sidebar

import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive
        ? 'bg-indigo-100 text-indigo-700'
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-64 bg-white border-r border-gray-200 shadow-sm">

      <div className="p-4">

        {/* Navigation Title */}
        <p className="px-4 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
          Main Menu
        </p>

        <nav className="space-y-1">

          <NavLink
            to="/dashboard"
            className={navLinkClass}
          >
            <span>📊</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/jobs"
            className={navLinkClass}
          >
            <span>💼</span>
            <span>Jobs</span>
          </NavLink>

          <NavLink
            to="/applications"
            className={navLinkClass}
          >
            <span>📄</span>
            <span>Applications</span>
          </NavLink>
          <NavLink
            to="/profile"
            className={navLinkClass}
          >
            <span>👤</span>
            <span>Profile</span>
          </NavLink>

        </nav>

      </div>

    </aside>
  )
}

export default Sidebar