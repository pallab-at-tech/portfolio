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
import AxiosTostError from '../../utils/AxiosToastError'
import WindowLoader from '../../utils/WindowLoader'


const OthersDetailsEdit = () => {

    const { fetchAllDetails } = useGlobalContext()
    const [openCreateWindow, setopenCreateWindow] = useState(false)

    const alldata = useSelector(state => state.allofdetails)
    const otherData = useSelector(state => state.other)


    const dispatch = useDispatch()
    const imageRef = useRef();

    const [pagination, setPagination] = useState({
        limit: 1,
        page: 1,
        totalNoOfPage: otherData?.totalNoOfPage
    })

    const [confirmation, setConfirmation] = useState({
        confirm: false,
        closeWindow: false
    })

    const [hasLoaded, setHasLoaded] = useState(false)

    const [tick, setTick] = useState(false)
    const [window_loader, setWindow_loader] = useState(false)
    const [imageLoading, setImageLoading] = useState(false)

    useEffect(() => {
        if (!tick) return;
        const t = setTimeout(() => setTick(false), 1500);
        return () => clearTimeout(t);
    }, [tick]);

    useEffect(() => {
        if (!window_loader) return;
        const t = setTimeout(() => setWindow_loader(false), 1500);
        return () => clearTimeout(t);
    }, [window_loader]);


    const [data, setData] = useState({
        certificateId: otherData?.data[0]?._id || "",
        tittle: otherData?.data[0]?.tittle || "",
        image: otherData?.data[0]?.image || "",
        describe: otherData?.data[0]?.describe || ""
    })


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

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOtherData()
    }, [pagination.limit, pagination.page])


    const handleOnChange = (e) => {

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
        const { name } = e.target

        if (!file) return;

        setImageLoading(true)
        const response = await uploadFile(file)

        setImageLoading(false)

        setData((preve) => {
            return {
                ...preve,
                [name]: response?.secure_url
            }
        })
    }

    const handleOnSubmit = async (e) => {
        try {

            e.preventDefault()

            const response = await Axios({
                ...SummaryApi.update_certificate_details,
                data: data
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }

            if (responseData?.success) {
                setTick(true)
                toast.success(responseData?.message)
                fetchOtherData()
                fetchAllDetails()
            }

        } catch (error) {
            AxiosTostError(error)
        }
    }

    const handleDelete = async (e) => {
        try {

            const response = await Axios({
                ...SummaryApi.delete_certificate_details,
                data: {
                    certificateId: data?.certificateId
                }
            })

            const { data: responseData } = response

            if (responseData?.error) {
                toast.error(responseData?.message)
            }


            if (responseData?.success) {

                setWindow_loader(true)

                const res = await Axios({
                    ...SummaryApi.get_Certificate_details,
                    data: {
                        page: pagination.page,
                        limit: pagination.limit
                    }
                });

                const newData = res.data;

                let newPage = pagination.page;
                if (newData.data.length === 0 && pagination.page > 1) {
                    newPage = pagination.page - 1;
                }

                setPagination((prev) => ({
                    ...prev,
                    page: newPage,
                    totalNoOfPage: newData.totalNoOfPage || 1
                }));

                dispatch(OthersDetails(newData));
                fetchAllDetails();
            }

        } catch (error) {
            AxiosTostError(error)
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


    useEffect(() => {

        if (otherData?.data && otherData.data.length > 0) {
            setData({
                certificateId: otherData?.data[0]?._id || "",
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
        }

    }, [pagination.limit, pagination.page, otherData?.data[0]])






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

                                    if (pagination.page === 1) return;

                                    setPagination((preve) => {
                                        return {
                                            ...preve,
                                            page: preve.page - 1

                                        }
                                    })
                                }}>
                                    <FaArrowAltCircleLeft size={32} />
                                </div>

                                <p>{`${pagination.page}/${pagination.totalNoOfPage}`}</p>

                                <div className={pagination.page === pagination.totalNoOfPage ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} onClick={() => {

                                    if (pagination.page === pagination.totalNoOfPage) return;

                                    setPagination((preve) => {
                                        return {
                                            ...preve,
                                            page: preve.page + 1
                                        }
                                    })
                                }}>
                                    <FaArrowAltCircleRight size={32} />
                                </div>

                            </div>

                        </div>

                        <form onSubmit={handleOnSubmit} className='bg-[#1c1d1f] lg:min-w-[750px] lg:max-w-[750px] md:min-h-[500px] md:max-h-[800px] min-h-[500px]  max-h-[500px] scrollbar-custom overflow-y-auto p-6 rounded mt-6 grid gap-3 mb-4'>

                            {/* tittle */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Title :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>
                                <input type="text" onChange={handleOnChange} required name='tittle' value={data.tittle} className='bg-[#353333f2] rounded outline-none w-full p-2' />

                            </div>

                            {/* image */}
                            <div className='group font-semibold'>

                                <div className='flex'>
                                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1  pr-1 text-[#f2980a] text-lg'>Certificate :</p>
                                    <div className='text-red-700'><TiStarburst size={10} /></div>
                                </div>

                                <input type="file" onChange={handlePhoto} ref={imageRef} hidden name='image' id='cover_image' accept="image/*" />
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

                                <textarea onChange={handleOnChange} required name='describe' rows={4} cols={4} value={data.describe} className='bg-[#353333f2] rounded outline-none w-full p-2 max-h-[120px] min-h-[110px]'></textarea>
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


                        <div className='flex items-center gap-1 mb-6 cursor-pointer pt-2'
                            onClick={() => {
                                setConfirmation((prev) => {
                                    return {
                                        ...prev,
                                        closeWindow: true
                                    }
                                })
                            }}>
                            <p className='text-base font-semibold text-[#d1c6c1] underline'>Delete above details ?</p>
                            <div className='text-orange-800'><MdDelete size={22} /></div>
                        </div>

                    </div>
                )
            }


            {
                window_loader && (
                    <WindowLoader/>
                )
            }




            {
                confirmation.closeWindow && (
                    <ConfirmationBox confirmation={confirmation} setConfirmation={setConfirmation} />
                )
            }




            {
                openCreateWindow && (
                    <CreateOtherWindow close={() => setopenCreateWindow(false)} loadData={() => setHasLoaded(false)} fetchOtherData={fetchOtherData}/>
                )
            }

        </section>
    )
}

export default OthersDetailsEdit
