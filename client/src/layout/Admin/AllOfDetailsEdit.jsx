import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CreateAllDataWindow from './CreateAllDataWindow'
import bg from "../../assets/no data.png"
import { TiTick } from 'react-icons/ti'
import { FiUploadCloud } from 'react-icons/fi'
import uploadFile from '../../utils/uploadFile'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import toast from 'react-hot-toast'
import { useGlobalContext } from '../../provider/GlobalProvider'
import TickMark from '../../utils/TickMark'

const EducationDetailsEdit = () => {


    const alldata = useSelector(state => state.allofdetails)

    const [data, setData] = useState({
        name: alldata?.name,
        email: alldata?.email,
        resume: alldata?.resume,
        contact_number: alldata?.contact_number,
        about_me: alldata?.about_me,
        github_link: alldata?.github_link,
        linkedin_link: alldata?.linkedin_link,
        instragram_link: alldata?.instragram_link,
        facebook_link: alldata?.facebook_link
    })
    
    const [loading, setLoading] = useState(false)
    const { fetchAllDetails } = useGlobalContext()
    const [tick, setTick] = useState(false)

    useEffect(() => {

        setData({
            name: alldata?.name,
            email: alldata?.email,
            resume: alldata?.resume,
            contact_number: alldata?.contact_number,
            about_me: alldata?.about_me,
            github_link: alldata?.github_link,
            linkedin_link: alldata?.linkedin_link,
            instragram_link: alldata?.instragram_link,
            facebook_link: alldata?.facebook_link
        })

    }, [alldata])

    useEffect(() => {
        if (!tick) return; 
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t); 
    }, [tick]);

    const handleChange = async (e) => {

        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

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

    const handleSubmit = async (e) => {
        try {

            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.update_allOf_data,
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

            }

        } catch (error) {
            console.log(error)
        }
    }

    const [openCreateWindow, setopenCreateWindow] = useState(false)


    return (
        <section className='lg:mx-24 mx-14  mt-16 text-primary-text relative'>


            {
                !Boolean(alldata?.name) ? (
                    <>

                        <div className='flex flex-col md:pl-16  mt-28'>
                            <div>
                                <p>It's look you haven't  create all of the data ....</p>
                                <div onClick={() => setopenCreateWindow(true)} className=' my-4 rounded-full cursor-pointer px-4 py-1.5 w-fit border-3 text-terniary-dark text-base  transition duration-200 outline-none font-semibold button-shadow'>
                                    create
                                </div>
                            </div>
                        </div>

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
                    </>
                ) : (
                    <div>

                        <p className='text-2xl font-bold'>All of the details :</p>

                        <form onSubmit={handleSubmit} className='bg-[#1c1d1f] min-w-[750px] max-w-[750px] p-6 rounded mt-6 grid gap-3 mb-6'>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Name :</p>
                                <input onChange={handleChange} type="text" required name='name' value={data.name} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>email :</p>
                                <input type="email" onChange={handleChange} required name='email' value={data.email} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>resume (pdf format) :</p>

                                <label htmlFor="image">
                                    {/* <input type="text" value={data.resume} className='bg-[#353333f2] rounded outline-none w-full p-2' /> */}
                                    <div className='bg-[#353333f2] rounded outline-none w-full p-3'>
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
                                                            <div className='flex gap-3 items-center'>
                                                                <div><FiUploadCloud size={28} /></div>
                                                                <p>choose file.....</p>
                                                            </div>
                                                        )
                                                    }

                                                </>
                                            )
                                        }
                                    </div>
                                    <input type="file" id='image' onChange={handlePhoto} className='bg-[#353333f2] rounded outline-none w-full p-2 hidden' accept="application/pdf" />

                                </label>
                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Contact Number :</p>
                                <input type="text" onChange={handleChange} required name='contact_number' value={data.contact_number} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>About me :</p>
                                <textarea name="about_me" onChange={handleChange} value={data.about_me} rows={3} cols={3} className='bg-[#353333f2] scrollbar-custom rounded outline-none w-full p-2'></textarea>

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Github Link :</p>
                                <input type="text" onChange={handleChange} name='github_link' required value={data.github_link} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Linkedin Link :</p>
                                <input type="text" onChange={handleChange} required name='linkedin_link' value={data.linkedin_link} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Instragram Link :</p>
                                <input type="text" onChange={handleChange} name='instragram_link' value={data.instragram_link} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <div className='group font-semibold'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Facebook Link :</p>
                                <input type="text" onChange={handleChange} name='facebook_link' value={data.facebook_link} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            <button className='py-3 w-full bg-terniary-dark  hover:bg-[#fc4503]  text-[#d1dcfb]  mt-2 rounded  font-semibold'>

                                {
                                    tick ? (
                                        <TickMark />
                                    ) : (
                                        <p>update</p>
                                    )
                                }
                            </button>

                        </form>

                    </div>
                )
            }




            {
                openCreateWindow && (
                    <CreateAllDataWindow close={() => setopenCreateWindow(false)} />
                )

            }

        </section>
    )
}

export default EducationDetailsEdit
