import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast'
import TickMark from '../utils/TickMark';

const Contact = () => {

  const allOf = useSelector(state => state.allofdetails)
  const formSubmit = useRef()
  const [tick, setTick] = useState(true)
  const [loaderforEmailSend, setLoaderforEmailSend] = useState(false)

  useEffect(() => {
    if (!tick) return;
    const t = setTimeout(() => setTick(false), 1500);
    return () => clearTimeout(t);
  }, [tick]);


  const sendEmail = async (e) => {

    e.preventDefault()

    setLoaderforEmailSend(true);

    await emailjs.sendForm("service_u9g6q7r", "template_xpnpog4", formSubmit.current, "jMGRhRXqtsz3n11zT").then(
      () => {
        toast.success("Email sent successfully..")
        formSubmit.current.reset()
        setTick(true)
      },
      (error) => {
        toast.error("Internal error occurred , please try again later..")
      }
    )

    setLoaderforEmailSend(false)

  }

  return (
    <section className='bg-primary-black text-primary-text extra-font-style  md:px-20 p-10  pb-10'>

      {/* for margin */}
      <div className="flex justify-center">
        <div className="h-[1px] w-full  bg-[#aba1a180] rounded-full" />
      </div>

      <Element id='ContactID'>

        <div className='pt-10'>
          <h1 className='font-bold text-2xl pb-4'>Contact me</h1>

          <div className='flex flex-col md:flex-row items-start justify-between lg:gap-8 md:gap-10 gap-8'>

            <div className=''>
              <h2 className='font-bold text-lg pb-3'>Get in touch</h2>

              <div className='flex flex-col gap-3'>

                <div className='flex items-center gap-4'>
                  <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                    <MdOutlineMailOutline size={26} />
                  </div>
                  <div className='text-[#abaeb2] text-sm md:text-base peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                    <p>Email</p>
                    <p className='text-[#ededed] break-all block'>{allOf.email}</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                    <FaPhone size={26} />
                  </div>
                  <div className='text-[#abaeb2] text-sm md:text-base peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                    <p>Phone no.</p>
                    <p className='text-[#ededed] break-all block'>{allOf.contact_number}</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                    <IoLocationOutline size={26} />
                  </div>
                  <div className='text-[#abaeb2] text-sm md:text-base peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                    <p>Location</p>
                    <p className='text-[#ededed] break-all block'>Singur , Hooghly , India</p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='p-1.5 peer bg-[#272626] text-[#cacccf] hover:text-[#dbdcde] rounded-full hover:scale-105 transition duration-200 hover:-translate-y-0.5 hover:bg-[#3a3a3a]'>
                    <CiLinkedin size={26} />
                  </div>
                  <div className='text-[#abaeb2] text-sm md:text-base peer-hover:text-[#dbdcde] transition duration-200 peer-hover:scale-y-100  peer-hover:-translate-y-0.5'>
                    <p>LinkedIn</p>
                    <Link to={allOf.linkedin_link} className='text-[#ededed] break-all block'>{allOf.linkedin_link}</Link>
                  </div>
                </div>

              </div>

            </div>

            <form ref={formSubmit} onSubmit={sendEmail} className='lg:pr-24'>

              <h2 className='font-bold text-lg pb-3'>Send me a message</h2>

              <div className='bg-primary-dark rounded-xl p-6'>
                <div className=' text-sm pb-3 flex flex-row flex-wrap justify-between items-center gap-3'>

                  <div className='group'>

                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1 font-semibold pr-1'>Name</p>
                    <input type="text" name='name' required className='bg-[#444444f2] rounded outline-none w-full p-2' />

                  </div>

                  <div className='group'>

                    <p className='group-hover:scale-y-105 transition-all duration-500 group-hover:-translate-y-1 font-semibold pr-1'>Email</p>
                    <input type="email" name='email' required className='bg-[#444444f2] rounded outline-none w-full p-2' />

                  </div>

                </div>

                <div className='group  text-sm'>

                  <p className='group-hover:scale-y-105 font-semibold transition-all duration-500 group-hover:-translate-y-1 pr-1'>Message</p>
                  <textarea name="message" id="" required className='bg-[#444444f2] rounded outline-none h-16 max-h-16 w-full p-2'></textarea>

                </div>

                <div className='pt-4 font-semibold '>
                  <button className='bg-[#444444f2] hover:bg-[#393939f2] rounded outline-none w-full h-8 cursor-pointer'>
                    {
                      loaderforEmailSend ? (
                        <div className='flex gap-7 items-center justify-center'>
                          <p>sending</p>
                          <div className='email_loader'></div>
                        </div>
                      ) : (

                        <div>
                          submit
                        </div>

                      )
                    }
                  </button>
                </div>

              </div>

            </form>

          </div>
        </div>


      </Element>


    </section>
  )
}

export default Contact
