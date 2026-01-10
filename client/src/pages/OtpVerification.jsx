import React, { useEffect, useRef, useState } from 'react'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AxiosTostError from '../utils/AxiosToastError'
import { useGlobalContext } from '../provider/GlobalProvider'

const OtpVerification = () => {

    const [data, setData] = useState(["", "", "", "", "", ""])
    const inputRef = useRef([])
    const valid = data.every(el => el)
    const location = useLocation()
    const navigate = useNavigate()

    const { darkMode, setDarkMode } = useGlobalContext()

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await Axios({
                ...SummaryApi.forgot_password_otp_verify,
                data: {
                    otp: data.join(""),
                    email: location?.state?.email
                }

            })

            if (response.data.error) {
                toast.error(response.data.message)
            }

            if (response.data.success) {
                toast.success(response.data.message)
                setData(["", "", "", "", "", ""])

                navigate("/reset-password", {
                    state: {
                        data: response.data,
                        email: location?.state?.email
                    }
                })
            }

        } catch (error) {
            AxiosTostError(error)
        }
    }

    useEffect(() => {
        inputRef.current[0].focus()
    }, [])


    return (
        <section className={`h-screen hide-scrollbar overflow-y-auto ${darkMode ? "bg-primary-dark" : "card-bg-color-light"} text-primary-text extra-font-style md:px-14 flex items-center justify-center`}>

            <div className={`text-[#e3e5ea] ${darkMode ? "text-[#e3e5ea] bg-gradient-to-br from-[#21355cc9] via-[#223765d4] to-[#2b3546e7]" : "bg-gradient-to-br from-[#3d2401] via-[#481212ec] to-[#3d2401] text-blue-100 shadow-lg"} px-6 py-3 rounded-md`}>

                <form className='p-1 sm:p-2' onSubmit={handleSubmit}>

                    <p className='font-semibold pb-1'>OTP : </p>

                    <div className='flex flex-row gap-3 sm:gap-4'>
                        {
                            data.map((element, index) => {
                                return (
                                    <input type="text"
                                        key={index}
                                        value={data[index]}
                                        onChange={(e) => {

                                            const value = e.target.value
                                            const newData = [...data]
                                            newData[index] = value
                                            setData(newData)

                                            if (value && index < 5) {
                                                inputRef.current[index + 1].focus()
                                            }

                                        }}
                                        ref={(ref) => {
                                            inputRef.current[index] = ref
                                        }}
                                        required
                                        maxLength={1}
                                        className='bg-[#b3b6c5] rounded text-[#100f0f] h-8 w-8 sm:h-12 sm:w-12 outline-none text-center'
                                    />
                                )
                            })
                        }
                    </div>

                    <button disabled={!valid} className={`p-1 sm:p-2 ${valid ? "bg-[#2c6abc] text-[#d1dcfb] cursor-pointer" : "bg-[#0b62d3] hover:bg-[#0559c7] text-[#d1dcfb] cursor-not-allowed"} transition-colors duration-200 w-full mb-2.5 mt-4 rounded font-semibold`}>Submit</button>

                </form>

            </div>

        </section>
    )
}

export default OtpVerification
