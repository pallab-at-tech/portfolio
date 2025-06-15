import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <section className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px]'>

      <div className='container mx-auto  max-w-lg p-7 rounded-md'>

        <div className='flex items-center justify-center rounded mt-4 text-sm font-normal'>
          <p className='bg-[#d2645a]  leading-tight text-red-800 p-1.5 font-bold rounded'>Note: After registration, your account will be verified by an admin. Until then, you won't have permission to access admin privileges. </p>
        </div>

        <form action="" className='grid gap-4 pl-6 py-1 text-[#e3e5ea] bg-gradient-to-br from-[#43547a] to-[#232a36] mt-4'>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Name :</p>
            <input type="text" className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email : </p>
            <input type="email" className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
            <input type="text" className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Confirm password :</p>
            <input type="text" className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <button className='p-2 bg-[#2c6abc] hover:bg-[#2463b5] w-[90%] mt-2 rounded text-[#d1dcfb] font-semibold'>Register</button>
          <p className='pl-6 text-base pt-1 text-sky-50'>Already have account ? <Link to={"/SignIn"} className='text-blue-300 p-2'>Login</Link></p>

        </form>


      </div>
    </section>
  )
}

export default SignUpPage
