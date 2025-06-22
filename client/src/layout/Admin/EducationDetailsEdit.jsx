import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CreateAllDataWindow from './CreateAllDataWindow'
import bg from "../../assets/no data.png"

const EducationDetailsEdit = () => {


    const alldata = useSelector(state => state.allofdetails)
    const [data, setData] = useState({
        name: alldata?.name,
        email: "",
        resume: "",
        contact_number: "",
        about_me: "",
        github_link: "",
        linkedin_link: "",
        instragram_link: "",
        facebook_link: ""
    })

    console.log("all data by redux", alldata)

    const [openCreateWindow, setopenCreateWindow] = useState(false)


    return (
        <section className='lg:mx-24 mx-14  mt-16 text-primary-text relative'>


            {/* {
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

                        <form className='bg-primary-black min-w-[750px] max-w-[750px] p-6 rounded mt-6'>

                            <div className='group'>

                                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1 font-semibold pr-1'>Name</p>
                                <input type="text" className='bg-[#444444f2] rounded outline-none w-full p-2' />

                            </div>



                        </form>

                    </div>
                )
            }




            {
                openCreateWindow && (
                    <CreateAllDataWindow close={() => setopenCreateWindow(false)} />
                )

            } */}

        </section>
    )
}

export default EducationDetailsEdit
