import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AxiosTostError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../provider/GlobalProvider'

const SignUpPage = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const navigate = useNavigate()
  const valid = Object.values(data).every(el => el)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }

    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    if (data.password !== data.confirmPassword) {
      toast.error("password and confirm password must be same")
      return
    }

    try {

      const response = await Axios({
        ...SummaryApi.register,
        data : data
      })


      if(response.data.error){
        toast.error(response?.data?.message)
      }

      if(response.data.success){
        toast.success(response?.data?.message)

        setData({
          name : "",
          email : "",
          password : "",
          confirmPassword : ""
        })

        navigate("/SignIn")
      }

    } catch (error) {
      AxiosTostError(error)
    }
  }

  const { darkMode, setDarkMode } = useGlobalContext()

  return (
    <section className={`min-h-[calc(100vh-32px)] ${darkMode ? "bg-primary-dark" : "card-bg-color-light"} text-primary-text extra-font-style md:px-14 pt-[72px]`}>

      <div className='container mx-auto  md:max-w-lg max-w-[95%] p-7 rounded-md'>

        <div className='flex items-center justify-center rounded mt-4 text-sm font-normal'>
          <p className='bg-[#d2645a]  leading-tight text-red-800 p-1.5 font-bold rounded'>Note: After registration, your account will be verified by an admin. Until then, you won't have permission to access admin privileges. </p>
        </div>

        <form onSubmit={handleSubmit} className={`grid gap-4 pl-6 py-1 ${darkMode ? "text-[#e3e5ea] bg-gradient-to-br from-[#43547a] to-[#232a36]" : "bg-gradient-to-br from-[#8c1111] to-[#3d2401] text-blue-100 shadow-lg"} mt-4 pt-4`}>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Name :</p>
            <input type="text" onChange={handleChange} value={data.name} name="name" required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email : </p>
            <input type="email" onChange={handleChange} name='email' value={data.email} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
            <input type="text" onChange={handleChange} name='password' value={data.password} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Confirm password :</p>
            <input type="text" onChange={handleChange} name='confirmPassword' value={data.confirmPassword} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <button disabled={!valid} className={`p-2 ${valid ? "bg-[#2c6abc] hover:bg-[#2463b5] text-[#d1dcfb]" : "bg-[#4c79b4] hover:bg-[#2c6abc]  text-[#d1dcfb]"} w-[90%] mt-2 rounded  font-semibold`}>Register</button>

          <div className='flex md:flex-row gap-x-1 flex-col  justify-center items-center pr-6 pb-2'>
            <p className='text-base  text-sky-50'>Already have account ? </p>
            <Link to={"/SignIn"} className='text-blue-300  flex justify-center'>Login</Link>
          </div>

        </form>


      </div>
    </section>
  )
}

export default SignUpPage
