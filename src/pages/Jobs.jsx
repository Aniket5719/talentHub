// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applyToJob, fetchApplications, fetchJobs } from "../store/jobSlice";
// import JobCard from "../components/JobsCard";
// import useDebounce from "../hooks/useDebounce";

// function Jobs() {
//   console.log("Jobs component rendered");

//   const { jobs, applications, error, loading } = useSelector(
//     (state) => state.jobs
//   );

//   const [search, setSearch] = useState('')
//   const debouncedSearch = useDebounce(search, 500)
//   const [location, setLocation] = useState('')
//   const [currentPage, setCurrentPage] = useState(1)

//   const [appliedJobs, setAppliedJobs] = useState([]);

//   const dispatch = useDispatch();
//   const jobsPerPage = 5;



//   useEffect(() => {
//     dispatch(fetchJobs());
//     dispatch(fetchApplications());
//   }, [dispatch]);

//   const handlesubmit = (job) => {
//     console.log("Applying for:", job);

//     dispatch(
//       applyToJob({
//         jobId: job.id,
//         status: "Applied",
//       })
//     );

//     setAppliedJobs([...appliedJobs, job.id]);
//   };

//   const filteredJobs = jobs.filter((job) => {
//     const matchesSearch =
//       job.title
//         .toLowerCase()
//         .includes(debouncedSearch.toLowerCase())

//     const matchesLocation =
//       location === '' ||
//       job.location === location

//     return matchesSearch && matchesLocation
//   })
//   const startIndex = (currentPage - 1) * jobsPerPage
//   const paginatedJobs = filteredJobs.slice(
//     startIndex, startIndex + jobsPerPage
//   )

//   const totalPages = Math.ceil(filteredJobs.length / jobsPerPage)
//   return (
//     <div>
//       <h1>Jobs</h1>
//       <p>Explore available jobs</p>
//       <input
//         type="text" value={search}
//         placeholder="Search jobs..."
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <select
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       >
//         <option value="">All Locations</option>
//         <option value="Bangalore">Bangalore</option>
//         <option value="Hyderabad">Hyderabad</option>
//         <option value="Pune">Pune</option>
//         <option value="Bhubaneswar">Bhubaneswar</option>
//       </select>

//       {loading && <p>Loading jobs...</p>}

//       {error && <p>{error}</p>}

//       {paginatedJobs
//         .map((job) => {
//           const isApplied = applications.some(
//             (application) => application.jobId === job.id
//           );



//           return (
//             <div key={job.id}>
//               <JobCard
//                 title={job.title}
//                 location={job.location}
//                 company={job.company}
//               />

//               <button
//                 type="button"
//                 onClick={() => handlesubmit(job)}
//                 disabled={isApplied || appliedJobs.includes(job.id)}
//               >
//                 {isApplied || appliedJobs.includes(job.id)
//                   ? "Applied"
//                   : "Apply"}
//               </button>
//             </div>
//           );
//         })}
//       <button onClick={() => setCurrentPage(currentPage + 1)}
//         disabled={currentPage >= totalPages}>
//         Next</button>
//       <button
//         onClick={() => setCurrentPage(currentPage - 1)}
//         disabled={currentPage <= 1}
//       >
//         Previous
//       </button>
//     </div>
//   );
// }

// export default Jobs;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyToJob,
  fetchApplications,
  fetchJobs,
} from "../store/jobSlice";
import JobCard from "../components/JobsCard";
import useDebounce from "../hooks/useDebounce";

function Jobs() {
  const { jobs, applications, error, loading } = useSelector(
    (state) => state.jobs
  );

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [location, setLocation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const jobsPerPage = 5;

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchApplications());
  }, [dispatch]);

  const handleSubmit = (job) => {
    dispatch(
      applyToJob({
        jobId: job.id,
        status: "Applied",
      })
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesLocation =
      location === "" || job.location === location;

    return matchesSearch && matchesLocation;
  });

  const startIndex = (currentPage - 1) * jobsPerPage;

  const paginatedJobs = filteredJobs.slice(
    startIndex,
    startIndex + jobsPerPage
  );

  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Jobs
        </h1>

        <p className="mt-1 text-gray-500">
          Explore available opportunities
        </p>
      </div>

      {/* Search & Filter */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm mb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Search */}
          <div className="md:col-span-2">
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Search Jobs
            </label>

            <input
              id="search"
              type="text"
              value={search}
              placeholder="Search by job title..."
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Location
            </label>

            <select
              id="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">All Locations</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Pune">Pune</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
            </select>
          </div>

        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
          <p className="text-gray-500">
            Loading jobs...
          </p>
        </div>
      )}

      {/* Error */}
      {error && !loading && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-red-700">
            {error}
          </p>
        </div>
      )}

      {/* Jobs */}
      {!loading && !error && (
        <>
          {paginatedJobs.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
              <div className="text-4xl mb-3">
                🔍
              </div>

              <h2 className="text-lg font-semibold text-gray-900">
                No jobs found
              </h2>

              <p className="text-gray-500 mt-1">
                Try changing your search or location filter.
              </p>
            </div>
          ) : (
            <div className="space-y-4">

              {paginatedJobs.map((job) => {

                const isApplied = applications.some(
                  (application) =>
                    application.jobId === job.id
                );

                return (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    onApply={() => handleSubmit(job)}
                    isApplied={isApplied}
                  />
                );
              })}

            </div>
          )}
        </>
      )}

      {/* Pagination */}
      {!loading &&
        !error &&
        paginatedJobs.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-8">

            <button
              type="button"
              onClick={() =>
                setCurrentPage(currentPage - 1)
              }
              disabled={currentPage <= 1}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() =>
                setCurrentPage(currentPage + 1)
              }
              disabled={currentPage >= totalPages}
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>

          </div>
        )}

    </div>
  );
}

export default Jobs;