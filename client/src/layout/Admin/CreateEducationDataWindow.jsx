import React, { useEffect, useState } from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { TiStarburst } from 'react-icons/ti'
import { useSelector } from 'react-redux'
import TickMark from '../../utils/TickMark'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import { useGlobalContext } from '../../provider/GlobalProvider'
import toast from 'react-hot-toast'


const CreateEducationDataWindow = ({ close }) => {

    const alldata = useSelector(state => state.allofdetails)
    const { fetchAllDetails } = useGlobalContext()

    const emptyQualification = {
        level: "",
        stream: "",
        startDate: "",
        endDate: "",
        typeOfScore: "",
        score: ""
    };

    const [data, setData] = useState({
        institute_name: "",
        location: "",
        qualification: [emptyQualification]
    })

    const [tick, setTick] = useState(false)

    useEffect(() => {
        if (!tick) return;
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t);
    }, [tick]);


    const handleOnChange = async (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleOnchangeQualification = async (index, e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                qualification: preve.qualification.map((val, idx) => {
                    return idx === index ? { ...val, [name]: value } : val;
                })
            }
        })
    }

    const handleAddQualification = () => {
        setData((preve) => {
            return {
                ...preve,
                qualification: [...preve.qualification, emptyQualification]
            }
        })
    }

    const handleRemoveQualification = (index) => {

        setData((preve)=>{
            return {
                ...preve,
                qualification: preve?.qualification?.filter((_, i) => i !== index)
            }
        })
    }


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.create_education_data,
                data: data
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {

                setTick(true)


                toast.success(responseData?.message)
                fetchAllDetails()
                close()

            }
        } catch (error) {

            // console.log(error)
        }


    }

    const { darkMode, setDarkMode } = useGlobalContext()


    return (
        <section className={`fixed top-0 right-0 left-0 bottom-0 min-h-screen ${darkMode ? "bg-neutral-900/70" : "bg-[#000000a9]/90"} z-50 flex items-center justify-center`}>

            <div>

                <form onSubmit={handleSubmit} className={`grid gap-y-2 lg:min-w-md md:max-h-[620px] md:min-h-[620px]  md:min-w-[400px] min-w-[300px] max-h-[450px] min-h-[450px]   scrollbar-custom pl-6 pb-4 py-2 pt-4 ${darkMode ? "bg-gradient-to-br from-[#43547a] to-[#232a36]" : "bg-[#dbd7d7]"} rounded overflow-y-auto  px-10`}>

                    <div className='w-full flex justify-end'>
                        <IoMdCloseCircleOutline size={28} onClick={close} className='cursor-pointer' />
                    </div>

                    <div>
                        <div className='flex gap-1 text-red-700'>
                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Institute name : </p>
                            <TiStarburst size={10} />
                        </div>

                        <input type="text" onChange={handleOnChange} name='institute_name' value={data.institute_name} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    <div>
                        <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>location :</p>
                        <input type="text" onChange={handleOnChange} name='location' value={data.location} className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                    </div>

                    {
                        data?.qualification?.map((val, idx) => {


                            return (
                                <div className='grid gap-y-3'>

                                    <h4 className={`font-bold text-xl my-2 underline ${darkMode ? "text-[#dfc29e]" : "text-[#deb17b]"}`}>Qualification {`${data.qualification.length > 1 ? idx + 1 : ""}`}</h4>

                                    <div>

                                        <div className='flex gap-1 text-red-700'>
                                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Education field : </p>
                                            <TiStarburst size={10} />
                                        </div>

                                        <input type="text" onChange={(e) => handleOnchangeQualification(idx, e)} name='level' value={val.level} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                                    </div>


                                    <div>

                                        <div className='flex gap-1 text-red-700'>
                                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>stream : </p>
                                            <TiStarburst size={10} />
                                        </div>

                                        <input type="text" onChange={(e) => handleOnchangeQualification(idx, e)} name='stream' value={val.stream} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                                    </div>

                                    <div>

                                        <div className='flex gap-1 text-red-700'>
                                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Start Date  ("ex..Jan 2022"): </p>
                                            <TiStarburst size={10} />
                                        </div>

                                        <input type="text" onChange={(e) => handleOnchangeQualification(idx, e)} name='startDate' value={val.startDate} required
                                            pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                                            title="Enter a valid date in format: Jan 2022"
                                            className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}
                                        />
                                    </div>

                                    <div>

                                        <div className='flex gap-1 text-red-700'>
                                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>End Date ("ex..Feb 2022") : </p>
                                            <TiStarburst size={10} />
                                        </div>

                                        <input onChange={(e) => handleOnchangeQualification(idx, e)} type="text" name='endDate' value={val.endDate} required
                                            pattern="^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{4}$"
                                            title="Enter a valid date in format: Jan 2022"
                                            className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`}
                                        />
                                    </div>

                                    <div>

                                        <p>Select either one :</p>

                                        <input type="radio" onChange={(e) => handleOnchangeQualification(idx, e)} id='CGPA' name='typeOfScore' value={"CGPA"} />
                                        <label htmlFor="CGPA" className='mr-6'>CGPA</label>

                                        <input type="radio" onChange={(e) => handleOnchangeQualification(idx, e)} id='PERCENTAGE' name='typeOfScore' value={"PERCENTAGE"} />
                                        <label htmlFor="PERCENTAGE">PERCENTAGE</label>


                                    </div>

                                    <div>

                                        <div className='flex gap-1 text-red-700'>
                                            <p className={`${darkMode ? "text-primary-text" : "text-[#020826]"}`}>Score : </p>
                                            <TiStarburst size={10} />
                                        </div>

                                        <input type="text" onChange={(e) => handleOnchangeQualification(idx, e)} name='score' value={val.score} required className={`${darkMode ? "bg-[#b2b8de] text-primary-dark" : "bg-[#705c34a9]"} p-2 border outline-none focus-within:border-primary-100 rounded w-full h-8 my-1`} />
                                    </div>


                                </div>
                            )
                        })
                    }

                    <div className={`flex md:flex-row flex-col  mt-2 ${data.qualification.length > 1 && "justify-between"}`}>

                        <div onClick={handleAddQualification} className='my-1 rounded cursor-pointer px-8 py-1.5 w-fit  bg-terniary-dark text-white text-base outline-none font-semibold'>+Add field</div>

                        {
                            data.qualification.length > 1 && (
                                <div onClick={() => handleRemoveQualification(data?.qualification?.length - 1)} className='my-1 rounded cursor-pointer px-4 py-1.5 w-fit  bg-[#029f37] text-white text-base outline-none font-semibold'>-Remove field</div>
                            )
                        }

                    </div>


                    <button className='p-2 w-full bg-[#2c6abc]  hover:bg-[#2463b5]  text-[#d1dcfb]  mt-2 rounded  font-semibold'>
                        {
                            tick ? (
                                <TickMark />
                            ) : (
                                <p>submit</p>
                            )
                        }
                    </button>

                </form>

            </div>

        </section>
    )
}

export default CreateEducationDataWindow
