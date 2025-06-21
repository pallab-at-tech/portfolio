import React, { useEffect, useState } from 'react'
import { FaChevronCircleUp } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import MarginBottom from '../utils/MarginBottom'
import { MdNightsStay } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../provider/GlobalProvider';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import SummaryApi from "../common/SummaryApi"
import Axios from "../utils/Axios"
import toast from 'react-hot-toast'
import { setLogOut } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

// useGlobalProvider
const Popbar = () => {

    const [closePopUp, setClosePopUp] = useState(false)
    const { darkMode, setDarkMode } = useGlobalContext();

    const user = useSelector((state) => state?.user)
    const userUrl = `/dashboard/${user?.name?.toLowerCase()?.replace(" ", "-")}-${user?._id}`

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = async () => {
        try {
            const response = await Axios({
                ...SummaryApi.user_logOut
            })

            if (response?.data?.success) {
                dispatch(setLogOut())

                localStorage.clear()

                toast.success(response?.data?.message)
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='relative z-50'>
            <FaChevronCircleUp size={20} onClick={() => {
                setClosePopUp(!closePopUp)
            }} />

            {
                closePopUp && (
                    <div className={`${darkMode ? "bg-primary-text text-primary-dark" : "bg-primary-dark text-primary-text"}  z-50 absolute -right-5 -top-2 bottom-0 mt-10 lg:w-43 ${user._id ? "lg:h-56 h-[310px]" : "lg:h-45 h-[280px]"}  w-[150px]  rounded-2xl shadow-md`}>
                        <div className='flex justify-end mx-5 pt-4 cursor-pointer hover:text-[#fc5e03]'><IoClose size={20} onClick={() => setClosePopUp(false)} /></div>
                        <div className='flex flex-col gap-2 px-2 font-semibold mt-[0.5%] m-2'>



                            {
                                location.pathname !== "/" ? (
                                    <NavLink to="/" className='cursor-pointer lg:hidden text-xl' onClick={() => setClosePopUp(false)}>Home
                                    </NavLink>
                                ) : (
                                    <Link to='HomeID' smooth={true} duration={200} spy offset={-80}
                                        className='cursor-pointer lg:hidden text-xl' onClick={() => setClosePopUp(false)}>Home
                                    </Link>
                                )
                            }

                            <div className='lg:hidden'><MarginBottom /></div>

                            {
                                !user._id ? (
                                    <>

                                        <NavLink to={"/SignUp"} className='hover:bg-[#c4c3c350] rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='group-hover:scale-105 transition hover:-translate-y-0.5  duration-200 text-xl'>sign up</p></NavLink>
                                        <MarginBottom />
                                        <NavLink to={"/SignIn"} className='hover:bg-[#c4c3c350] rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='group-hover:scale-105 transition hover:-translate-y-0.5  duration-200 text-xl'>sign in</p></NavLink>
                                        <MarginBottom />

                                    </>
                                ) : (
                                    <>
                                        {/* <div className=""> */}

                                        <div className='rounded mr-10 group lg:pl-4 flex flex-col items-start'>

                                            <div className='pb-0.5'><CgProfile size={32} /></div>

                                            <div className='flex gap-2 items-center'>
                                                <p className='text-xl'>{user?.name?.split(" ")[0]}</p>
                                                <NavLink to={userUrl} className='hover:text-[#fc5e03] cursor-pointer' onClick={() => setClosePopUp(false)}><FaExternalLinkAlt /></NavLink>
                                            </div>

                                        </div>

                                        <MarginBottom />

                                        <button className='hover:bg-[#c4c3c350] rounded mr-14 lg:mr-11 group '
                                            onClick={() => {

                                                setClosePopUp(false);
                                                handleLogOut()

                                            }}>
                                            <p className='lg:group-hover:scale-105 lg:transition  lg:hover:-translate-y-0.5  lg:duration-200 text-xl'>LogOut</p></button>
                                        <MarginBottom />

                                        {/* </div> */}

                                    </>
                                )
                            }


                            <NavLink to={"/Others"} className="lg:hidden text-xl" onClick={() => setClosePopUp(false)}>Others</NavLink>

                            <div className='lg:hidden'><MarginBottom /></div>

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
