// import React from 'react'

// const JobCard = ({title,location,company}) => {
//     return (
//         <div>
//             <h3>{title}</h3>
//             <h3>{company}</h3>
//             <h3>{location}</h3>
            
//         </div>
//     )
// }

// export default JobCard


import React from 'react'

const JobCard = ({ title, location, company, onApply, isApplied }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">

      {/* Job Information */}
      <div className="flex items-start justify-between gap-4">

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            🏢 {company}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            📍 {location}
          </p>
        </div>

        {/* Apply Button */}
        <button
          onClick={onApply}
          disabled={isApplied}
          className={`shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition ${
            isApplied
              ? 'bg-green-100 text-green-700 cursor-not-allowed'
              : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
          }`}
        >
          {isApplied ? 'Applied' : 'Apply'}
        </button>

      </div>

    </div>
  )
}

export default JobCard

