import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AxiosTostError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { useGlobalContext } from '../provider/GlobalProvider'

const ForgotPassword = () => {

    const [data, setData] = useState({
        email: ""
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await Axios({
                ...SummaryApi.forgot_password,
                data: data
            })

            if (response.data.error) {
                toast.error(response?.data?.message)
            }

            if (response.data.success) {

                toast.success(response?.data?.message)

                navigate("/Otp-verification", {
                    state: data
                })

                setData({
                    email: ""
                })

            }

        } catch (error) {
            AxiosTostError(error)
        }
    }

    const { darkMode, setDarkMode } = useGlobalContext()

    return (
        <section className={`h-screen hide-scrollbar overflow-y-auto ${darkMode ? "bg-primary-dark" : "card-bg-color-light"} text-primary-text extra-font-style md:px-14 flex items-center justify-center`}>

            <div className='container mx-auto md:max-w-lg max-w-[95%] p-4 sm:p-7 rounded-md'>

                <form onSubmit={handleSubmit} className={`grid gap-2 text-[15px] pl-6 sm:pl-8 py-6 shadow-md ${darkMode ? "text-[#e3e5ea] bg-gradient-to-br from-[#21355cc9] via-[#223765d4] to-[#2b3546e7]" : "bg-gradient-to-br from-[#3d2401] via-[#4f0505] to-[#3d2401] text-blue-100 shadow-lg"} mt-4 pt-6 rounded-lg`}>

                    <div className='group'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email : </p>
                        <input type="email" onChange={handleChange} name='email' value={data.name} required className='bg-[#b3b6c5] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
                    </div>

                    <button disabled={!valid} className={`p-2 ${valid ? "bg-[#2c6abc] text-[#d1dcfb] cursor-pointer" : "bg-[#0b62d3] hover:bg-[#0559c7] text-[#d1dcfb] cursor-not-allowed"} transition-colors duration-200 w-[90%] mt-2 rounded font-semibold`}>Verify</button>

                </form>

            </div>
        </section>
    )
}

export default ForgotPassword
