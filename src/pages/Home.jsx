const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Find Your Next
            <span className="text-indigo-600"> Opportunity</span>
          </h1>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">
            TalentHub helps candidates discover jobs, apply to opportunities,
            and manage their applications in one place.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/jobs"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Explore Jobs
            </a>

            <a
              href="/register"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Create Account
            </a>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-3xl">🔍</div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              Find Jobs
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Search and filter available job opportunities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-3xl">📄</div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              Apply Easily
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Apply to jobs and keep track of your applications.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-3xl">👤</div>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
              Manage Profile
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Keep your profile information updated.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Home