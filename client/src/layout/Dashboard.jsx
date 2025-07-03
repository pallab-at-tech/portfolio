import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import SummaryApi from '../common/SummaryApi'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { setLogOut } from '../store/userSlice'
import Axios from '../utils/Axios'
import { useGlobalContext } from '../provider/GlobalProvider'

const Dashboard = () => {

    const user = useSelector((state) => state?.user)
    const userUrl = `/dashboard/${user?.name?.toLowerCase()?.replace(" ", "-")}-${user?._id}`
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { darkMode, setDarkMode } = useGlobalContext()

    const alldata = useSelector(state => state.allofdetails)

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
        <div className={`min-h-[calc(100vh-32px)] ${darkMode ? "bg-primary-dark text-primary-text" : "card-bg-color-light text-primary-dark"}  extra-font-style md:px-14 pt-[72px]`}>
            <div className='grid lg:grid-cols-[260px_1fr] container mx-auto'>

                <div className='sticky top-[104px] overflow-y-auto border-r-3 border-r-slate-600 max-h-[calc(100vh-104px)] lg:block hidden'>

                    <div className='mt-10 border-b-3 border-slate-600'>

                        <p className='mb-1 text-xl font-bold'>My account</p>

                        <div className='flex gap-2 items-center pb-4 '>

                            <p className='max-w-[10ch] break-all text-sm line-clamp-2 leading-tight'>{user?.name}</p>
                            <NavLink to={userUrl} className='hover:text-[#fc5e03] cursor-pointer'><FaExternalLinkAlt /></NavLink>

                        </div>

                    </div>

                    <div className='mr-6'>
                        {

                            !user?.admin_verify ? (
                                <>
                                    <div className='bg-gray-500 text-base my-12 rounded px-4 py-4 w-fit'>
                                        <p className='text-base leading-tight mb-2 font-semibold text-[#d9d9e0]'>verify your account by admin ?</p>

                                        <form action="">

                                            <input type="email" placeholder='Enter your email' className='bg-primary-text outline-none rounded text-black px-2 py-1 text-sm' />
                                            <button className='bg-terniary-dark mt-3 py-1 px-2 rounded text-sm block'>send</button>
                                        </form>
                                    </div>

                                </>
                            ) : (
                                <div className='py-4 text-lg flex flex-col gap-y-0.5'>

                                    <NavLink to={`${userUrl}/allOfEdit`} className={({ isActive }) => {
                                        return isActive ? 'bg-[#3d4150] rounded p-2 w-fit' : 'w-fit p-2 transition hover:-translate-y-0.5 duration-300 scale-105'
                                    }}
                                    >
                                        All details
                                    </NavLink>

                                    {
                                        Boolean(alldata?.name) && (
                                            <>

                                                <NavLink to={`${userUrl}/educationEdit`} className={({ isActive }) => {
                                                    return isActive ? 'bg-[#3d4150] rounded p-2 w-fit' : 'w-fit p-2 transition hover:-translate-y-0.5 duration-300 scale-105'
                                                }}
                                                >
                                                    Education
                                                </NavLink>


                                                <NavLink to={`${userUrl}/projectEdit`} className={({ isActive }) => {
                                                    return isActive ? 'bg-[#3d4150] rounded p-2 w-fit' : 'w-fit p-2 transition hover:-translate-y-0.5 duration-300 scale-105'
                                                }}
                                                >
                                                    Project
                                                </NavLink>


                                                <NavLink to={`${userUrl}/skillEdit`} className={({ isActive }) => {
                                                    return isActive ? 'bg-[#3d4150] rounded p-2 w-fit' : 'w-fit p-2 transition hover:-translate-y-0.5 duration-300 scale-105'
                                                }}
                                                >
                                                    Skill
                                                </NavLink>

                                                <NavLink to={`${userUrl}/othersEdit`} className={({ isActive }) => {
                                                    return isActive ? 'bg-[#3d4150] rounded p-2 w-fit' : 'w-fit p-2 transition hover:-translate-y-0.5 duration-300 scale-105'
                                                }}
                                                >
                                                    Other
                                                </NavLink>

                                            </>
                                        )
                                    }



                                    <div onClick={handleLogOut} className='cursor-pointer w-fit p-2 transition hover:-translate-y-0.5 duration-300 scale-105'>LogOut</div>

                                </div>

                            )
                        }
                    </div>

                </div>

                <div className='min-h-[85vh]'>

                    <Outlet />

                </div>

            </div>
        </div>
    )
}

export default Dashboard
