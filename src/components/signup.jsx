import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    gender: ""
  })

  const [loading, setLoading] = useState(false)

  const hndlechange = (e) => {
    const { name, value } = e.target
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post('http://3.110.164.139:8080/user/register', {
        name: user.name,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        password: user.password,
        gender: user.gender
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      
      if (data.message == 'User Registerd Successfully') {
        toast.success('Registration successful! Please login.');
        navigate('/login')
      } else {
        toast.error('Registration failed. Please try again.');
      }

    } catch (error) {
      console.error('Registration error:', error)
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-32 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-[#A20A3A]">
          Create your User Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={() => navigate('/login')}
            className="font-medium text-[#A20A3A] hover:text-[#820a2e] cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    onChange={hndlechange}
                    value={user.name}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#A20A3A] focus:border-[#A20A3A] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={hndlechange}
                    value={user.email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#A20A3A] focus:border-[#A20A3A] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9]{10}"
                    minLength="10"
                    maxLength="10"
                    autoComplete="tel"
                    required
                    onChange={hndlechange}
                    value={user.phone}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#A20A3A] focus:border-[#A20A3A] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    id="dob"
                    name="dob"
                    type="text"
                    pattern="\d{2}-\d{2}-\d{4}"
                    placeholder="DD-MM-YYYY"
                    required
                    onChange={hndlechange}
                    value={user.dob}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#A20A3A] focus:border-[#A20A3A] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="mt-1">
                  <select
                    id="gender"
                    name="gender"
                    required
                    value={user.gender}
                    onChange={hndlechange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#A20A3A] focus:border-[#A20A3A] sm:text-sm"
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    minLength="8"
                    required
                    onChange={hndlechange}
                    value={user.password}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#A20A3A] focus:border-[#A20A3A] sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A20A3A] hover:bg-[#820a2e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A20A3A] transition-colors duration-200"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : 'Sign up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup