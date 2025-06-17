import React, { useEffect, useRef, useState } from 'react'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AxiosTostError from '../utils/AxiosToastError'

const OtpVerification = () => {

    const [data, setData] = useState(["", "", "", "", "", ""])
    const inputRef = useRef([])
    const valid = data.every(el => el)
    const location = useLocation()
    const navigate = useNavigate()



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
        <section className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px] flex items-center justify-center pb-20'>
            <div className='text-[#e3e5ea] bg-gradient-to-br from-[#43547a] to-[#232a36] px-6 py-3 rounded-md'>

                <form className='p-2' onSubmit={handleSubmit}>

                    <p className='font-semibold pb-1'>OTP : </p>

                    <div className='flex flex-row gap-4'>
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
                                        className='bg-[#b2b8de] rounded text-[#100f0f] h-12 w-12 outline-none text-center'
                                    />
                                )
                            })
                        }
                    </div>

                    <button disabled={!valid} className={`p-1.5 mt-6 h-10 w-full ${valid ? "bg-[#2c6abc] hover:bg-[#2463b5] text-[#d1dcfb]" : "bg-[#4c79b4] hover:bg-[#2c6abc]  text-[#d1dcfb]"} w-[90%] mt-2 rounded  font-semibold`}>Submit</button>

                </form>

            </div>

        </section>
    )
}

export default OtpVerification
