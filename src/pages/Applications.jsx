// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchApplications, fetchJobs } from '../store/jobSlice'

// const Applications = () => {
//   const dispatch = useDispatch()

//   const { applications, jobs, loading, error } = useSelector(
//     (state) => state.jobs
//   )

//   useEffect(() => {
//     dispatch(fetchApplications())
//     dispatch(fetchJobs())
//   }, [dispatch])

//   if (loading) {
//     return <p>Loading applications...</p>
//   }

//   if (error) {
//     return <p>{error}</p>
//   }

//   return (
//     <div>
//       <h1>My Applications</h1>

//       {applications.length === 0 ? (
//         <p>No applications found.</p>
//       ) : (
//         applications.map((application) => {
//           const job = jobs.find(
//             (job) => job.id === application.jobId
//           )

//           return (
//             <div key={application.id}>
//               <h3>{job?.title}</h3>
//               <p>Company: {job?.company}</p>
//               <p>Location: {job?.location}</p>
//               <p>Status: {application.status}</p>
//             </div>
//           )
//         })
//       )}
//     </div>
//   )
// }

// export default Applications

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApplications, fetchJobs } from '../store/jobSlice'

const Applications = () => {
  const dispatch = useDispatch()

  const { applications, jobs, loading, error } = useSelector(
    (state) => state.jobs
  )

  useEffect(() => {
    dispatch(fetchApplications())
    dispatch(fetchJobs())
  }, [dispatch])

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          My Applications
        </h1>

        <p className="mt-1 text-gray-500">
          Track the jobs you have applied for
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <p className="text-gray-500">
            Loading applications...
          </p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-red-700">
            {error}
          </p>
        </div>
      )}

      {/* Applications */}
      {!loading && !error && (
        <>
          {applications.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">

              <div className="text-4xl mb-3">
                📄
              </div>

              <h2 className="text-lg font-semibold text-gray-900">
                No applications found
              </h2>

              <p className="text-gray-500 mt-1">
                You haven't applied for any jobs yet.
              </p>

            </div>
          ) : (
            <div className="space-y-4">

              {applications.map((application) => {

                const job = jobs.find(
                  (job) => job.id === application.jobId
                )

                return (
                  <div
                    key={application.id}
                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >

                    <div className="flex items-start justify-between gap-4">

                      {/* Job Details */}
                      <div>

                        <h3 className="text-lg font-semibold text-gray-900">
                          {job?.title || 'Job not found'}
                        </h3>

                        <p className="mt-2 text-sm text-gray-600">
                          🏢 {job?.company || 'N/A'}
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                          📍 {job?.location || 'N/A'}
                        </p>

                      </div>

                      {/* Status */}
                      <span className="shrink-0 px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                        {application.status}
                      </span>

                    </div>

                  </div>
                )
              })}

            </div>
          )}
        </>
      )}

    </div>
  )
}

export default Applications