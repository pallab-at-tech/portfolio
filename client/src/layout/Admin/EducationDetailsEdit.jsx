import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import bg from "../../assets/no data.png"
import { TiStarburst, TiTick } from 'react-icons/ti'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import toast from 'react-hot-toast'
import { useGlobalContext } from '../../provider/GlobalProvider'
import TickMark from '../../utils/TickMark'
import CreateEducationDataWindow from './CreateEducationDataWindow'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ConfirmationBox from '../../utils/ConfirmationBox'

const EducationDetailsEdit = () => {

    const alldata = useSelector(state => state.allofdetails)
    const { fetchAllDetails } = useGlobalContext()

    const [openCreateWindow, setopenCreateWindow] = useState(false)

    const [index, setIndex] = useState(0)
    const educationArr = alldata?.all_education || [];
    const total = educationArr?.length;

    const [confirmation, setConfirmation] = useState({
        confirm: false,
        closeWindow: false
    })

    const emptyQualification = {
        level: "",
        stream: "",
        startDate: "",
        endDate: "",
        typeOfScore: "",
        score: ""
    };

    const makeEditable = (item) => (
        {
            _id: item?._id,
            institute_name: item?.institute_name || "",
            location: item?.location || "",
            qualification: [...(item?.qualification || [])]
        }
    );

    const [data, setData] = useState(() => makeEditable(educationArr[0]))


    useEffect(() => {

        if (total === 0) return;
        setData(makeEditable(educationArr[index]));

    }, [index, total])


    const [tick, setTick] = useState(false)

    useEffect(() => {
        if (!tick) return;
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t);
    }, [tick]);


    const handleOnChange = (e) => {

        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleOnQualification = (index, e) => {

        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                qualification: preve.qualification.map((v, i) => {
                    return i === index ? { ...v, [name]: value } : v
                })
            }
        })

    }

    const handleAddMore = () => {
        setData((preve) => {
            return {
                ...preve,
                qualification: [...preve.qualification, emptyQualification]
            }
        })
    }

    const handleRemove = (indexOf) => {
        setData((preve) => {
            return {
                ...preve,
                qualification: preve?.qualification?.filter((_, i) => i !== indexOf)
            }
        })
    }

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.update_education_data,
                data: {
                    educationId: data?._id,
                    institute_name: data?.institute_name,
                    location: data?.location,
                    qualification: data?.qualification
                }
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {

                setTick(true)
                toast.success(responseData?.message)
                fetchAllDetails()
            }


        } catch (error) {
            // console.log(error)
        }


    }

    const handleDelete = async () => {

        try {

            const response = await Axios({
                ...SummaryApi.delete_education_data,
                data: {
                    educationId: data?._id
                }
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {
                toast.success(responseData?.message)
                fetchAllDetails()
            }

        } catch (error) {
            // console.log(error)
        }
    }


    useEffect(() => {

        if (confirmation.confirm) {
            handleDelete()

            setConfirmation((preve) => {
                return {
                    ...preve,
                    confirm: false
                }
            })
        }

    }, [confirmation.confirm])

    const { darkMode, setDarkMode } = useGlobalContext()

    

    return (
        <section className={`lg:mx-24 md:mx-14 mx-8 lg:mt-16 mt-10 ${darkMode ? "text-primary-text" : "text-[#020826]"}`}>


            <div className='flex flex-col mb-6'>
                <div>
                    {
                        alldata?.all_education?.length === 0 ? (
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
                alldata?.all_education?.length === 0 && (
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
                alldata?.all_education?.length > 0 && (
                    <div>

                        <div className='flex md:flex-row flex-col md:justify-between md:items-center justify-start items-start gap-2 lg:min-w-[750px] lg:max-w-[750px]'>

                            <p className='text-2xl font-bold'>Education Details :</p>

                            <div className='flex gap-3 items-center justify-end '>
                                <div onClick={() => {
                                    if (index === 0) {
                                        setIndex(total - 1)
                                    }
                                    else {
                                        setIndex(index - 1)
                                    }
                                }}><FaArrowAltCircleLeft size={32} className='cursor-pointer'/></div>

                                <p>{index % total} / {total - 1}</p>

                                <div onClick={() => setIndex((index + 1) % total)} className='cursor-pointer'><FaArrowAltCircleRight size={32} /></div>
                            </div>

                        </div>


                        <form onSubmit={handleOnSubmit} className={`${darkMode ? "bg-[#1c1d1f]" : "bg-[#705c34a9]"} lg:min-w-[750px] lg:max-w-[750px] md:min-h-[500px] md:max-h-[800px] min-h-[500px]  max-h-[500px] scrollbar-custom overflow-y-auto p-6 rounded mt-6 grid gap-3 mb-4`}>

                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Institute Name :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} required name='institute_name' value={data.institute_name} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                            </div>

                            <div className='group font-semibold'>

                                <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Location :</p>
                                <input type="text" onChange={handleOnChange} name='location' value={data.location} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                            </div>

                            {
                                data.qualification.map((val, idx) => {

                                    return (
                                        <div className='grid gap-y-3'>

                                            <h4 className={`font-bold text-xl my-2 underline ${darkMode ? "text-[#dfc29e]" : "text-[#543717]"} `}>Qualification {`${data.qualification.length > 1 ? idx + 1 : ""}`}</h4>

                                            <div className='group font-semibold'>

                                                <div className='flex'>
                                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Education field :</p>
                                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                                </div>

                                                <input type="text" onChange={(e) => handleOnQualification(idx, e)} name='level' value={val?.level} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                                            </div>


                                            <div className='group font-semibold'>

                                                <div className='flex'>
                                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Stream :</p>
                                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                                </div>

                                                <input type="text" onChange={(e) => handleOnQualification(idx, e)} name='stream' value={val?.stream} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                                            </div>


                                            <div className='group font-semibold'>

                                                <div className='flex'>
                                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Start Date  ("ex..Jan 2022"):</p>
                                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                                </div>

                                                <input type="text" onChange={(e) => handleOnQualification(idx, e)} name='startDate'
                                                    pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                                                    title="Enter a valid date in format: Jan 2022"
                                                    value={val?.startDate} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`}
                                                />

                                            </div>

                                            <div className='group font-semibold'>

                                                <div className='flex'>
                                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>End Date  ("ex..Jan 2022"):</p>
                                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                                </div>

                                                <input type="text" onChange={(e) => handleOnQualification(idx, e)} name='endDate'
                                                    pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                                                    title="Enter a valid date in format: Jan 2022"
                                                    value={val?.endDate} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`}
                                                />

                                            </div>


                                            <div className='group font-semibold'>

                                                <p className={`pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Select either one :</p>

                                                <input
                                                    type="radio"
                                                    id={`cgpa-${idx}`}
                                                    name={`typeOfScore-${idx}`}
                                                    value="CGPA"
                                                    checked={val.typeOfScore === 'CGPA'}
                                                    onChange={(e) =>
                                                        handleOnQualification(idx, {
                                                            target: { name: 'typeOfScore', value: 'CGPA' },
                                                        })
                                                    }
                                                    
                                                />
                                                <label htmlFor={`cgpa-${idx}`} className={`mr-6 ${!darkMode && "text-[#442d13]"}`}>CGPA</label>

                                                <input
                                                    type="radio"
                                                    id={`percentage-${idx}`}
                                                    name={`typeOfScore-${idx}`}
                                                    value="PERCENTAGE"
                                                    checked={val.typeOfScore === 'PERCENTAGE'}
                                                    onChange={(e) =>
                                                        handleOnQualification(idx, {
                                                            target: { name: 'typeOfScore', value: 'PERCENTAGE' },
                                                        })
                                                    }
                                                    
                                                />
                                                <label htmlFor={`percentage-${idx}`} className={`${!darkMode && "text-[#442d13]"}`}>PERCENTAGE</label>

                                            </div>

                                            <div className='group font-semibold'>

                                                <div className='flex'>
                                                    <p className={`group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 ${darkMode ? "text-[#f2980a]" : "text-[#020826]"} text-lg`}>Score :</p>
                                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                                </div>
                                                <input type="text" onChange={(e) => handleOnQualification(idx, e)} required name='score' value={val?.score} className={`${darkMode ? "bg-[#353333f2]" : "bg-[#ded7d7]"} rounded outline-none w-full p-2`} />

                                            </div>


                                        </div>
                                    )

                                })
                            }

                            <div className={`flex md:flex-row flex-col  mt-2 ${data.qualification.length > 1 && "justify-between"}`}>

                                <div onClick={handleAddMore} className={`my-1 rounded cursor-pointer px-8 py-1.5 w-fit  ${darkMode ? "bg-terniary-dark text-white" : "text-white bg-[#bb1b1b]"} text-base outline-none font-semibold`}>+Add field</div>

                                {
                                    data.qualification.length > 1 && (
                                        <div onClick={() => handleRemove(data?.qualification?.length - 1)} className='my-1 rounded cursor-pointer px-4 py-1.5 w-fit  bg-[#029f37] text-white text-base outline-none font-semibold'>-Remove field</div>
                                    )
                                }

                            </div>


                            <button className={`py-3 w-full ${darkMode ? "bg-terniary-dark  hover:bg-[#fc4503]  text-[#d1dcfb]" : "text-[#d1dcfb] bg-[#5d3509]  hover:bg-[#542f08]"}  mt-2 rounded  font-semibold`}>
                                {
                                    tick ? (
                                        <TickMark />
                                    ) : (
                                        <p>update</p>
                                    )
                                }
                            </button>

                        </form>

                        <div className='flex items-center gap-1 mb-6 cursor-pointer pt-2'
                            onClick={() => {
                                setConfirmation((prev) => {
                                    return {
                                        ...prev,
                                        closeWindow: true
                                    }
                                })
                            }}>
                            <p className={`text-base font-semibold ${darkMode ? "text-[#d1c6c1]" : "text-[#020826]"} underline`}>Delete above details ?</p>
                            <div className='text-red-800'><MdDelete size={24} /></div>
                        </div>

                    </div>
                )
            }





            {
                confirmation.closeWindow && (
                    <ConfirmationBox confirmation={confirmation} setConfirmation={setConfirmation} />
                )
            }



            {
                openCreateWindow && (
                    <CreateEducationDataWindow close={() => setopenCreateWindow(false)} />
                )

            }

        </section >
    )
}

export default EducationDetailsEdit
