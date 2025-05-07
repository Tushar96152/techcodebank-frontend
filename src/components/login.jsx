import React from 'react'
import netbank from '../assets/netbank.jpg'
import warning from '../assets/warning.png'
import rupee from '../assets/rupee.png'
import tv from '../assets/tv.png'
import creditcard from '../assets/creditcard.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useContext } from 'react'
import { UserContext } from '../contextapi/index.jsx'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [errors, setErrors] = React.useState({})
  const navigate = useNavigate();

  const { setUserData } = useContext(UserContext);

  const validateForm = () => {
    const newErrors = {}
    
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    try {
      const { data } = await axios.post('http://3.110.164.139:8080/user/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      
      const userdata = data.data;
      
      if (data.code == 1) {
        localStorage.setItem('user', JSON.stringify(userdata))
        localStorage.setItem('token', JSON.stringify(userdata.token))
        setUserData(userdata);
        toast.success('login success')
        navigate('/')
      } else {
        toast.warning('Invalid userId or password')
        setEmail('')
        setPassword('')
      }

    } catch (error) {
      console.error('Login error:', error)
      toast.error('Invalid userId or password')
    }
  }

  return (
    <>
      <h1 className='bg-[#A20A3A] w-100% h-10 mt-2 p-1 px-125 text-white text-lg relative top-33'>Welcome to PNB internet banking</h1>
      <main className='flex px-40 h-200 bg-gray-200 py-10 gap-10 relative top-30'>
        <section className='left-side '>
          <div className='w-90 h-108 bg-gray-100 border-gray-300 border-1 shadow-2xl rounded-sm'>
            <h2 className='ml-4'>Exiting users login! if Not? <a className='text-[blue]' href="/signup">signup</a> </h2>
            <hr />
            <form action="post" onSubmit={handleSubmit}>
              <div className='flex flex-col gap-5 px-4 py-4'>

                <div>
                  <label htmlFor="email">Email ID</label>
                  <input 
                    className='border-1 rounded-sm bg-white w-55 h-8 ml-7.5 text-black px-4' 
                    type="text" 
                    id="email"
                    placeholder='demo@gmail.com' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                
                <div className='flex'>
                  <label htmlFor="password">Password</label>
                  <div className="relative w-55 ml-5">
                    <input 
                      className='border-1 rounded-sm bg-white w-full h-8 text-black px-4 pr-10' 
                      type={showPassword ? "text" : "password"} 
                      id="password" 
                      placeholder='password' 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button 
                      type="button" 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                  {errors.password && <p className="text-red-500 absolute text-xs mt-26">{errors.password}</p>}
              </div>
              <hr />

              <div className='securitytips overflow-y-scroll'>
                <p className='p-1 px-4'> <a href="">Security tips</a></p>

                <ol className='list-decimal p-4 px-10 text-sm'>
                  <li>Do not reveal passwords over phone/email etc. to any person including Bank.</li>
                  <li>Change your password regularly. Keep your password a combination of alphabets, special characters and numbers.</li>
                  <li>Forget your passwor  <NavLink to='/user/cahge-password' className='text-blue-400' > Reset Password </NavLink> </li>
                </ol>
              </div>
              <hr />
              <button type='submit' className='bg-[#FDBD30] w-30 h-8 rounded-sm mt-1 ml-25 hover:bg-[#fdbc30c9] text-white'> Continue </button>

            </form>
          </div>
        </section>
        <section className='flex flex-col right w-150 gap-4'>
          <img className='w-190 h-80 shadow-2xl rounded-sm' src={netbank} alt="" />

          <div className='flex gap-7'>
            <div className='card w-32 h-25 border-1 rounded-sm p-2'>
              <a className='text-[#A20A3A] text-sm' href="">Demo video</a>
              <img className='w-10 ml-8' src={tv} alt="" />
            </div>

            <div className='card w-32 h-25 border-1 rounded-sm p-2'>
              <a className='text-[#A20A3A] text-sm' href=""> Enable tax facility</a>
              <img className='w-10 ml-8' src={rupee} alt="" />
            </div>

            <div className='card w-32 h-25 border-1 rounded-sm p-2'>
              <a className='text-[#A20A3A] text-sm' href="">Disable IBS  and MBS</a>
              <img className='w-10 ml-8' src={warning} alt="" />
            </div>

            <div className='card w-32 h-25 border-1 rounded-sm p-2'>
              <a className='text-[#A20A3A] text-sm' href="">Creadit card enable</a>
              <img className='w-10 ml-6' src={creditcard} alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Login