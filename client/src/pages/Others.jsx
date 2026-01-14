import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Axios from '../utils/Axios';
import SummaryApi from '../common/SummaryApi';
import { useDispatch } from 'react-redux';
import { OthersDetails } from '../store/otherSlice';
import { OthersDetailspro } from '../store/OtherScrollData';
import { useGlobalContext } from '../provider/GlobalProvider';
import Header from '../components/Header';

const Others = () => {

    // Recall last page , or recent page....
    const otherData = useSelector(state => state.otherscroll)
    const allOf = useSelector(state => state.allofdetails)

    const { darkMode } = useGlobalContext();

    const dispatch = useDispatch()
    const scrollRef = useRef(null)

    const [pagination, setPagination] = useState({
        limit: 4,
        page: 1,
        totalNoOfPage: otherData?.totalNoOfPage
    })

    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchOtherData = async () => {

        if (pagination.page === null || pagination.limit === null) return

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
                dispatch(OthersDetailspro(responseData))

                setPagination((prev) => ({
                    ...prev,
                    totalNoOfPage: responseData.totalNoOfPage
                }))
            }

        } catch (error) {
            console.log("response error", error)
        }
    }

    useEffect(() => {
        if (pagination.page === null || pagination.limit === null) return
        fetchOtherData()
    }, [pagination.limit, pagination.page])


    useEffect(() => {
        if (!Array.isArray(allOf?.all_certificate) || allOf.all_certificate.length === 0) {
            return;
        }

        // ✅ Set immediately on data load
        setCurrentIndex(0);

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % allOf.all_certificate.length;
                return nextIndex;
            });
        }, 8000);

        return () => clearInterval(timer);
    }, [allOf?.all_certificate]);


    return (
        <>
            <Header />

            <section className={`h-screen  overflow-y-auto hide-scrollbar pt-[102px] p-8 ${darkMode ? "bg-primary-dark" : "bg-[#dcb77b]"} text-primary-text lato-regular md:px-8 pt-[42px] lg:px-6 sm:px-6 px-2 relative`}>

                <h1 className={`font-bold text-3xl flex items-center justify-center ${!darkMode && "text-[#000000]"}`}>Achievement</h1>

                <div className='w-full '>

                    <div className='mt-4'>
                        {
                            allOf?.all_certificate && Array.isArray(allOf?.all_certificate) && allOf?.all_certificate?.length > 0 && (
                                <p className={`font-bold text-2xl my-1 pl-6 ${darkMode ? "text-[#f9431fed]" : "text-[#171924]"}`}>Most recently..</p>
                            )
                        }

                        <div className="overflow-hidden w-full p-3 sm:p-4 lg:p-6">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    width: `${allOf?.all_certificate.length * 100}%`,
                                }}
                            >
                                {allOf.all_certificate.map((item) => (
                                    <Link
                                        key={item._id}
                                        to={`/Others/${item._id}`}
                                        className="w-full shrink-0"
                                    >
                                        <div
                                            className={`w-full max-w-[calc(100vw-38px)] sm:max-w-[calc(100vw-70px)] md:max-w-[calc(100vw-100px)]
                                                   px-[18px] sm:px-6 sm:py-4 py-2.5
                                                    ${darkMode
                                                    ? "bg-[#38393d] shadow-[inset_1px_-1px_20px_12px_rgb(10,0,10,0.15))] border-2 border-[#1e252fac]"
                                                    : "bg-[#ebd8b8] shadow-[inset_1px_-1px_20px_8px_rgb(240,180,68,0.36)] border-2 border-amber-500/30"}
                                                    rounded-xl overflow-hidden relative`}
                                        >

                                            {/* IMAGE (FLOATING) */}
                                            <div
                                                className={`mt-2 rounded-2xl w-fit h-fit overflow-hidden bg-gradient-to-br border p-3 sm:p-4
                                                        float-left sm:mr-5 mb-1 justify-self-center
                                                        ${darkMode
                                                        ? "from-[#33383ab6] to-[#42413fc3] border-gray-500"
                                                        : "from-[#ecc89ef1] to-[#e7d4a0e2] border-amber-600/40"} sm:mb-0 mb-3`}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className="w-full sm:max-h-[180px] lg:max-h-[250px] object-contain rounded-2xl"
                                                />
                                            </div>

                                            {/* TEXT */}
                                            <div className="text-justify">
                                                <h1
                                                    className={`font-semibold text-lg sm:text-xl leading-[1.3] mb-2
                                                    ${darkMode ? "text-[#ed770f]" : "text-amber-700"}`}
                                                >
                                                    {item.tittle}
                                                </h1>

                                                <p
                                                    className={`text-[15px] font-semibold leading-relaxed xl:block hidden
                                                    ${darkMode ? "text-[#f4f1ed]" : "text-[#472f0b]"}`}
                                                >
                                                    {item?.describe && `${item.describe?.slice(0, 1400)}`}
                                                    {item?.describe && item.describe?.length > 1400 && "......"}
                                                </p>

                                                <p
                                                    className={`text-[15px] font-semibold leading-relaxed lg:block hidden xl:hidden
                                                    ${darkMode ? "text-[#f4f1ed]" : "text-[#472f0b]"}`}
                                                >
                                                    {item?.describe && `${item?.describe.slice(0, 800)}`}
                                                    {item?.describe && item.describe?.length > 800 && "......"}
                                                </p>

                                                <p
                                                    className={`text-[15px] font-semibold leading-relaxed hidden sm:block lg:hidden
                                                    ${darkMode ? "text-[#f4f1ed]" : "text-[#472f0b]"}`}
                                                >
                                                    {item?.describe && `${item?.describe.slice(0, 500)}`}
                                                    {item?.describe && item?.describe.length > 500 && "......"}
                                                </p>

                                            </div>

                                        </div>

                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className='mb-4'>
                        {
                            otherData?.data && Array.isArray(otherData?.data) && otherData?.data?.length > 0 && (
                                <div
                                    className=''
                                >
                                    <p className={`font-bold text-2xl my-1 pl-6 ${darkMode ? "text-[#f9431fed]" : "text-[#171924]"}`}>
                                        All Achievement
                                    </p>

                                    <div className="overflow-x-auto py-2 pl-2">
                                        <div className="flex gap-4 px-1">

                                            {otherData?.data?.map((v, i) => (
                                                <Link
                                                    to={`/Others/${v?._id}`}
                                                    key={v?._id}
                                                    className={`w-[250px] shrink-0 rounded-xl transition-all duration-300
                                                            hover:-translate-y-1 hover:shadow-lg
                                                            ${darkMode
                                                            ? "bg-[#38393d] border border-[#1e252fac]"
                                                            : "bg-[#ebd3a5] border border-amber-600/60"}`
                                                    }
                                                >

                                                    {/* IMAGE */}
                                                    <div className="flex justify-center items-center p-3">
                                                        <div className="w-full h-[160px] rounded-lg overflow-hidden bg-black/80">
                                                            <img
                                                                src={v?.image}
                                                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* TEXT */}
                                                    <div className="px-3 pb-4">
                                                        <h3
                                                            className={`text-sm font-semibold leading-snug line-clamp-2
                                                                ${darkMode ? "text-[#f4f1ed]" : "text-[#37290b]"}`}
                                                        >
                                                            {v?.tittle}
                                                        </h3>
                                                    </div>

                                                </Link>
                                            ))}

                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>

                </div>

            </section>
        </>
    )
}

export default Others
