import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'
import { FaHome } from 'react-icons/fa'
import Footer from '../components/Footer'

const OtherCertificate = () => {

    const params = useParams()
    console.log("params", params?.other_ceritificate)

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



    return (
        <section className='min-h-[100vh] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px] lg:px-6 px-2'>


            <div className='lg:ml-28  lg:absolute top-[72px] '>
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
                        <div className='windowload '></div>
                    </div>
                ) : (
                    <>
                        <div className='flex items-center justify-center'>
                            <div className='mt-[6%] mr-10 lg:ml-28 lg:mb-1'>

                                <img src={data?.image} alt="" className='h-[380px] mr-6 lg:float-left border-2 border-amber-300 p-4' />
                                <h1 className='text-xl font-bold text-amber-300 pb-2'>{data?.tittle}</h1>
                                <pre className=' text-white whitespace-pre-wrap font-semibold text-lg'>{data?.describe}</pre>

                            </div>
                        </div>

                        <div className='fixed bottom-0 left-0 right-0 pb-4'>
                            <Footer/>
                        </div>
                    </>
                )
            }








        </section>
    )
}

export default OtherCertificate
