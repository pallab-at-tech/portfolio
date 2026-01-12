import React, { useState } from 'react'
import { useGlobalContext } from '../../provider/GlobalProvider'
import { IoMdClose, IoMdCloseCircleOutline } from 'react-icons/io'
import { TiStarburst } from 'react-icons/ti'
import { MdDeleteForever } from "react-icons/md";
import toast from 'react-hot-toast';
import uploadFile from '../../utils/uploadFile';
import Axios from '../../utils/Axios';
import SummaryApi from '../../common/SummaryApi';

const CreateInternDataWindow = ({ close }) => {

    const { darkMode, fetchAllDetails } = useGlobalContext()

    const [internData, setInternData] = useState({
        tittle: "",
        institute: "",
        startDate: "",
        endDate: "",
        describe: [
            ""
        ],
        tech_stack: [],
        github_link: "",
        view_certificate: ""
    })

    const [imageLoading, setImageLoading] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)

    const techList = [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Redux",
        "Firebase",
        "React Native",
        "AWS",
        "Git",
        "Vite",
        "Java"
    ];

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setInternData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handlePhoto = async (e) => {

        try {
            const file = e.target.files?.[0];

            if (!file) return;

            setImageLoading(true)

            const response = await uploadFile(file)

            setImageLoading(false)

            setInternData((prev) => {
                return {
                    ...prev,
                    view_certificate: response?.secure_url
                }
            })
        } catch (error) {
            // console.log(error)
        } finally {
            // e.target.value = null;
        }
    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        if (submitLoading) return

        try {
            const payload = {
                tittle: internData.tittle,
                institute: internData.institute,
                startDate: internData.startDate.trim('') ? internData.startDate : null,
                endDate: internData.endDate.trim('') ? internData.endDate : null,
                describe: internData.describe.filter((d) => d && d.trim('')),
                tech_stack: internData.tech_stack,
                github_link: internData.github_link,
                view_certificate: internData.view_certificate
            }

            setSubmitLoading(true)

            const response = await Axios({
                ...SummaryApi.experience_create,
                data: payload
            })

            const { data: responseData } = response

            if (responseData?.success) {
                toast.success(responseData?.message)
                setInternData({
                    tittle: "",
                    institute: "",
                    startDate: "",
                    endDate: "",
                    describe: [
                        ""
                    ],
                    tech_stack: [],
                    github_link: "",
                    view_certificate: ""
                })
                fetchAllDetails()
                setSubmitLoading(false)
                close()
            }
            else {
                toast.error(responseData?.message)
                setSubmitLoading(false)
            }
        } catch (error) {
            setSubmitLoading(false)
        }
    }


    return (
        <section className={`fixed top-0 right-0 left-0 bottom-0 h-screen pt-[80px] backdrop-blur-[3px] ${darkMode ? "bg-neutral-900/70" : "bg-[#000000a9]/90"} z-50 flex items-center justify-center`}>

            <div>
                <form
                    onSubmit={(e) => handleSubmit(e)}
                    className={`grid gap-y-2 lg:min-w-md  md:min-w-[400px] min-w-[300px] h-[70vh] md:h-[80vh] scrollbar-custom  pb-4 py-2 pt-4 ${darkMode ? "bg-gradient-to-br from-[#334a7d] via-[#4f6aa29c] to-[#232a36]" : "bg-[#dbd7d7]"} rounded-md overflow-y-auto px-6`}
                >
                    <div className='w-full flex justify-end'>
                        <IoMdCloseCircleOutline size={28} onClick={close} className='cursor-pointer' />
                    </div>

                    {/* Tittle */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Title : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" onChange={handleOnChange} name='tittle' value={internData.tittle} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* institute */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Institute : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" onChange={handleOnChange} name='institute' value={internData.institute} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* startDate */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Start Date : </p>
                            <TiStarburst size={10} />
                        </div>

                        <div className='relative'>

                            <input type="date"
                                onChange={(e) => {
                                    if (internData.endDate && (new Date(internData.endDate) < new Date(e.target.value))) {
                                        toast.error("Start date can't be greater than End Date!?")
                                    }
                                    else {
                                        handleOnChange(e)
                                    }
                                }}
                                name='startDate'
                                value={internData.startDate}
                                className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}
                            />

                            <MdDeleteForever
                                onClick={() => {
                                    setInternData((prev) => {
                                        return {
                                            ...prev,
                                            startDate: ""
                                        }
                                    })
                                }}
                                size={20}
                                className={`absolute right-7 top-[9px] bottom-0 cursor-pointer transition-colors duration-200 ${!darkMode ? "text-[#5f0909]" : "text-gray-950"} hover:text-red-800`}
                            />
                        </div>
                    </div>

                    {/* endDate */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>End Date : </p>
                            <TiStarburst size={10} />
                        </div>

                        <div className='relative'>

                            <input type="date"
                                onChange={(e) => {
                                    if (internData.startDate && (new Date(internData.startDate) > new Date(e.target.value))) {
                                        toast.error("Start date can't be greater than End Date!?")
                                    }
                                    else {
                                        handleOnChange(e)
                                    }
                                }}
                                name='endDate'
                                value={internData.endDate}
                                className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}
                            />

                            <MdDeleteForever
                                onClick={() => {
                                    setInternData((prev) => {
                                        return {
                                            ...prev,
                                            endDate: ""
                                        }
                                    })
                                }}
                                size={20}
                                className={`absolute right-7 top-[9px] bottom-0 cursor-pointer transition-colors duration-200 ${!darkMode ? "text-[#5f0909]" : "text-gray-950"} hover:text-red-800`}
                            />
                        </div>
                    </div>

                    {/* describe */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Describe : </p>
                            <TiStarburst size={10} />
                        </div>

                        {
                            internData.describe.map((v, i) => (
                                <div>
                                    <h1 className={`${darkMode ? "text-[#ca8d14]" : "text-[#d0680e]"} font-semibold`}>
                                        {
                                            internData.describe.length <= 1 ? "Points" : `Point-${i + 1}`
                                        }
                                    </h1>

                                    <div className='relative'>

                                        {
                                            internData.describe.length > 1 && <MdDeleteForever
                                                size={22}
                                                className={`absolute right-0 -top-5 cursor-pointer transition-colors duration-200 ${!darkMode ? "text-[#5f0909] hover:text-red-800" : "text-gray-100 hover:text-red-600"}`}
                                                onClick={() => {
                                                    setInternData((prev) => {
                                                        return {
                                                            ...prev,
                                                            describe: prev.describe.filter((_, index) => index !== i)
                                                        }
                                                    })
                                                }}
                                            />
                                        }

                                        <textarea
                                            name=""
                                            className={`leading-[1.2]  ${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1 max-h-[60px] min-h-[60px]`}
                                            value={internData.describe[i]}
                                            onChange={(e) => {
                                                setInternData((prev) => {
                                                    const newTextArr = [...prev.describe]
                                                    newTextArr[i] = e.target.value
                                                    return {
                                                        ...prev,
                                                        describe: newTextArr
                                                    }
                                                })
                                            }}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            ))
                        }

                        <button
                            onClick={() => {
                                setInternData((prev) => {
                                    return {
                                        ...prev,
                                        describe: [...prev.describe, ""]
                                    }
                                })
                            }}
                            className={`cursor-pointer ${darkMode ? "bg-yellow-700" : "bg-red-700"} text-white px-2.5 py-0.5 rounded`}
                        >
                            Add +
                        </button>
                    </div>

                    {/* tech_stack */}
                    <div>

                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Tech Stack : </p>
                        </div>

                        <select
                            className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} text-primary-dark outline-none p-1 rounded`}
                            onChange={(e) => {
                                const value = e.target.value

                                setInternData((prev) => {
                                    return {
                                        ...prev,
                                        tech_stack: [...prev.tech_stack, value]

                                    }
                                })
                            }}
                        >
                            <option value="" disabled>Select tech</option>

                            {
                                techList.map((v, i) => {
                                    return (
                                        <option value={v}>{v}</option>
                                    )
                                })
                            }

                        </select>

                        <div className='flex gap-1.5 flex-wrap my-2 rounded'>
                            {
                                internData.tech_stack.map((v, i) => (
                                    <div
                                        key={`tech-${i}`} className='text-sm bg-[#ada3a3] rounded-2xl text-black p-1 flex items-center justify-between'
                                    >
                                        <p>{v}</p>
                                        <div className='text-red-600 cursor-pointer'
                                            onClick={(e) => {

                                                setInternData((prev) => {
                                                    return {
                                                        ...prev,
                                                        tech_stack: prev.tech_stack.filter((_, idx) => i !== idx)
                                                    }
                                                })

                                            }}>
                                            <IoMdClose size={20} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    {/* github_link */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Github link : </p>
                        </div>

                        <input type="text" onChange={handleOnChange} name='github_link' value={internData.github_link} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {/* view_certificate */}
                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Certificate : </p>
                        </div>

                        <div className='w-fit'>
                            <label htmlFor="certificate" >
                                <input type="file" onChange={(e) => handlePhoto(e)} accept='image/*' id='certificate' className='hidden' />
                                <div className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} cursor-pointer w-fit flex items-center justify-center px-3 py-2 border outline-none focus-within:border-primary-100 rounded h-8 my-1`}>
                                    {
                                        internData.view_certificate ? (
                                            imageLoading ? <span>Uploading</span> : <span>Uploaded ✔</span>
                                        ) : (
                                            imageLoading ? <span>Uploading</span> : <span>Upload</span>
                                        )
                                    }
                                </div>
                            </label>
                        </div>
                    </div>

                    <button
                        disabled={submitLoading}
                        className={`p-2 w-full bg-[#2c6abc]  hover:bg-[#2463b5] text-[#d1dcfb] mt-2 rounded  font-semibold cursor-pointer`}
                    >
                        {submitLoading ? "Submiting" : "Submit"}
                    </button>

                </form>
            </div>
        </section>
    )
}

export default CreateInternDataWindow
