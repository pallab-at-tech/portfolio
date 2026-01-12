import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../provider/GlobalProvider'
import { useSelector } from 'react-redux'
import bg from "../../assets/no data.png"
import CreateInternDataWindow from './CreateInternDataWindow'
import { FaArrowAltCircleLeft, FaRegArrowAltCircleRight, FaEye } from 'react-icons/fa'
import { TiStarburst } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { MdDelete, MdDeleteForever } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import uploadFile from '../../utils/uploadFile'
import TickMark from '../../utils/TickMark'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import ConfirmationBox from '../../utils/ConfirmationBox'


const InternshipDetailsEdit = () => {

    const alldata = useSelector(state => state.allofdetails)
    const { darkMode, fetchAllDetails } = useGlobalContext()

    const [internData, setInternData] = useState({
        experienceId: "",
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

    const [index, setIndex] = useState(0)
    const total = alldata?.all_experience?.length;

    const [openCreateWindow, setopenCreateWindow] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)
    const [viewCertificate, setViewCertificate] = useState(false)
    const [tick, setTick] = useState(false)
    const [submitLoading, setSubmitLoading] = useState(false)

    const [confirmation, setConfirmation] = useState({
        confirm: false,
        closeWindow: false
    })

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

    // internData initiate
    useEffect(() => {
        if (!alldata?.all_experience || !Array.isArray(alldata?.all_experience) || alldata?.all_experience?.length === 0) return

        const arr = alldata?.all_experience[0]

        setInternData(() => {
            return {
                tittle: arr?.tittle,
                institute: arr?.institute,
                startDate: arr?.startDate ? new Date(arr?.startDate) : "",
                endDate: arr?.endDate ? new Date(arr?.endDate) : "",
                describe: (arr?.describe && Array.isArray(arr?.describe) && arr?.describe?.length > 0) ? arr?.describe : [""],
                tech_stack: arr?.tech_stack,
                github_link: arr?.github_link,
                view_certificate: arr?.view_certificate
            }
        })
    }, [])

    // tick animation
    useEffect(() => {
        if (!tick) return;
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t);
    }, [tick]);

    // Set index
    useEffect(() => {

        if (total === 0) return;
        const arr = alldata?.all_experience[index]

        setInternData(() => {
            return {
                tittle: arr?.tittle,
                institute: arr?.institute,
                startDate: arr?.startDate ? new Date(arr?.startDate) : "",
                endDate: arr?.endDate ? new Date(arr?.endDate) : "",
                describe: (arr?.describe && Array.isArray(arr?.describe) && arr?.describe?.length > 0) ? arr?.describe : [""],
                tech_stack: arr?.tech_stack,
                github_link: arr?.github_link,
                view_certificate: arr?.view_certificate,
                experienceId: arr?._id
            }
        })

    }, [index, total])

    const handleUpdate = async (e) => {

        e.preventDefault()
        if (submitLoading) return

        try {
            setSubmitLoading(true)

            const payload = {
                tittle: internData.tittle,
                institute: internData.institute,
                startDate: internData.startDate.trim('') ? internData.startDate : null,
                endDate: internData.endDate.trim('') ? internData.endDate : null,
                describe: internData.describe.filter((d) => d && d.trim('')),
                tech_stack: internData.tech_stack,
                github_link: internData.github_link,
                view_certificate: internData.view_certificate,
                experienceId: internData?.experienceId
            }

            const response = await Axios({
                ...SummaryApi.experience_update,
                data: payload
            })

            const { data: responseData } = response

            if (responseData?.success) {
                await fetchAllDetails()
                toast.success(responseData?.message)
                setTick(true)
            }

            setSubmitLoading(false)

        } catch (error) {
            toast.error(error?.response?.data?.message)
            setSubmitLoading(false)
        }
    }

    const handleDelete = async () => {
        try {
            const response = await Axios({
                ...SummaryApi.experience_delete,
                data: {
                    experienceId: internData.experienceId
                }
            })

            const { data: responseData } = response

            if (responseData?.success) {
                toast.success(responseData?.message)
                await fetchAllDetails()
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
            setSubmitLoading(false)
        }
    }

    // Delete experienece
    useEffect(()=>{
        if(confirmation.confirm){
            handleDelete()

            setConfirmation((preve) => {
                return {
                    ...preve,
                    confirm: false
                }
            })
        }
    },[confirmation.confirm])

    return (
        <section className={`h-[calc(100vh-72px)] overflow-y-auto hide-scrollbar sm:px-8 lg:px-14 mx-6 sm:mx-8 lg:pt-16 pt-10 ${darkMode ? "text-primary-text" : "text-[#020826]"}`}>

            <div className='flex flex-col mb-6'>
                <div>
                    {
                        alldata?.all_experience?.length === 0 ? (
                            <p>It's look you haven't create education data ....</p>
                        ) : (
                            <p>Create new Data . . . . . . . .</p>
                        )
                    }

                    <div onClick={() => setopenCreateWindow(true)} className={`my-4 rounded-full cursor-pointer px-4 py-1.5 w-fit border-3 ${darkMode ? "text-terniary-dark button-shadow border-terniary-dark" : "text-[#7b450b] hover:bg-[#6b3c0a] hover:text-amber-50 hover:border-[#6b3c0a]"} text-base  transition duration-200 outline-none font-semibold`}>
                        create
                    </div>
                </div>
            </div>


            {
                alldata?.all_experience?.length === 0 && (
                    <div>
                        <div className='opacity-60' style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: '280px',
                            backgroundPosition: 'center',
                            height: '300px',
                            backgroundRepeat: "no-repeat"
                        }} >

                        </div>

                        <p className='text-center -mt-6'>no data found yet !</p>

                    </div>
                )
            }

            {
                alldata?.all_experience?.length > 0 && (
                    <div>
                        <div className='flex md:flex-row flex-col md:justify-between md:items-center justify-start items-start gap-2 lg:min-w-[750px] lg:max-w-[750px]'>

                            <p className='text-2xl font-bold'>Experience Details :</p>

                            <div className='flex gap-3 items-center justify-end '>
                                <div onClick={() => {
                                    if (index === 0) {
                                        setIndex(total - 1)
                                    }
                                    else {
                                        setIndex(index - 1)
                                    }
                                }}><FaArrowAltCircleLeft size={32} className='cursor-pointer' /></div>

                                <p>{(index + 1) % (total + 1)} / {(total + 1) - 1}</p>

                                <div onClick={() => setIndex((index + 1) % total)} className='cursor-pointer'><FaRegArrowAltCircleRight size={32} /></div>
                            </div>

                        </div>

                        <form onSubmit={(e) => handleUpdate(e)} className={`${darkMode ? "bg-[#1c1d1f]" : "bg-[#705c34a9]"} lg:min-w-[750px] lg:max-w-[750px] md:min-h-[500px] md:max-h-[800px] min-h-[500px]  max-h-[500px] scrollbar-custom overflow-y-auto p-6 rounded mt-6 grid gap-3 mb-4`}>

                            {/* Title */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Title :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} required name='tittle' value={internData.tittle} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                            </div>

                            {/* institute */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Institute :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} required name='institute' value={internData.institute} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                            </div>

                            {/* start date */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Start Date :</p>
                                </div>
                                <input
                                    type="date"
                                    name='startDate'
                                    onChange={(e) => {
                                        if (internData.endDate && (new Date(internData.endDate) < new Date(e.target.value))) {
                                            toast.error("Start date can't be greater than End Date!?")
                                        }
                                        else {
                                            handleOnChange(e)
                                        }
                                    }}
                                    value={internData.startDate}
                                    className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`}
                                />

                            </div>

                            {/* end date */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>End Date :</p>
                                </div>
                                <input
                                    type="date"
                                    name='endDate'
                                    onChange={(e) => {
                                        if (internData.startDate && (new Date(internData.startDate) > new Date(e.target.value))) {
                                            toast.error("Start date can't be greater than End Date!?")
                                        }
                                        else {
                                            handleOnChange(e)
                                        }
                                    }}
                                    value={internData.endDate}
                                    className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`}
                                />

                            </div>

                            {/* describe */}
                            <div className='group font-semibold'>
                                <div className='flex gap-1 text-red-700'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Describe : </p>
                                    <TiStarburst size={10} />
                                </div>

                                {
                                    internData.describe && internData.describe.map((v, i) => (
                                        <div>
                                            <h1 className={`${darkMode ? "text-[#ca8d14]" : "text-[#603006]"} font-semibold`}>
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
                                                    className={`leading-[1.2]  ${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1 max-h-[60px] min-h-[60px]`}
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

                                <div
                                    onClick={() => {
                                        setInternData((prev) => {
                                            return {
                                                ...prev,
                                                describe: [...prev.describe, ""]
                                            }
                                        })
                                    }}
                                    className={`w-fit cursor-pointer ${darkMode ? "bg-yellow-700" : "bg-red-700"} text-white px-2.5 py-0.5 rounded`}
                                >
                                    Add +
                                </div>
                            </div>

                            {/* tech_stack */}
                            <div className='group font-semibold'>

                                <div className='flex gap-1 text-red-700'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Tech Stack : </p>
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
                                       techList &&  techList.map((v, i) => {
                                            return (
                                                <option value={v}>{v}</option>
                                            )
                                        })
                                    }

                                </select>

                                <div className='flex gap-1.5 flex-wrap my-2 rounded'>
                                    {
                                        internData.tech_stack && internData.tech_stack.map((v, i) => (
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
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Github Link :</p>
                                </div>
                                <input type="text" onChange={handleOnChange} name='github_link' value={internData.github_link} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                            </div>

                            {/* view_certificate */}
                            <div className='group font-semibold'>
                                <div className='flex gap-1 text-red-700'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Certificate : </p>
                                </div>

                                <div className='w-fit flex items-center gap-2'>
                                    <label htmlFor="certificate" >
                                        <input type="file" onChange={(e) => handlePhoto(e)} accept='image/*' id='certificate' className='hidden' />
                                        <div className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} cursor-pointer w-fit flex items-center justify-center px-3 py-2 border outline-none focus-within:border-primary-100 rounded h-8 my-1`}>
                                            {
                                                internData.view_certificate ? (
                                                    imageLoading ? <span>Uploading</span> : <div> <span>Uploaded ✔</span> </div>
                                                ) : (
                                                    imageLoading ? <span>Uploading</span> : <span>Upload</span>
                                                )
                                            }
                                        </div>
                                    </label>
                                    {
                                        internData.view_certificate && (
                                            <FaEye size={20} onClick={() => setViewCertificate(true)} className={`${darkMode ? "text-blue-200" : "text-red-800"} cursor-pointer`} />
                                        )
                                    }
                                </div>
                            </div>

                            <button disabled={submitLoading} className={`py-3 w-full ${submitLoading ? "cursor-not-allowed" : " cursor-pointer"} ${darkMode ? "bg-terniary-dark  hover:bg-[#fc4503]  text-[#d1dcfb]" : "text-[#d1dcfb] bg-[#5d3509]  hover:bg-[#542f08]"}  mt-2 rounded-md  font-semibold`}>
                                {
                                    tick ? (
                                        <TickMark />
                                    ) : (
                                        <p>{submitLoading ? "Updating" : "Update"}</p>
                                    )
                                }
                            </button>

                        </form>

                        <div className='flex items-center gap-1 mb-6 cursor-pointer pt-2'
                            onClick={() => {
                                if(confirmation.confirm) return

                                setConfirmation((prev) => {
                                    return {
                                        ...prev,
                                        closeWindow: true
                                    }
                                })
                            }}>
                            <p className={`text-base font-semibold ${darkMode ? "text-[#d1c6c1]" : "text-[#020826]"} underline `}>Delete above details ?</p>
                            <div className='text-red-800'><MdDelete size={20} /></div>
                        </div>
                    </div>
                )
            }

            {
                openCreateWindow && (
                    <CreateInternDataWindow close={() => setopenCreateWindow(false)} />
                )
            }

            {
                confirmation.closeWindow && (
                    <ConfirmationBox confirmation={confirmation} setConfirmation={setConfirmation} />
                )
            }

            {
                viewCertificate && (
                    <section className='fixed h-screen flex items-center justify-center inset-0 backdrop-blur-[3px]'>

                        <div className='relative'>
                            <img src={internData.view_certificate} alt="" className='h-[50vh] object-contain' />
                            <IoMdClose size={30} onClick={() => setViewCertificate(false)} className={`absolute -top-8 -right-4 cursor-pointer transition-colors duration-150 ${darkMode ? "text-white hover:text-blue-50" : "text-red-700 hover:text-red-800"}`} />
                        </div>

                    </section>
                )
            }

        </section>
    )
}

export default InternshipDetailsEdit
