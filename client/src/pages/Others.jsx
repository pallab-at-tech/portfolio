import React, { useEffect, useRef, useState } from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import { useDispatch } from 'react-redux';
import { OthersDetails } from '../store/otherSlice';
import AxiosTostError from '../utils/AxiosToastError';
import { OthersDetailspro } from '../store/OtherScrollData';
import { useGlobalContext } from '../provider/GlobalProvider';

const Others = () => {

    // Recall last page , or recent page....
    const otherData = useSelector(state => state.otherscroll)
    const allOf = useSelector(state => state.allofdetails)
    const dispatch = useDispatch()
    const scrollRef = useRef(null)

    const [pagination, setPagination] = useState({
        limit: 4,
        page: 1,
        totalNoOfPage: otherData?.totalNoOfPage
    })
    const [currentIndex, setCurrentIndex] = useState(0);

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

            console.log("responsmnmahjh", responseData)

            if (responseData?.success) {
                dispatch(OthersDetails(responseData))
                dispatch(OthersDetailspro(responseData))

                setPagination((prev) => ({
                    ...prev,
                    totalNoOfPage: responseData.totalNoOfPage
                }))
            }

        } catch (error) {
            AxiosTostError(error)
        }
    }

    useEffect(() => {
        fetchOtherData()
    }, [pagination.limit, pagination.page])


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + 1) % allOf.all_certificate.length
            );
        }, 6000);

        return () => clearInterval(interval);
    }, [allOf.all_certificate?.length]);


    useEffect(() => {

        const handleScroll = async () => {
            const element = scrollRef.current

            if (!element) return;
            const { scrollLeft, scrollWidth, clientWidth } = element;

            console.log("scrollLeft + clientWidth =", scrollLeft + clientWidth);
            console.log("scrollWidth =", scrollWidth);

            if (scrollLeft + clientWidth >= scrollWidth - 10) {

                setPagination((preve) => {
                    if (preve.page < preve.totalNoOfPage) {
                        return {
                            ...preve,
                            page: preve.page + 1
                        }
                    }
                    else {
                        return preve
                    }
                })
            }
        }

        const element = scrollRef.current;

        if (element) {
            element.addEventListener('scroll', handleScroll)
        }

        return () => {
            if (element) {
                element.removeEventListener("scroll", handleScroll)
            }
        }

    }, [pagination.totalNoOfPage])

    const { darkMode, setDarkMode } = useGlobalContext();


    // #000000 black card-bg-color-light

    return (
        <section className={`min-h-[100vh] ${darkMode ? "bg-primary-dark" : "card-bg-color-light"} text-primary-text lato-regular md:px-14 pt-[42px] lg:px-6 px-2 relative`}>

            <h1 className={`font-bold text-2xl flex items-center justify-center ${!darkMode && "text-[#000000] font-bold"}`}>Achievement</h1>


            <div className='w-full '>

                <div className={` ${!darkMode && "text-[#000000]"} flex items-center justify-start pl-[6%] relative bottom-10`}>
                    <Link to={"/"} className='w-fit'>
                        <div className={`ml-4 `}>
                            <FaHome size={28} />
                        </div>
                        <p className='ml-2 font-bold'>Home</p>
                    </Link>
                </div>



                {/* here recent one */}
                <div className='mx-auto container lg:max-w-[1280px] max-w-[995px] -mt-2 md:px-0 px-4'>

                    <p className={`font-semibold text-xl my-1 pl-2 ${!darkMode && "text-[#a90707]"}`}>Most recently..</p>

                    <div className='lg:max-w-[1280px] max-w-[995px] flex overflow-x-auto scrollbar-hidden  no-interaction'>

                        {
                            allOf.all_certificate.map((v, i) => {
                                return (
                                    <Link to={`/Others/${v._id}`} key={`${v._id} - ${i}`} className={`min-w-full max-w-full  shrink-0 ${darkMode ? "bg-[#2b2b2b] shadow-[inset_0_0_12px_rgba(255,245,200,0.15),inset_0_0_6px_rgba(255,255,255,0.05)]" : "card-other-section-light"} p-3 rounded box-border my-4 transition-transform duration-700 ease-in-out`}

                                        style={{
                                            transform: `translateX(-${currentIndex * 100}%)`,
                                            width: `${(allOf.all_certificate?.length || 1) * 100}%`,
                                        }}
                                    >

                                        <div className='grid lg:grid-cols-[550px_1fr] md:grid-cols-[420px_1fr] lg:gap-0 md:gap-6 grid-row-2 gap-4 md:items-center lg:items-start md:justify-center lg:p-6 p-4'>

                                            <div className=''>
                                                <img
                                                    src={v.image}
                                                    alt=''
                                                    className='w-full lg:h-[350px] md:h-[320px] h-[180px] object-contain rounded px-2 pr-2'
                                                />
                                            </div>

                                            <div className=''>
                                                <h1 className='font-semibold text-lg md:pb-4 lg:line-clamp-none md:line-clamp-[11] text-amber-300'>{v.tittle}</h1>
                                                <pre className="text-sm lato-regular text-white whitespace-pre-wrap lg:block hidden">{v.describe}</pre>
                                            </div>

                                        </div>

                                    </Link>
                                )
                            })
                        }

                    </div>

                </div>


                {/* some tittle */}

                <div className='mx-auto container lg:max-w-[1280px] max-w-[995px] py-6'>

                    <p className={`font-semibold text-xl mt-4 pl-6 ${!darkMode && "text-[#a90707]"}`}>Others..</p>

                    <div className='lg:max-w-[1280px]  max-w-[995px] overflow-x-auto flex  gap-6 px-6 py-4 scroll-smooth scrollbar-custom' ref={scrollRef}>


                        {otherData?.data?.map((val, idx) => (
                            <Link to={`/Others/${val._id}`}
                                key={`${val._id} + ${idx}`}
                                className={`min-w-[300px] max-w-[300px] shrink-0  ${darkMode ? "bg-[#2b2b2b] shadow-md hover:shadow-[inset_0_0_16px_rgba(255,230,120,0.18),inset_0_0_8px_rgba(255,230,120,0.1)]" : "card-other-small-section-light"}  p-3 rounded   transition-shadow duration-400`}
                            >
                                <h1 className='line-clamp-2 font-semibold'>{val.tittle}</h1>
                                <Link to={`/Others/${val._id}`} className='text-sm text-blue-400 hover:underline'>know more</Link>
                                <div className='mt-2'>
                                    <img
                                        src={val.image}
                                        alt=''
                                        className='w-full h-[180px] object-cover rounded'
                                    />
                                </div>
                            </Link>
                        ))}


                    </div>


                </div>


            </div>

            {/* <div className=' pb-4'>
                <Footer />
            </div> */}


        </section>
    )
}

export default Others
