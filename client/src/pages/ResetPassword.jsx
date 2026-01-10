import React, { useEffect, useState } from 'react'
import { useNavigate , useLocation } from 'react-router-dom'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import AxiosTostError from '../utils/AxiosToastError'
import toast from 'react-hot-toast'
import { useGlobalContext } from '../provider/GlobalProvider'

const ResetPassword = () => {

    const [data, setData] = useState({
        password: "",
        confirmPassword: ""
    })

    const { darkMode, setDarkMode } = useGlobalContext()

    const navigate = useNavigate()
    const location = useLocation()
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
        e.preventDefault();

        if (data.password !== data.password) {
            toast.error(
                "New password and confirm password must be same"
            )
            return
        }

        try {
            const response = await Axios({
                ...SummaryApi.reset_password,
                data: {
                    newPassword : data.password,
                    confirmPassword : data.confirmPassword,
                    email : location?.state?.email
                }
            })

            if (response.data.error) {
                toast.error(
                    response.data.message
                )
            }

            if (response.data.success) {

                navigate("/SignIn")

                toast.success(
                    response.data.message
                )

                setData({
                    password : "",
                    confirmPassword: ""
                })

            }

        } catch (error) {
            AxiosTostError(error)
        }

    }

    return (
        <section className={`h-screen hide-scrollbar overflow-y-auto ${darkMode ? "bg-primary-dark" : "card-bg-color-light"} text-primary-text extra-font-style md:px-14 flex items-center justify-center`}>

            <div className='container mx-auto md:max-w-lg max-w-[95%] p-4 sm:p-7 rounded-md'>

                <form onSubmit={handleSubmit} className={`grid gap-2 text-[15px] pl-6 sm:pl-8 py-6 shadow-md ${darkMode ? "text-[#e3e5ea] bg-gradient-to-br from-[#21355cc9] via-[#223765d4] to-[#2b3546e7]" : "bg-gradient-to-br from-[#3d2401] via-[#4f0505] to-[#3d2401] text-blue-100 shadow-lg"} mt-4 pt-6 rounded-lg`}>

                    <div className='group'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
                        <input type="text" onChange={handleChange} name='password' value={data.password} required className='bg-[#b3b6c5] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
                    </div>

                    <div className='group'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Confirm password :</p>
                        <input type="text" onChange={handleChange} name='confirmPassword' value={data.confirmPassword} required className='bg-[#b3b6c5] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
                    </div>

                    <button disabled={!valid} className={`p-2 ${valid ? "bg-[#2c6abc] text-[#d1dcfb] cursor-pointer" : "bg-[#0b62d3] hover:bg-[#0559c7] text-[#d1dcfb] cursor-not-allowed"} transition-colors duration-200 w-[90%] mt-3 rounded font-semibold`}>Register</button>

                </form>

            </div>
        </section>
    )
}

export default ResetPassword
