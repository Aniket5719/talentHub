
// import React from 'react'
// import useAuth from '../hooks/useAuth'
// // import { useSelector } from 'react-redux'

// const Dashboard = () => {

//   //const auth = useSelector((state) => state.auth)
//   const auth = useAuth();

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       <p>
//         Authenticated: {auth.isAuthenticated ? 'Yes' : 'No'}
//       </p>

//       <p>
//         User: {auth.user ? auth.user.name : 'Not logged in'}
//       </p>

//       <p>
//         Role: {auth.role ? auth.role : 'No role'}
//       </p>
//     </div>
//   )
// }

// export default Dashboard


import React from 'react'
import useAuth from '../hooks/useAuth'

const Dashboard = () => {
  const auth = useAuth()

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="mt-1 text-gray-500">
          Welcome back, {auth.user?.name || 'User'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Account Status
          </p>

          <h2 className="mt-2 text-xl font-semibold text-gray-900">
            {auth.isAuthenticated
              ? 'Authenticated'
              : 'Not Authenticated'}
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Logged in User
          </p>

          <h2 className="mt-2 text-xl font-semibold text-gray-900">
            {auth.user?.name || 'Not logged in'}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {auth.user?.email || ''}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            User Role
          </p>

          <span className="inline-block mt-3 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            {auth.role || 'No role'}
          </span>
        </div>

      </div>

      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Quick Overview
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Use the sidebar to browse jobs, manage applications,
          and update your profile.
        </p>
      </div>

    </div>
  )
}

export default Dashboard