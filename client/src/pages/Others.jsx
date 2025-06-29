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
import Footer from '../components/Footer';

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

    console.log("allOf", allOf)


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
        }, 8000);

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





    return (
        <section className='min-h-[100vh] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px] lg:px-6 px-2 relative'>

            <h1 className='px-16 font-bold text-2xl md:pt-2  flex items-center flex-col'>Achievement</h1>



            <div className='w-full'>

                <div className='lg:ml-28  lg:absolute top-[72px] '>
                    <Link to={"/"} className='w-fit'>
                        <div className='ml-4'>
                            <FaHome size={28} />
                        </div>
                        <p className='ml-2'>Home</p>
                    </Link>
                </div>



                {/* here recent one */}
                <div className='mx-auto container lg:max-w-[1280px] max-w-[995px] mt-16 md:px-0 px-4'>
                    <p className='font-semibold text-xl my-1 pl-4'>Most recently..</p>

                    <div className='lg:max-w-[1280px] max-w-[995px] gap-6 flex  overflow-x-auto  scrollbar-hidden no-interaction'>

                        {
                            allOf.all_certificate.map((v, i) => {
                                return (
                                    <Link to={`/Others/${v._id}`} key={`${v._id} - ${i}`} className='min-w-full max-w-full  shrink-0 bg-[#2b2b2b] p-3 rounded shadow-md my-4 transition-transform duration-700 ease-in-out'

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
                                                <h1 className='font-semibold text-lg pb-4 lg:line-clamp-none md:line-clamp-[11]'>{v.tittle}</h1>
                                                <pre className="text-sm text-white whitespace-pre-wrap lg:block hidden">{v.describe}</pre>
                                            </div>

                                        </div>

                                    </Link>
                                )
                            })
                        }

                    </div>

                </div>


                {/* some tittle */}

                <div className='mx-auto container lg:max-w-[1280px] max-w-[995px] py-14'>

                    <p className='font-semibold text-xl mt-4 pl-4'>Others..</p>

                    <div className='lg:max-w-[1280px]  max-w-[995px] overflow-x-auto flex  gap-6 px-6 py-4 scroll-smooth scrollbar-custom' ref={scrollRef}>


                        {otherData?.data?.map((val, idx) => (
                            <Link to={`/Others/${val._id}`}
                                key={`${val._id} + ${idx}`}
                                className='min-w-[300px] max-w-[300px] shrink-0 bg-[#2b2b2b] p-3 rounded shadow-md'
                            >
                                <h1 className='line-clamp-2 font-semibold'>{val.tittle}</h1>
                                <Link className='text-sm text-blue-400 hover:underline'>know more</Link>
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

            <div className=' pb-4'>
                <Footer />
            </div>


        </section>
    )
}

export default Others
