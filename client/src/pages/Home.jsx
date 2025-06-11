import React from 'react'
import pic from "../assets/profile_black_1.jpg"
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuChevronsDown } from "react-icons/lu";
import About from './About'
import Education from "./Education"
import Projects from './Projects';

import b from "../assets/leave.png"
import Header from '../components/Header';

const Home = () => {
  return (

    <div className=''>
      <div className='min-h-screen  bg-primary-dark pt-[72px]'>

        <div className='grid lg:grid-cols-[2fr_3fr] lg:mx-10 md:mx-[140px]  mx-7 lg:pt-14 md:pt-14'>

          {/* for desktop */}
          <div className='items-center justify-center p-3 mt-14 lg:pl-16 lg:flex  hidden'>
            <div className='relative'>
              <span className='corner top-left '></span>
              <span className='corner1 bottom-right '></span>
              <img src={pic} alt="" className='w-[220px] h-[254px] rounded-[40px] m-3 hover:scale-110 transition-all ' />
            </div>
          </div>

          {/* for tablet */}
           <div className='items-center justify-center p-3 mt-6 lg:hidden md:flex hidden'>
            <div className='relative'>
              <span className='corner top-left '></span>
              <span className='corner1 bottom-right '></span>
              <img src={pic} alt="" className='w-[220px] h-[234px] object-top m-4 object-cover rounded-2xl' />
            </div>
          </div>

          {/* for mobile */}
           <div className='items-center justify-center p-3 mt-6 flex md:hidden'>
            <div className='relative'>
              <img src={pic} alt="" className='w-[180px] h-[180px] object-top object-cover rounded-full' />
            </div>
          </div>

          <div className='flex'>
            <div className='text-primary-text flex-col extra-font-style flex items-start lg:mt-14 md:mt-[20%] mt-5 justify-start md:text-5xl text-3xl relative z-10'>
              <div className='flex flex-col gap-0.5'>
                <p className='md:pb-2'>Hi  {" "}, </p>
                <p className=''> i am ,{" "}<span className='text-terniary-dark'>Pallab Bag</span></p>
                <p className=''>Full <span className='text-[#59b806]'>stack</span> developer</p>
              </div>

              <div className='text-sm mt-5 lg:w-[60%] text-[#747573]'>
                <p>
                  A goal-oriented software developer with experience in building applications using modern technologies like <span className='text-[#59b806]'>React, MongoDB, Express.js, Node.js, and more</span>. I am seeking to leverage my technical skills to deliver exceptional user experiences.
                </p>
              </div>

              <div className='flex lg:mt-6 md:mt-12 mt-9 items-center lg:gap-7 md:gap-10 gap-5'>
                <div className='bg-terniary-dark  rounded flex items-center pl-0.5 cursor-pointer hover:bg-[#f04f0a]'>
                  <IoMdDownload size={20} />
                  <p className='text-base px-2 py-1.5'>Resume</p>
                </div>

                <Link className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><FaGithub size={20} /></Link>

                <Link className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><SiGmail size={20} /></Link>

                <Link className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><FaLinkedin size={20} /></Link>

              </div>

            </div>

            <div className='overflow-hidden absolute right-15 bottom-55 rotate-185 z-5 scale-120 object-scale-down select-none lg:block  hidden'>
              <img src={b} alt="" className="h-[500px] z-0" />
            </div>

            {/* <div className='relative flex justify-end right-[20px] -top-[120px] rotate-185 z-10 scale-120 pointer-events-none '>
              <img src={b} alt="" className="" />
            </div> */}

            

          </div>

        </div>

        <div className='items-center justify-center h-full mt-14 pt-14 text-primary-text flex sm:static relative bottom-7'><LuChevronsDown size={30} /></div>

      </div>

      {/* <About/> */}



      <Education/>
      <Projects/>
    </div>
  )
}

export default Home
