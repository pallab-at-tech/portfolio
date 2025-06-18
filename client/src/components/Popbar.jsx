import React, { useEffect, useState } from 'react'
import { FaChevronCircleUp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import MarginBottom from '../utils/MarginBottom'
import { MdNightsStay } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useGlobalProvider } from '../provider/GlobalProvider';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";

const Popbar = () => {

    const [closePopUp, setClosePopUp] = useState(false)
    const { darkMode, setDarkMode } = useGlobalProvider();

    const user = useSelector((state) => state?.user)
    const userUrl = `/dashboard/${user?.name?.toLowerCase()?.replace(" ","-")}-${user?._id}`

    // console.log("user from pop-bar", user)

    // useEffect(() => {
    //     console.log("user from pop-bar", user)
    // }, [user])


    return (
        <div className='relative z-50'>
            <FaChevronCircleUp size={20} onClick={() => {
                setClosePopUp(!closePopUp)
            }} />

            {
                closePopUp && (
                    <div className={`${darkMode ? "bg-primary-text text-primary-dark" : "bg-primary-dark text-primary-text"}  z-50 absolute -right-5 -top-2 bottom-0 mt-10 lg:w-43 ${user ? "lg:h-56 h-[490px]" : "lg:h-45 h-[450px]"}  w-[150px]  rounded-2xl shadow-md`}>
                        <div className='flex justify-end mx-5 pt-4 cursor-pointer hover:text-[#fc5e03]'><IoClose size={20} onClick={() => setClosePopUp(false)} /></div>
                        <div className='flex flex-col gap-2 px-2 font-semibold mt-[0.5%] m-2'>

                            <Link to='HomeID' smooth={true} duration={200} spy offset={-80}
                                className='cursor-pointer lg:hidden text-xl' onClick={() => setClosePopUp(false)}>Home
                            </Link>

                            <div className='lg:hidden'><MarginBottom /></div>

                            <Link to='EducationID' smooth={true} duration={200} spy offset={-80}
                                className='cursor-pointer lg:hidden text-xl' onClick={() => setClosePopUp(false)}>Education
                            </Link>

                            <div className='lg:hidden'><MarginBottom /></div>

                            <Link to='projectID' smooth={true} duration={200} spy offset={-80}
                                className='cursor-pointer lg:hidden text-xl' onClick={() => setClosePopUp(false)}>Project
                            </Link>

                            <div className='lg:hidden'><MarginBottom /></div>

                            <Link to='skillID' smooth={true} duration={200} spy offset={-80}
                                className={`cursor-pointer lg:hidden text-xl`} onClick={() => setClosePopUp(false)} >Skills
                            </Link>

                            <div className='lg:hidden'><MarginBottom /></div>

                            <Link to='ContactID' smooth={true} duration={200} spy offset={-80}
                                className={`cursor-pointer lg:hidden text-xl`} onClick={() => setClosePopUp(false)}>Contact
                            </Link>

                            <div className='lg:hidden'><MarginBottom /></div>

                            <NavLink to={"/Others"} className="lg:hidden text-xl" onClick={() => setClosePopUp(false)}>Others</NavLink>

                            <div className='lg:hidden'><MarginBottom /></div>

                            {
                                !user ? (
                                    <>

                                        <NavLink to={"/SignUp"} className='hover:bg-[#c4c3c350] rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='group-hover:scale-105 transition hover:-translate-y-0.5  duration-200 text-xl'>sign up</p></NavLink>
                                        <MarginBottom />
                                        <NavLink to={"/SignIn"} className='hover:bg-[#c4c3c350] rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='group-hover:scale-105 transition hover:-translate-y-0.5  duration-200 text-xl'>sign in</p></NavLink>
                                        <MarginBottom />

                                    </>
                                ) : (
                                    <>
                                        <div className='rounded mr-10 group lg:pl-4 flex flex-col items-start'>

                                            <div className='pb-0.5'><CgProfile size={32} /></div>

                                            <div className='flex gap-2 items-center'>
                                                <p className='text-xl'>{user?.name?.split(" ")[0]}</p>
                                                <NavLink to={userUrl} className='hover:text-[#fc5e03] cursor-pointer' onClick={() => setClosePopUp(false)}><FaExternalLinkAlt /></NavLink>
                                            </div>

                                        </div>

                                        <MarginBottom />

                                        <NavLink to={"/jlkhk"} className='hover:bg-[#c4c3c350] rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='lg:group-hover:scale-105 lg:transition  lg:hover:-translate-y-0.5  lg:duration-200 text-xl'>LogOut</p></NavLink>
                                        <MarginBottom />
                                    </>
                                )
                            }

                            <div className='mx-10 px-2  mt-2 border w-fit rounded-2xl ' onClick={() => {
                                setDarkMode(!darkMode)
                            }}>
                                {
                                    darkMode ? (
                                        <span><MdNightsStay size={30} /></span>
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
