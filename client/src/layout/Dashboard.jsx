import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MarginBottom from '../utils/MarginBottom'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const user = useSelector((state) => state?.user)
    const userUrl = `/dashboard/${user?.name?.toLowerCase()?.replace(" ", "-")}-${user?._id}`


    return (
        <div className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px]'>
            <div className='grid lg:grid-cols-[260px_1fr] container mx-auto'>

                <div className='sticky top-[104px] overflow-y-auto border-r-3 border-r-slate-600 max-h-[calc(100vh-104px)] lg:block hidden'>

                    <div className='mt-10 border-b-3 border-slate-600'>

                        <p className='mb-1 text-xl font-bold'>My account</p>

                        <div className='flex gap-2 items-center pb-4 '>

                            <p className='text-sm'>{user?.name}</p>
                            <NavLink to={userUrl} className='hover:text-[#fc5e03] cursor-pointer'><FaExternalLinkAlt /></NavLink>

                        </div>

                    </div>

                    <div className='mr-6'>
                        {

                            user?.admin_verify ? (
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
                                <div className='py-4 text-base flex flex-col'>

                                    <Link to={`${userUrl}/educationEdit`}>Education</Link>

                                    <Link to={`${userUrl}/projectEdit`}>Project</Link>

                                    <Link to={`${userUrl}/skillEdit`}>Skill</Link>

                                    <Link to={`${userUrl}/othersEdit`}>Other</Link>

                                    <Link to={""}>LogOut</Link>

                                    

                                    {/* project details , skill details , education details , Logout , others details */}
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
