
import React, { useState } from 'react'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'

const Profile = () => {
  const auth = useAuth()
  const dispatch = useDispatch()

  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    name: auth.user?.name || '',
    email: auth.user?.email || ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleEdit = () => {
    setFormData({
      name: auth.user?.name || '',
      email: auth.user?.email || ''
    })

    setError('')
    setSuccess('')
    setIsEditing(true)
  }

  const handleCancel = () => {
    setFormData({
      name: auth.user?.name || '',
      email: auth.user?.email || ''
    })

    setError('')
    setIsEditing(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const res = await axios.put(
        `http://localhost:5000/users/${auth.user.id}`,
        {
          ...auth.user,
          name: formData.name,
          email: formData.email
        }
      )

      dispatch(
        login({
          user: res.data,
          token: auth.token,
          role: auth.role
        })
      )

      setSuccess('Profile updated successfully')
      setIsEditing(false)

    } catch (error) {
      setError('Unable to update profile')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your personal information
          </p>
        </div>

        {/* Messages */}

        {success && (
          <div className="mb-4 rounded-lg bg-green-100 px-4 py-3 text-green-700">
            {success}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        {/* Profile Card */}

        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">

          {isEditing ? (

            /* EDIT MODE */

            <form onSubmit={handleSubmit}>

              {/* Name */}

              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Email */}

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Role */}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>

                <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full">
                  {auth.role}
                </span>
              </div>

              {/* Buttons */}

              <div className="flex gap-3">

                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition"
                >
                  {loading ? 'Saving...' : 'Save Profile'}
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-5 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

              </div>

            </form>

          ) : (

            /* VIEW MODE */

            <>

              {/* Name */}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <p className="text-gray-900 text-lg">
                  {auth.user?.name}
                </p>
              </div>

              {/* Email */}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <p className="text-gray-900 text-lg">
                  {auth.user?.email}
                </p>
              </div>

              {/* Role */}

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>

                <span className="inline-block px-3 py-1 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full">
                  {auth.role}
                </span>
              </div>

              {/* Edit Button */}

              <button
                onClick={handleEdit}
                className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                Edit Profile
              </button>

            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default Profile

