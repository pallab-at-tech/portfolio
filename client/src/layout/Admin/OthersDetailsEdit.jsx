import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import bg from "../../assets/no data.png"
import { TiStarburst, TiTick } from 'react-icons/ti'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import toast from 'react-hot-toast'
import { useGlobalContext } from '../../provider/GlobalProvider'
import TickMark from '../../utils/TickMark'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdClose } from 'react-icons/io'
import { FiUploadCloud } from 'react-icons/fi'
import uploadFile from '../../utils/uploadFile'
import ConfirmationBox from '../../utils/ConfirmationBox'
import CreateOtherWindow from './CreateOtherWindow'
import { useDispatch } from 'react-redux';
import { OthersDetails } from '../../store/otherSlice'
import { useRef } from 'react'


const OthersDetailsEdit = () => {

    const alldata = useSelector(state => state.allofdetails)
    const otherData = useSelector(state => state.other)
    const dispatch = useDispatch()
    const imageRef = useRef();

    const [pagination, setPagination] = useState({
        limit: 1,
        page: 1,
        totalNoOfPage: otherData?.totalNoOfPage
    })
    const [tick, setTick] = useState(false)
    useEffect(() => {
        if (!tick) return;
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t);
    }, [tick]);





    const fetchOtherData = async () => {

        try {
            const response = await Axios({
                ...SummaryApi.get_Certificate_details,
                data: {
                    page: pagination.page,
                    limit: pagination.limit
                }
            })

            const { data: responseData } = response

            if (responseData?.success) {
                dispatch(OthersDetails(responseData))

                setPagination((prev) => ({
                    ...prev,
                    totalNoOfPage: responseData.totalNoOfPage
                }))
            }



            console.log("response from other", responseData)
        } catch (error) {
            console.log(error)
        }
    }

    const [imageLoading, setImageLoading] = useState(false)



    const [data, setData] = useState({
        _id: otherData?.data[0]?._id || "",
        tittle: otherData?.data[0]?.tittle || "",
        image: otherData?.data[0]?.image || "",
        describe: otherData?.data[0]?.describe || ""
    })

    console.log("ise.,jkh", data)

    useEffect(() => {
        fetchOtherData()

    }, [pagination.limit, pagination.page])



    useEffect(() => {

        setData({
            _id: otherData?.data[0]?._id || "",
            tittle: otherData?.data[0]?.tittle || "",
            image: otherData?.data[0]?.image || "",
            describe: otherData?.data[0]?.describe || ""
        })

        setPagination((preve) => {
            return {
                ...preve,
                totalNoOfPage: otherData?.totalNoOfPage
            }
        })
    }, [fetchOtherData, pagination.limit, pagination.page])






    console.log("otherData from...", otherData.data)

    const { fetchAllDetails } = useGlobalContext()
    const [openCreateWindow, setopenCreateWindow] = useState(false)


    return (
        <section className='lg:mx-24 md:mx-14 mx-8 lg:mt-16 mt-10 text-primary-text'>

            <div className='flex flex-col mb-6'>

                <div>
                    {
                        alldata?.all_certificate?.length === 0 ? (
                            <p>It's look you haven't create education data ....</p>
                        ) : (
                            <p>Create new Data . . . . . . . .</p>
                        )
                    }

                    <div onClick={() => setopenCreateWindow(true)} className=' my-4 rounded-full cursor-pointer px-4 py-1.5 w-fit border-3 text-terniary-dark text-base  transition duration-200 outline-none font-semibold button-shadow'>
                        create
                    </div>
                </div>

            </div>


            {
                alldata?.all_certificate?.length === 0 && (
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
                alldata?.all_certificate?.length > 0 && (
                    <div>

                        <div className='flex md:flex-row flex-col md:justify-between md:items-center justify-start items-start gap-2 lg:min-w-[750px] lg:max-w-[750px]'>

                            <p className='text-2xl font-bold'>Others Details :</p>

                            <div className='flex gap-3 items-center justify-end '>

                                <div className={pagination.page === 1 ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} onClick={() => {
                                    setPagination((preve) => {
                                        return {
                                            ...preve,
                                            page: preve.page == 1 ? 1 : preve.page - 1
                                        }
                                    })
                                }}>
                                    <FaArrowAltCircleLeft size={32} />
                                </div>

                                <p>{`${pagination.page}/${pagination.totalNoOfPage}`}</p>

                                <div className={pagination.page === pagination.totalNoOfPage ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} onClick={() => {
                                    setPagination((preve) => {
                                        return {
                                            ...preve,
                                            page: preve.page == preve.totalNoOfPage ? preve.totalNoOfPage : preve.page + 1
                                        }
                                    })
                                }}>
                                    <FaArrowAltCircleRight size={32} />
                                </div>

                            </div>

                        </div>

                        <form className='bg-[#1c1d1f] lg:min-w-[750px] lg:max-w-[750px] md:min-h-[500px] md:max-h-[800px] min-h-[500px]  max-h-[500px] scrollbar-custom overflow-y-auto p-6 rounded mt-6 grid gap-3 mb-4'>

                            {/* tittle */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Title :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" required name='tittle' value={data.tittle} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            {/* image */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Certificate :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <input type="file" ref={imageRef} hidden name='image' id='cover_image' accept="image/*" />
                                <div onClick={() => imageRef.current?.click()} className='bg-[#b2b8de] text-primary-dark p-2 border outline-none focus-within:border-primary-100 rounded w-full h-10 my-1 flex items-center justify-center cursor-pointer'>
                                    {
                                        imageLoading ? (
                                            <div className='loader mt-4'></div>
                                        ) : (
                                            <>
                                                {
                                                    data.image ? (
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

                                <div className='mt-1'>
                                    <img src={data.image} alt="" className='max-h-16' />
                                </div>


                            </div>

                            {/* description */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Description :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <textarea required name='tittle' rows={4} cols={4} value={data.describe} className='bg-[#353333f2] rounded outline-none w-full p-2 max-h-[120px] min-h-[110px]'></textarea>
                            </div>

                            <button className='py-3 w-full bg-terniary-dark  hover:bg-[#fc4503]  text-[#d1dcfb]  mt-2 rounded  font-semibold cursor-pointer'>
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
                    <CreateOtherWindow close={() => setopenCreateWindow(false)} />
                )
            }

        </section>
    )
}

export default OthersDetailsEdit
