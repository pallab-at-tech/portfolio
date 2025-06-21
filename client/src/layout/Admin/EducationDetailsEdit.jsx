import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CreateAllDataWindow from './CreateAllDataWindow'

const EducationDetailsEdit = () => {


    const alldata = useSelector(state => state.allofdetails)

    console.log("all data by redux", alldata)

    const [openCreateWindow, setopenCreateWindow] = useState(false)


    return (
        <section className='lg:mx-24 mx-14  mt-16 text-primary-text'>


            <div className='flex flex-col pl-16 mt-28'>
                <div>
                    <p>It's look you haven't  create all of the data ....</p>
                    <div onClick={()=>setopenCreateWindow(true)} className=' my-4 rounded-full cursor-pointer px-4 py-1.5 w-fit border-3 text-terniary-dark text-base  transition duration-200 outline-none font-semibold button-shadow'>
                        create
                    </div>
                </div>
            </div>

            {
                openCreateWindow && (
                    <CreateAllDataWindow close={()=>setopenCreateWindow(false)}/>
                )

            }

        </section>
    )
}

export default EducationDetailsEdit
