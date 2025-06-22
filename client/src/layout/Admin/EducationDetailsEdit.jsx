import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import bg from "../../assets/no data.png"
import { TiTick } from 'react-icons/ti'
import Axios from '../../utils/Axios'
import SummaryApi from '../../common/SummaryApi'
import toast from 'react-hot-toast'
import { useGlobalContext } from '../../provider/GlobalProvider'
import TickMark from '../../utils/TickMark'
import CreateEducationDataWindow from './CreateEducationDataWindow'

const EducationDetailsEdit = () => {

    const alldata = useSelector(state => state.allofdetails)

    const [data, setData] = useState({
        institute_name: "",
        location: "",
        qualification: []
    })

    const [qualify, setQualify] = useState({
        level: "",
        stream: "",
        startDate: "",
        endDate: "",
        typeOfScore: "",
        score: ""
    })

    const [openCreateWindow, setopenCreateWindow] = useState(false)

    console.log("edu", alldata)






    return (
        <section className='lg:mx-24 mx-14  mt-16 text-primary-text '>

            {
                alldata?.all_education?.length === 0 ? (
                    <>
                        <div className='flex flex-col md:pl-16  mt-28'>
                            <div>
                                <p>It's look you haven't create education data ....</p>
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
                    <>
                    
                    </>
                )
            }






            {
                openCreateWindow && (
                    <CreateEducationDataWindow close={() => setopenCreateWindow(false)} />
                )

            }

        </section>
    )
}

export default EducationDetailsEdit
