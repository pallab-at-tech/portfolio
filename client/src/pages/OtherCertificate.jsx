import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { FaHome } from 'react-icons/fa'
import Footer from '../components/Footer'
import { useGlobalContext } from '../provider/GlobalProvider'

const OtherCertificate = () => {

    const params = useParams()

    const [data, setData] = useState()


    useEffect(() => {

        const fetchDetails = async () => {

            try {

                const response = await Axios({
                    ...SummaryApi.get_Certificate_details,
                    data: {
                        certificateId: params?.other_ceritificate
                    }
                })

                const { data: responseData } = response

                if (responseData?.success) {

                    setData(responseData.data)
                    console.log("datadata", data)
                }


            } catch (error) {

                console.log(error)

            }
        }

        fetchDetails()

    }, [params?.other_ceritificate])

    const { darkMode, setDarkMode } = useGlobalContext()

    return (
        <section className={`min-h-[100vh] ${darkMode ? "bg-primary-dark" : "bg-[#e9d6b4]"} text-primary-text extra-font-style md:px-14 pt-[72px] lg:px-6  px-4`}>


            <div className={`lg:ml-28  lg:absolute top-[72px] ${!darkMode && "text-[#020826]"}`}>
                <Link to={"/"} className='w-fit'>
                    <div className='ml-4'>
                        <FaHome size={28} />
                    </div>
                    <p className='ml-2'>Home</p>
                </Link>
            </div>


            {
                !data?._id ? (
                    <div className='fixed inset-0 flex items-center justify-center'>
                        <div className='windowload'></div>
                    </div>
                ) : (
                    <>
                        <div className='flex items-center justify-center'>
                            <div className='mt-[6%] md:mr-10 lg:ml-28 lg:mb-1 lg:block flex flex-col items-start justify-center'>

                                <div className=''>
                                    <img src={data?.image} alt="" className='md:h-[380px] h-[220px] md:mr-6 lg:float-left p-4' />
                                </div>
                                <div>
                                    <h1 className={`lg:mt-0 md:mt-10 mt-6 text-xl font-bold ${darkMode ? "text-amber-300" : "text-[#020826]"} pb-2`}>{data?.tittle}</h1>
                                    <pre className={`lg:mt-0 md:mt-6 mt-4 whitespace-pre-wrap font-semibold text-lg ${darkMode ? "text-white" : "text-[#332301]"}`}>{data?.describe}</pre>
                                </div>

                            </div>
                        </div>

                    </>
                )
            }

            <div className='mt-auto pt-10 pb-2 lg:hidden'>
                <Footer />
            </div>

        </section>
    )
}

export default OtherCertificate
