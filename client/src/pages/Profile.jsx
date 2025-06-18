import React, { use, useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux'

const Profile = () => {

    const user = useSelector((state) => state?.user)

    const [userData, setUserData] = useState({
        name: user?.name
    })

    useEffect(() => {
        setUserData({
            name: user?.name
        })

    }, [user])

    console.log("profile", userData)

    const handleChange = (e) => {
        const { name, value } = e.target

        setUserData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }



    return (
        <section className='lg:mx-24 mx-14  mt-16'>

            <div className='flex flex-col justify-center items-center'>
                <div className=' '>
                    <div className='pb-0.5 text-2xl font-bold'><CgProfile size={60} /></div>
                    <button className=' my-2 rounded-2xl px-4 py-1 border-2 border-terniary-dark text-terniary-dark text-base hover:bg-terniary-dark hover:text-primary-dark font-semibold'>Edit</button>
                </div>

                <form action="" className='mt-10 lg:max-w-[80%]' >

                    <div className='group mb-2'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Name : </p>
                        <input type="text" onChange={handleChange} name='name' value={userData?.name} required className='bg-[#b2b8de] rounded lg:min-w-[420px] lg:max-w-[420px] md:min-w-[320px] md:max-w-[320px] min-w-[220px] max-w-[220px] h-8 text-base outline-none px-2 py-5 mt-1 text-[#100f0f]' />
                    </div>

                    <button className="p-2  bg-[#2c6abc] hover:bg-[#2463b5]  text-[#d1dcfb] md:min-w-[320px] lg:min-w-[420px] lg:max-w-[420px] md:max-w-[320px] min-w-[220px] max-w-[220px] mt-2 rounded  font-semibold">Submit</button>

                </form>
            </div>



        </section>
    )
}

export default Profile
