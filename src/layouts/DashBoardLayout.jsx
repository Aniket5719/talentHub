// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import { Outlet } from 'react-router-dom'

// const DashBoardLayout = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Sidebar/>
//       <Outlet/>
//     </div>
//   )
// }

// export default DashBoardLayout

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const DashBoardLayout = () => {
  return (
    <>
      <Navbar />

      <Sidebar />

      <main className="ml-64 min-h-[calc(100vh-4rem)] bg-gray-50 p-6">
        <Outlet />
      </main>
    </>
  )
}

export default DashBoardLayout