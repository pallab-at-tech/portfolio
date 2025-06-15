import React from 'react'
import {Link} from 'react-router-dom'

const SignInPage = () => {
  return (
    <section className='min-h-[calc(100vh-32px)] bg-primary-dark text-primary-text extra-font-style md:px-14 pt-[72px]'>
      <div className='container mx-auto  md:max-w-lg max-w-[95%] p-7 rounded-md'>

        <form action="" className='grid gap-4 pl-6 py-2 pt-4 text-[#e3e5ea] bg-gradient-to-br from-[#43547a] to-[#232a36] mt-14'>


          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email : </p>
            <input type="email" className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <div className='group'>
            <p className='font-semibold group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Password : </p>
            <input type="text" className='bg-[#b2b8de] rounded w-[90%] h-8 text-base outline-none p-2 mt-1 text-[#100f0f]' />
          </div>

          <button className='p-2 bg-[#2c6abc] hover:bg-[#2463b5] w-[90%] mt-2 rounded text-[#d1dcfb] font-semibold'>Login</button>

          <div className='flex md:flex-row gap-x-1 flex-col  justify-center items-center pr-6 pb-2'>
            <p className='text-base  text-sky-50'>Already have account ? </p>
            <Link to={"/SignUp"} className='text-blue-300  flex justify-center'>Register</Link>
          </div>

        </form>


      </div>
    </section>
  )
}

export default SignInPage
