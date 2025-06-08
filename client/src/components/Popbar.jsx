import React, { useState } from 'react'
import { FaChevronCircleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import MarginBottom from '../utils/MarginBottom'
import { MdNightsStay } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useGlobalProvider } from '../provider/GlobalProvider';

const Popbar = () => {

    const [closePopUp, setClosePopUp] = useState(false)
    const { darkMode, setDarkMode } = useGlobalProvider();
    

    return (
        <div className='relative'>
            <FaChevronCircleUp size={20} onClick={() => {
                setClosePopUp(!closePopUp)
            }} />

            {
                closePopUp && (
                    <div className={`${darkMode ? "bg-primary-text text-primary-dark" : "bg-primary-dark text-primary-text"}  z-50 absolute -right-5 -top-2 bottom-0 mt-10 w-45 h-45 md:block hidden rounded-2xl shadow-md`}>
                        <div className='flex justify-end mx-5 pt-4 cursor-pointer'><IoClose size={20} onClick={() => setClosePopUp(false)} /></div>
                        <div className='flex flex-col gap-2 px-2 font-semibold mt-[0.5%] text-xl m-4'>

                            <Link className=''>sign up</Link>
                            <MarginBottom />
                            <Link>sign in</Link>
                            <MarginBottom />
                            <div className='mx-8 px-2 mt-2 border w-fit rounded-2xl ' onClick={() => {
                                setDarkMode(!darkMode)
                            }}>
                                {
                                    darkMode ? (
                                        <span><MdNightsStay  size={30} /></span>
                                    ) : (
                                        <span><FaCloudSun size={30} /></span>
                                    )
                                }

                            </div>

                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Popbar
