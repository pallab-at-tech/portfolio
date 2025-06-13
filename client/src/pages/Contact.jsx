import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='bg-primary-black text-primary-text extra-font-style pt-10 lg:p-10  pb-5'>

      {/* for margin */}
      <div className="flex justify-center">
        <div className="h-[1px] w-full  bg-[#aba1a180] rounded-full" />
      </div>

      <div className='px-20 pt-10 '>
        <h1 className='font-bold text-2xl pb-4'>Contact me</h1>

        <div className='grid lg:grid-cols-2  lg:gap-4 md:gap-10 gap-4'>

          <div>
            <h2 className='font-bold text-lg pb-2'>Get in touch</h2>

            <div className='flex flex-col gap-3'>

              <div className='flex items-center gap-4'>
                <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                  <MdOutlineMailOutline size={26} />
                </div>
                <div className='text-[#abaeb2] text-lg peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                  <p>Email</p>
                  <p className='text-[#ededed]'>Pallab861774@gmail.com</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                  <FaPhone size={26} />
                </div>
                <div className='text-[#abaeb2] text-lg peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                  <p>Phone no.</p>
                  <p className='text-[#ededed]'>0123456789</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                  <IoLocationOutline size={26} />
                </div>
                <div className='text-[#abaeb2] text-lg peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                  <p>Location</p>
                  <p className='text-[#ededed]'>Singur , Hooghly , India</p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                  <CiLinkedin size={26} />
                </div>
                <div className='text-[#abaeb2] text-lg peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                  <p>LinkedIn</p>
                  <Link to={"https://www.linkedin.com/in/pallab-bag-35115a2b1/"} className='text-[#ededed]'>https://www.linkedin.com/in/pallab-bag-35115a2b1/</Link>
                </div>
              </div>

            </div>

          </div>

          <div>

            <h2 className='font-bold text-lg pb-2'>Send me a message</h2>

            <div className='bg-primary-dark rounded-xl p-6'>
              <div className='font-bold text-lg pb-6 flex gap-4 justify-between'>

                <div className='group'>

                  <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Name</p>
                  <input type="text" className='bg-[#444444f2] rounded outline-none' />

                </div>

                <div className='group'>

                  <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Email</p>
                  <input type="email" className='bg-[#444444f2] rounded outline-none' />

                </div>

              </div>

              <div className='group font-bold text-lg'>

                <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1'>Message</p>
                <input type="text" className='bg-[#444444f2] rounded outline-none h-16 w-full' />

              </div>

              <div className='pt-4 font-bold'>
                <input type="submit" className='bg-[#444444f2] rounded outline-none w-full h-10' />
              </div>

            </div>

          </div>

        </div>
      </div>


    </section>
  )
}

export default Contact
