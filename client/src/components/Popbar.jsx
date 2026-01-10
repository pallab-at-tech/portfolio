import React, { useEffect, useRef, useState } from 'react'
import { FaChevronCircleUp, FaCloudSun, FaExternalLinkAlt } from "react-icons/fa";
import MarginBottom from '../utils/MarginBottom'
import { MdNightsStay } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from '../provider/GlobalProvider';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import SummaryApi from "../common/SummaryApi"
import Axios from "../utils/Axios"
import toast from 'react-hot-toast'
import { setLogOut } from '../store/userSlice';
import { useNavigate, NavLink } from 'react-router-dom';

const Popbar = ({ close }) => {

    const [closePopUp, setClosePopUp] = useState(false)
    const { darkMode, setDarkMode } = useGlobalContext();

    const popBarHideRef = useRef(null)

    const user = useSelector((state) => state?.user)
    const userUrl = `/dashboard/${user?.name?.toLowerCase()?.replace(" ", "-")}-${user?._id}`

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
            // console.log(error)
        }
    }

    useEffect(() => {
        const handleClickOutSide = (event) => {
            if (popBarHideRef.current && !popBarHideRef.current.contains(event.target)) {
                setClosePopUp(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutSide)

        return () => document.removeEventListener("mousedown", handleClickOutSide)
    }, [])

    return (
        <div ref={popBarHideRef} className='relative z-50'>

            <div>
                <FaChevronCircleUp size={20} onClick={() => {
                    setClosePopUp(!closePopUp)
                }} />
            </div>

            {
                (closePopUp && close) && (
                    <div className={`${darkMode ? "bg-primary-text text-primary-dark" : "bg-[#5e2b1b] text-primary-text"}  z-50 absolute -right-5 -top-2 bottom-0 mt-10 lg:w-43 sm:w-[160px] w-[150px] ${user?._id ? "lg:h-56 h-[280px]" : "lg:h-45 h-[230px]"}  rounded-2xl shadow-md`}>

                        <div className='flex justify-end mx-5 pt-4 cursor-pointer hover:text-[#fc5e03]'><IoClose size={20} onClick={() => setClosePopUp(false)} /></div>

                        <div className='flex flex-col gap-2 pl-3 pr-2 sm:pl-2 font-semibold mt-[0.5%] m-2'>

                            {
                                !user?._id ? (
                                    <>

                                        <NavLink to={"/SignUp"} className='rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='group-hover:scale-105 transition hover:-translate-y-0.5  duration-200 text-xl'>sign up</p></NavLink>
                                        <MarginBottom />
                                        <NavLink to={"/SignIn"} className='rounded mr-10 group lg:pl-4' onClick={() => setClosePopUp(false)}><p className='group-hover:scale-105 transition hover:-translate-y-0.5  duration-200 text-xl'>sign in</p></NavLink>
                                        <MarginBottom />

                                    </>
                                ) : (
                                    <>

                                        <div className='rounded mr-10 group lg:pl-4 flex flex-col items-start'>

                                            {
                                                user.avatar ? (
                                                    <div className='overflow-hidden rounded-full w-10 h-10'>
                                                        <img src={user?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                                                    </div>
                                                ) : (
                                                    <div className='pb-0.5'><CgProfile size={32} /></div>
                                                )
                                            }

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

                                    </>
                                )
                            }


                            <NavLink to={"/Others"} className="lg:hidden text-xl" onClick={() => setClosePopUp(false)}>Others</NavLink>

                            <div className='lg:hidden'><MarginBottom /></div>

                            <div className='sm:mx-10 mx-6 px-2  mt-2 border w-fit rounded-2xl ' onClick={() => {
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
