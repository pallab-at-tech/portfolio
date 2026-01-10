import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AxiosTostError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import fetchUserDetails from '../utils/FetchUserDetails'
import { setUserDetails } from '../store/userSlice'
import { useDispatch } from 'react-redux'
import { useGlobalContext } from '../provider/GlobalProvider'

const SignInPage = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()
  const valid = Object.values(data).every(el => el)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }

    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await Axios({
        ...SummaryApi.login,
        data: data
      })

      if (response?.data?.error) {
        toast.error(response?.data?.message)
      }

      if (response?.data?.success) {

        toast.success(response?.data?.message)
        localStorage.setItem('accesstoken', response.data.data.accessToken)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)

        const userDetails = await fetchUserDetails()
        dispatch(setUserDetails(userDetails?.data))

        setData({
          email: "",
          password: ""
        })

        navigate("/")
      }

    } catch (error) {
      AxiosTostError(error)
    }
  }

  const { darkMode, setDarkMode } = useGlobalContext()

  return (
    <section className={`h-screen hide-scrollbar overflow-y-auto ${darkMode ? "bg-primary-dark" : "card-bg-color-light"} text-primary-text extra-font-style md:px-14 flex items-center justify-center`}>

      <div className='container mx-auto md:max-w-lg max-w-[95%] p-4 sm:p-7 rounded-md'>

        <form onSubmit={handleSubmit} className={`grid gap-4 text-[15px] pl-6 sm:pl-8 py-4 shadow-md ${darkMode ? "text-[#e3e5ea] bg-gradient-to-br from-[#21355cc9] via-[#223765d4] to-[#2b3546e7]" : "bg-gradient-to-br from-[#3d2401] via-[#4f0505] to-[#3d2401] text-blue-100 shadow-lg"} mt-4 pt-6 rounded-lg`}>


          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email : </p>
            <input type="email" onChange={handleChange} name='email' value={data.email} required className='bg-[#b3b6c5] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
            <input type="text" onChange={handleChange} name='password' value={data.password} required className='bg-[#b3b6c5] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <button disabled={!valid} className={`p-2 ${valid ? "bg-[#2c6abc] text-[#d1dcfb] cursor-pointer" : "bg-[#0b62d3] hover:bg-[#0559c7] text-[#d1dcfb] cursor-not-allowed"} transition-colors duration-200 w-[90%] mt-2 rounded font-semibold`}>Login</button>

          <div className='flex items-start flex-col pr-6 '>

            <div className='flex flex-wrap gap-x-1 items-center'>
              <p className='text-base text-sky-50'>Don't have account ? </p>
              <Link to={"/SignUp"} className={`text-blue-400 text-sm flex justify-center hover:underline`}>Register</Link>
            </div>

            <Link to={"/forgot-password"} className='text-blue-400 text-sm pr-6 pb-2 hover:underline'>Forgot Password ?</Link>
          </div>

        </form>


      </div>
    </section>
  )
}

export default SignInPage
