import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const [data, setData] = useState({
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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (data.newPassword !== data.confirmPassword) {
    //         toast.error(
    //             "New password and confirm password must be same"
    //         )
    //         return
    //     }

    //     try {
    //         const response = await Axios({
    //             ...SummaryApi.resetPassword,
    //             data: data
    //         })
    //         // console.log(response)

    //         if (response.data.error) {
    //             toast.error(
    //                 response.data.message
    //             )
    //             // console.log(response)
    //         }

    //         if (response.data.success) {

    //             navigate("/login")

    //             toast.success(
    //                 response.data.message
    //             )

    //             setdata({
    //                 email: "",
    //                 newPassword: "",
    //                 confirmPassword: ""
    //             })


    //         }

    //         // console.log("response ",response)

    //     } catch (error) {
    //         AxiosTostError(error)
    //         // console.log("error occur")
    //     }

    // }

    return (
        <section className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px]'>

            <div className='container mx-auto  md:max-w-lg max-w-[95%] p-7 rounded-md'>


                <form className='grid gap-4 pl-6 py-1 text-[#e3e5ea] bg-gradient-to-br from-[#43547a] to-[#232a36] mt-4'>

                    <div className='group'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
                        <input type="text" onChange={handleChange} name='password' value={data.password} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
                    </div>

                    <div className='group'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Confirm password :</p>
                        <input type="text" onChange={handleChange} name='confirmPassword' value={data.confirmPassword} required className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
                    </div>

                    <button disabled={!valid} className={`p-2 ${valid ? "bg-[#2c6abc] hover:bg-[#2463b5] text-[#d1dcfb]" : "bg-[#4c79b4] hover:bg-[#2c6abc]  text-[#d1dcfb]"} w-[90%] mt-2 rounded  font-semibold`}>Register</button>

                </form>


            </div>
        </section>
    )
}

export default ResetPassword
