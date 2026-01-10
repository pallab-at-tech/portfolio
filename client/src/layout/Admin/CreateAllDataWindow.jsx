import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import { TiStarburst } from "react-icons/ti";
import uploadFile from '../../utils/uploadFile';
import { TiTick } from "react-icons/ti";
import Axios from '../../utils/Axios';
import SummaryApi from '../../common/SummaryApi';
import toast from 'react-hot-toast';
import { useGlobalContext } from '../../provider/GlobalProvider';
import { useSelector } from 'react-redux';

const CreateAllDataWindow = ({ close }) => {

    const [data, setData] = useState({
        name: "",
        email: "",
        resume: "",
        contact_number: "",
        about_me: "",
        github_link: "",
        linkedin_link: "",
        instragram_link: "",
        facebook_link: ""
    })

    const [loading, setLoading] = useState(false)
    const { fetchAllDetails, darkMode } = useGlobalContext()


    const handlePhoto = async (e) => {

        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true)

        const response = await uploadFile(file)

        setLoading(false)

        setData((preve) => {
            return {
                ...preve,
                resume: response?.secure_url
            }
        })
    }

    const handleChange = async (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }

        })
    }

    const handleSubmit = async (e) => {
        try {

            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.create_allOf_data,
                data: data
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {
                toast.success(responseData?.message)
                fetchAllDetails()
                close()
            }

        } catch (error) {
            // console.log(error)
        }
    }



    return (
        <section className='fixed inset-0 backdrop-blur-[3px] h-screen pt-[80px] bg-neutral-900/70 z-50 flex items-center justify-center'>

            <div className=''>

                <form onSubmit={handleSubmit} className={`grid gap-y-2 lg:min-w-md  md:min-w-[400px] min-w-[300px] h-[70vh] md:h-[80vh] scrollbar-custom  pb-4 py-2 pt-4 ${darkMode ? "bg-gradient-to-br from-[#334a7d] via-[#4f6aa29c] to-[#232a36]" : "bg-[#dbd7d7]"} rounded-md overflow-y-auto px-6`}>
                    <div className='w-full flex justify-end'>
                        <IoMdCloseCircleOutline size={28} onClick={close} className='cursor-pointer' />
                    </div>

                    {/* Name */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Name : </p>
                            <TiStarburst size={10} />
                        </div>
                        <input type="text" name='name' value={data.name} onChange={handleChange} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* Email */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Email : </p>
                            <TiStarburst size={10} />
                        </div>
                        <input type="email" name='email' value={data.email} onChange={handleChange} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* Resume upload */}
                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>resume (upload pdf) : </p>

                        <label htmlFor="image">
                            <input type="file" onChange={handlePhoto} name='image' hidden id='image' accept="application/pdf" />
                            <div className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-10 my-1 flex items-center justify-center cursor-pointer`}>

                                {

                                    loading ? (
                                        <div className='loader mt-4'></div>
                                    ) : (
                                        <>
                                            {
                                                data?.resume ? (
                                                    <div className='flex items-center justify-center'>
                                                        <p>uploaded</p>
                                                        <div className='text-green-600'><TiTick size={28} /></div>
                                                    </div>
                                                ) : (
                                                    <div><FiUploadCloud size={28} /></div>
                                                )
                                            }

                                        </>
                                    )
                                }

                            </div>
                        </label>

                    </div>

                    {/* Contact number */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Contact number : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" name='contact_number' value={data.contact_number} onChange={handleChange} id='contact' required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}  />
                    </div>

                    {/* About me */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>about me : </p>
                            <TiStarburst size={10} />
                        </div>

                        <textarea name="about_me" value={data.about_me} onChange={handleChange} required rows={4} cols={4} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full max-h-[50px] min-h-[50px] my-1`}></textarea>
                    </div>

                    {/* GitHub link */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>github link : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" name='github_link' value={data.github_link} onChange={handleChange} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* Linkdin link */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>linkedin link : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" name='linkedin_link' value={data.linkedin_link} onChange={handleChange} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* instragam link */}
                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>instragram link :</p>
                        <input type="text" name='instragram_link' value={data.instragram_link} onChange={handleChange} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* Facebook link */}
                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>facebook link :</p>
                        <input type="text" name='facebook_link' value={data.facebook_link} onChange={handleChange} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    <button className='p-2 w-full cursor-pointer bg-[#1857a8] hover:bg-[#2463b5] text-[#d1dcfb] mt-2 rounded font-semibold'>submit</button>

                </form>

            </div>

        </section>
    )
}

export default CreateAllDataWindow
