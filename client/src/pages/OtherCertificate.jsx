import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { useGlobalContext } from '../provider/GlobalProvider'
import Header from '../components/Header'

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
                }


            } catch (error) {

                // console.log(error)

            }
        }

        fetchDetails()

    }, [params?.other_ceritificate])

    const { darkMode } = useGlobalContext()

    return (
        <>
            <Header />

            <section className={`h-[100vh] pt-[90px] sm:pt-[110px] px-6 sm:px-10 pb-10 overflow-y-auto hide-scrollbar ${darkMode ? "bg-primary-dark" : "bg-[#e9d6b4]"} text-primary-text extra-font-style `}>

                {
                    !data?._id ? (
                        <div className='fixed inset-0 flex items-center justify-center'>
                            <div className='windowload'></div>
                        </div>
                    ) : (
                        <>
                            <div className='flex items-center justify-center text-justify'>

                                <div className='lg:block flex flex-col items-start justify-center'>

                                    <div>
                                        <img src={data?.image} alt="" className='lg:h-[380px] h-[30%] rounded-2xl lg:float-left lg:mr-6 lg:mb-6' />
                                    </div>

                                    <div className='lg:pt-[3px] '>
                                        <h1 className={`mt-4 sm:mt-6 lg:mt-0 text-xl font-bold ${darkMode ? "text-amber-300" : "text-[#020826]"} pb-2 leading-[1.3]`}>{data?.tittle}</h1>
                                        <pre className={`mt-2 whitespace-pre-wrap font-semibold text-lg ${darkMode ? "text-white" : "text-[#433208]"} leading-[1.5]`}>{data?.describe}</pre>
                                    </div>

                                </div>
                            </div>

                        </>
                    )
                }

            </section>
        </>
    )
}

export default OtherCertificate
