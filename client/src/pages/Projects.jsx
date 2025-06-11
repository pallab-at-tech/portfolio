import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import binkeyitDemo from "../assets/binkeyitDemo.png"

const Projects = () => {
  return (
    <section className='bg-primary-black p-20 pt-0 text-primary-text extra-font-style'>
      <p className='font-bold text-2xl mb-6 pl-6'>project ShowCase</p>
      <div className='w-full'>

        <div className='flex overflow-auto gap-6 scrollbar-none scroll-smooth px-5'>

          <div className='max-w-[350px] bg-[#222325] min-w-[350px] rounded-xl border border-primary-text shadow-2xl px-2 text-base'>

            <div className='flex justify-around pt-3'>
              {/* /title */}
              <p className='w-[60%] overflow-hidden font-semibold fontw text-xl  bg-gradient-to-r from-[#17f5a4] to-[#0f38ef] bg-clip-text text-transparent'>Binkeyit</p>

              {/* live link and git link */}
              <div className='flex gap-4'>
                <Link to={"https://binkeyit-full-stack-oddf.vercel.app/"} className='hover:bg-[#9b9a9a4a] p-1 rounded w-fit h-fit'><FaExternalLinkAlt size={15}/></Link>
                <Link to={"https://github.com/pallab-at-tech/Binkeyit-Full-stack"} className='hover:bg-[#9b9a9a4a] p-1 rounded w-fit h-fit'><FaGithub size={18}/></Link>
              </div>
            </div>

            <p className='pl-4 pt-1 text-[#d1d3dc] text-sm line-clamp-2'>A full scalable E-commerce website where peaple can shopping</p>

            {/* image and hover to video */}
            <div>
              <div className='w-full p-5 overflow-hidden flex justify-center items-center hover:scale-125 transition-all'>
                <img src={binkeyitDemo} alt="" className='object-scale-down rounded-md'/>
              </div>
              {/* <video src=""></video> */}
            </div>

            {/* key feature in 2 or 3 points */}
            <div className=''>

              <div className='pl-3'>
                <p className='font-semibold  bg-gradient-to-r from-[#efeb05] to-[#f39428] bg-clip-text text-transparent inline-block'>Feature</p>

                <ul className='list-disc pl-7 text-[#d1d3dc] text-sm'>
                  <li>User Authentication & Profile</li>
                  <li>Product & Inventory</li>
                  <li>Payment & Offers</li>
                  <li>Admin Features</li>
                </ul>
              </div>

              <div className='flex justify-between pr-10 items-center pl-3 py-3'>
                <p className='text-sm  bg-gradient-to-r from-[#efeb05] to-[#f39428] bg-clip-text text-transparent'>Will you know more ?</p>
                <button className='cursor-pointer bg-terniary-dark py-0.5 px-1 rounded-full mb-0.5 hover:scale-110 transition-all bg-gradient-to-r from-[#28a203] to-[#058cb9]'>click here</button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects
