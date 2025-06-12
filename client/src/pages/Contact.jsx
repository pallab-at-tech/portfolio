import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <section className='bg-primary-black p-10 text-primary-text extra-font-style pt-10 md:p-14 pb-5'>

      {/* for margin */}
      <div className="flex justify-center">
        <div className="h-[1px] w-full  bg-[#aba1a180] rounded-full" />
      </div>

      <div className='px-20 pt-10 '>
        <h1 className='font-bold text-2xl pb-4'>Contact me</h1>

        <div>

          <div>
            <h2 className='font-bold text-lg pb-2'>Get in touch</h2>

            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <MdOutlineMailOutline/>
                <p>Email</p>
              </div>

              <div className='flex items-center gap-2'>
                <FaPhone/>
                <p>Phone no.</p>
              </div>

              <div className='flex items-center gap-2'>
                <IoLocationOutline/>
                <p>Location</p>
              </div>

              <div className='flex items-center gap-2'>
                <CiLinkedin/>
                <p>LinkedIn</p>
              </div>

            </div>

          </div>

          <div>

          </div>

        </div>
      </div>


    </section>
  )
}

export default Contact
