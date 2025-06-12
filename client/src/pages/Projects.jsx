import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import binkeyitDemo from "../assets/binkeyitDemo.png"
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiVite } from "react-icons/si";

const Projects = () => {
  return (
    <section className='bg-primary-black  p-10 text-primary-text extra-font-style md:p-14   pt-10 pb-5'>
      <p className='font-bold text-2xl mb-6 pl-6'>project ShowCase</p>
      <div className='w-full'>

        <div className='flex overflow-x-auto overflow-y-hidden gap-6 scrollbar-custom scroll-smooth px-5 pb-3'>

          <div className='md:max-w-[350px] md:min-w-[350px] bg-[#222325]  min-w-[250px] max-w-[250px] min-h-[525px] max-h-[525px] rounded-xl border border-primary-text shadow-2xl px-2 text-base'>

            <div className='flex justify-around pt-3'>
              {/* /title */}
              <p className='w-[60%] overflow-hidden font-semibold fontw text-xl  bg-gradient-to-r from-[#17f5a4] to-[#0f38ef] bg-clip-text text-transparent'>Binkeyit</p>

              {/* live link and git link */}
              <div className='flex gap-4'>
                <Link to={"https://binkeyit-full-stack-oddf.vercel.app/"} className='hover:bg-[#9b9a9a4a] p-1 rounded w-fit h-fit'><FaExternalLinkAlt size={15} /></Link>
                <Link to={"https://github.com/pallab-at-tech/Binkeyit-Full-stack"} className='hover:bg-[#9b9a9a4a] p-1 rounded w-fit h-fit'><FaGithub size={18} /></Link>
              </div>
            </div>

            <p className='pl-4 pt-1 text-[#cbd5e1] text-sm line-clamp-2'> A fully scalable e-commerce platform with authentication, payments, and admin control.</p>

            {/* image and hover to video */}
            <div className='min-w-[80%]'>
              <div className='w-full p-5 overflow-hidden flex justify-center items-center hover:scale-125 transition-all'>
                <img src={binkeyitDemo} alt="" className='object-scale-down rounded-md' />
              </div>
              {/* <video src=""></video> */}
            </div>

            {/* key feature in 2 or 3 points */}
            <div className=''>

              <div className='pl-3'>
                <p className='font-semibold  bg-gradient-to-r from-[#d9ff00] to-[#f39428] bg-clip-text text-transparent inline-block'>Feature</p>

                <ul className='list-disc pl-7 text-[#d1d3dc] text-sm min-h-[80px] max-h-[80px] overflow-y-auto scrollbar-custom'>
                  <li>User Authentication & Profile</li>
                  <li>Product & Inventory</li>
                  <li>Payment & Offers</li>
                  <li>Admin Features</li>
                </ul>
              </div>

              {/* tech use */}

              <p className='font-semibold  bg-gradient-to-r from-[#d9ff00] to-[#f39428] bg-clip-text text-transparent inline-block pt-1 pl-3'>Tech</p>

              <div className='flex pl-3 gap-2 pt-2 items-center flex-wrap min-h-[72px] max-h-[72px] overflow-y-scroll scrollbar-custom'>

                <div className='px-2 py-1 rounded-full text-center text-[13px] bg-[#0b1c2c] text-[#61DBFB] hover:scale-110 transition-all' style={{ textShadow: '0 0 8px #61DBFB' }}>
                  react
                </div>
                <div className='px-2 py-1 rounded-full text-center text-[13px] bg-[#0b1c2c] text-[#61DBFB] hover:scale-110 transition-all' style={{ textShadow: '0 0 8px #61DBFB' }}>
                  tailwind
                </div>
                <div className='px-2 py-1 rounded-full text-center text-[13px] bg-[#0b1c2c] text-[#61DBFB] hover:scale-110 transition-all' style={{ textShadow: '0 0 8px #61DBFB' }}>
                  mongodb
                </div>
                <div className='px-2 py-1 rounded-full text-center text-[13px] bg-[#0b1c2c] text-[#61DBFB] hover:scale-110 transition-all' style={{ textShadow: '0 0 8px #61DBFB' }}>
                  express
                </div>
                <div className='px-2 py-1 rounded-full text-center text-[13px] bg-[#0b1c2c] text-[#61DBFB] hover:scale-110 transition-all' style={{ textShadow: '0 0 8px #61DBFB' }}>
                  node js
                </div>
                <div className='px-2 py-1 rounded-full text-center text-[13px] bg-[#0b1c2c] text-[#61DBFB] hover:scale-110 transition-all' style={{ textShadow: '0 0 8px #61DBFB' }}>
                  Vite
                </div>
              </div>

              <div className='flex justify-between pr-10 items-center pl-3 md:py-3 py-5 flex-wrap gap-y-2'>
                <p className="text-sm bg-gradient-to-r from-[#3af574] to-[#18b4f0] bg-clip-text text-transparent font-medium">
                  Want to know more?
                </p>
                <button className='cursor-pointer bg-terniary-dark py-1 px-2 rounded-2xl mb-0.5 hover:scale-110 transition-all bg-gradient-to-r from-[#034a1a] to-[#074fbc]'>click here</button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects
