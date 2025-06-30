import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useSelector } from 'react-redux'
import SummaryApi from '../common/SummaryApi'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { setLogOut, setUserDetails } from '../store/userSlice'
import Axios from '../utils/Axios'
import { NavLink } from 'react-router-dom'
import ProfileWindowEdit from '../layout/Admin/ProfileWindowEdit'
import UserProfileEdit from '../layout/Admin/UserProfileEdit'
import { useGlobalContext } from '../provider/GlobalProvider'

const Profile = () => {

    const user = useSelector((state) => state?.user)
    const alldata = useSelector(state => state.allofdetails)
    const {fetchAllDetails} = useGlobalContext()

    const [userData, setUserData] = useState({
        name: user?.name,
        avatar: user?.avatar,
        _id: user?._id
    })
    const [openCreateWindow, setopenCreateWindow] = useState(false)
    const [openCreateWindowforDesktop, setopenCreateWindowforDesktop] = useState(false)

    const userUrl = `/dashboard/${user?.name?.toLowerCase()?.replace(" ", "-")}-${user?._id}`
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setUserData({
            name: user?.name,
            avatar: user?.avatar,
            _id: user?._id
        })

    }, [user, openCreateWindow, openCreateWindowforDesktop])


    const handleChange = (e) => {
        const { name, value } = e.target

        setUserData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

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


    const handleOnSubmit = async (e) => {
        e.preventDefault()

        const response = await Axios({
            ...SummaryApi.upadate_user_details,
            data: {
                name: userData?.name,
                _id: userData?._id
            }
        })

        const { data: responseData } = response

        if (responseData?.error) {
            toast.error(responseData?.message)
        }


        if (responseData?.success) {
            toast.success(responseData?.message)
            dispatch(setUserDetails(userData))

            setUserData((preve) =>{
                return{
                    ...preve,
                    name : userData?.name
                }
            })

        }
    }



    return (
        <section className='lg:mx-24 mx-14  mt-16'>


            {/*for desktop version*/}

            <div className='flex-col justify-center items-center lg:flex hidden'>

                <div className='flex flex-col items-center'>
                    {
                        userData?.avatar ? (
                            <>
                                <div className='w-[145px] h-[145px] border-gray-700 rounded-full overflow-hidden border'>
                                    <img src={userData?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                                </div>
                            </>
                        ) : (

                            <div className='pb-0.5 text-2xl font-bold'><CgProfile size={60} /></div>
                        )
                    }
                    <button onClick={() => setopenCreateWindowforDesktop(true)} className='cursor-pointer my-2 rounded-2xl px-4 py-1 border-2 border-terniary-dark text-terniary-dark text-base hover:bg-terniary-dark hover:text-primary-dark font-semibold'>Edit</button>
                </div>

                <form onSubmit={handleOnSubmit} className='mt-2 lg:max-w-[80%]' >

                    <div className='group mb-2'>
                        <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Name : </p>
                        <input type="text" onChange={handleChange} name='name' placeholder='Enter your name...' value={userData?.name} required className='bg-[#b2b8de] rounded lg:min-w-[420px] lg:max-w-[420px] md:min-w-[320px] md:max-w-[320px] min-w-[220px] max-w-[220px] h-8 text-base outline-none px-2 py-5 mt-1 text-[#100f0f]' />
                    </div>

                    <button className="p-2  bg-[#2c6abc] hover:bg-[#2463b5]  text-[#d1dcfb] md:min-w-[320px] lg:min-w-[420px] lg:max-w-[420px] md:max-w-[320px] min-w-[220px] max-w-[220px] mt-2 rounded  font-semibold cursor-pointer">Update name</button>

                </form>
            </div>


            {/* for mobile and tablet version */}

            <div className='lg:hidden block md:ml-10 md:mr-10'>

                <div className='flex md:gap-10 gap-8 mb-4 items-center'>

                    {
                        !userData?.avatar ? (
                            <>
                                <div className='pb-0.5 text-2xl font-bold md:block hidden'><CgProfile size={120} /></div>

                                <div className='pb-0.5 text-2xl font-bold md:hidden'><CgProfile size={60} /></div>
                            </>
                        ) : (
                            <>
                                <div className='w-[70px] h-[70px] rounded-full overflow-hidden border'>
                                    <img src={userData?.avatar} alt="" className='w-full h-full object-cover rounded-full' />
                                </div>
                            </>
                        )
                    }

                    <div>
                        <p className='max-w-[6ch] break-all text-sm line-clamp-2 leading-tight'>{user?.name}</p>
                        <button onClick={() => setopenCreateWindow(true)} className=' my-2 rounded-2xl px-4 py-1 border-2 border-terniary-dark text-terniary-dark text-base hover:bg-terniary-dark hover:text-primary-dark font-semibold'>Edit</button>
                    </div>

                </div>

                <div className='min-h-1 max-h-1 border-b-2 border-b-[#404a57] my-2'></div>

                <div className=''>

                    {
                        !user?.admin_verify ? (
                            <div className='bg-gray-500 text-base my-12 rounded px-4 py-4 w-fit md:mt-16'>
                                <div>
                                    <p className='text-base leading-tight mb-2 font-semibold text-[#d9d9e0]'>verify your account by admin ?</p>

                                    <form action="" className="flex flex-col sm:flex-row gap-2">

                                        <input type="email" placeholder='Enter your email' className='bg-primary-text outline-none rounded text-black px-2 py-1 text-sm w-full' />
                                        <button className='bg-terniary-dark py-2 px-4 rounded text-sm text-white w-full sm:w-auto'>send</button>
                                    </form>

                                </div>
                            </div>
                        ) : (
                            <div className='py-4 text-lg flex flex-col md:gap-y-0.5'>

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



            {/* for mobile and tablet version  */}

            {
                openCreateWindow && (
                    <ProfileWindowEdit close={() => setopenCreateWindow(false)} />
                )
            }

            {/*for desktop version*/}

            {
                openCreateWindowforDesktop && (
                    <UserProfileEdit close={() => setopenCreateWindowforDesktop(false)} />
                )
            }



        </section>
    )
}

export default Profile
