import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AxiosTostError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import fetchUserDetails from '../utils/FetchUserDetails'
import { setUserDetails } from '../store/userSlice'
import { useDispatch } from 'react-redux'

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

      console.log("response from log-in page",response)

      if (response.data.error) {
        toast.error(response?.data?.message)
      }

      if (response.data.success) {

        toast.success(response?.data?.message)
        localStorage.setItem('accesstoken', response.data.data.accessToken)
        localStorage.setItem('refreshToken', response.data.data.refreshToken)

        const userDetails = await fetchUserDetails()
        dispatch(setUserDetails(userDetails?.data))
        console.log("from sign-in page",userDetails)

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

  return (
    <section className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px]'>
      <div className='container mx-auto  md:max-w-lg max-w-[95%] p-7 rounded-md'>

        <form onSubmit={handleSubmit} className='grid gap-4 pl-6 py-2 pt-4 text-[#e3e5ea] bg-gradient-to-br from-[#43547a] to-[#232a36] mt-14'>


          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email : </p>
            <input type="email" onChange={handleChange} name='email' value={data.name} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
            <input type="text" onChange={handleChange} name='password' value={data.name} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <button disabled={!valid} className={`p-2 ${valid ? "bg-[#2c6abc] hover:bg-[#2463b5] text-[#d1dcfb]" : "bg-[#4c79b4] hover:bg-[#2c6abc]  text-[#d1dcfb]"} w-[90%] mt-2 rounded  font-semibold`}>Login</button>

          <div className='flex items-start flex-col pr-6 '>

            <div className='flex gap-x-1'>
              <p className='text-base  text-sky-50'>Don't have account ? </p>
              <Link to={"/SignUp"} className='text-blue-300  flex justify-center'>Register</Link>
            </div>

            <Link to={"/forgot-password"} className='text-blue-300 text-sm pr-6 pb-2'>Forgot Password ?</Link>
          </div>

        </form>


      </div>
    </section>
  )
}

export default SignInPage
