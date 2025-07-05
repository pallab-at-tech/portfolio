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
import Skills from './Skills';
import Contact from './Contact';
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useGlobalContext } from '../provider/GlobalProvider';
import resume from "../assets/resume.pdf"

const Home = () => {

  const allOf = useSelector(state => state.allofdetails)
  const { darkMode, setDarkMode } = useGlobalContext();
  

  const downloadFileAtURL = (url) => {
    
    const fileName = "MyResume.pdf"

    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()

  }

  return (

    <div className='' >

      <div className={`min-h-screen ${darkMode ? "background-image" : "background-image-light"}  pt-[72px]`} id='realHomeId'>

        <Element id='HomeID'>

          <div className='grid lg:grid-cols-[2fr_3fr] lg:mx-10 md:mx-[140px] pt-2  p-10 md:p-0 lg:pt-14 md:pt-14'>

            {/* for desktop */}
            <div className='items-center justify-center p-3 mt-14 lg:pl-16 lg:flex hidden'>

              <div className={`${darkMode ? "outer-box" : "outer-box-light"}`}>

                <div className={`${darkMode ? "card" : "card-light"}`}>

                  <img src={pic} alt="" className='w-[220px] h-[254px] rounded-[40px]' />

                </div>

              </div>

            </div>

            {/* for tablet */}
            <div className='items-center justify-center p-3 mt-6 lg:hidden md:flex hidden'>
              <div className={`${darkMode ? "outer-box" : "outer-box-light-md"}`}>
                <div className={`${darkMode ? "card" : "card-light-md"}`}>

                  <img src={pic} alt="" className='w-[220px] h-[234px] object-top m-4 object-cover rounded-3xl' />

                </div>
              </div>
            </div>

            {/* for mobile */}
            <div className='items-center justify-center flex md:hidden'>
              <div className='relative'>
                <img src={pic} alt="" className='w-[180px] h-[180px] object-top object-cover rounded-full' />
              </div>
            </div>

            <div className='flex'>
              <div className={`${darkMode ? "text-primary-text" : "text-primary-light-text"} flex-col extra-font-style flex items-start lg:mt-14 md:mt-[20%] mt-1 justify-start md:text-5xl text-3xl relative z-10`}>
                <div className='flex flex-col gap-0.5'>
                  <p className={`md:pb-2  ${darkMode ? "md:fast-letter-big-md fast-letter-big" : "md:fast-letter-big-md-light fast-letter-big-light"}`}>Hi  {" "}, </p>
                  <p className=''> i am ,{" "}<span className={`${darkMode ? "text-terniary-dark" : "text-[#a80000]"} font-semibold`} style={darkMode ? { textShadow: 'rgb(187 80 8 / 50%) 1px 1px 8px' } : { textShadow: 'rgb(187 0 0 / 50%) 2px 0px 6px' }}>Pallab Bag</span></p>
                  <p className=''>Full <span className={`${darkMode ? "text-[#0377dd]" : "text-[#a0003f]"} font-semibold`} style={darkMode ? { textShadow: 'rgba(10, 21, 240, 0.5) 2px 2px 8px' } : { textShadow: 'rgba(240, 10, 143, 0.5) 2px 0px 6px' }}>stack</span> developer</p>
                </div>
{/* #000000 */}
                <div className={`text-sm mt-1 md:mt-5 lg:w-[60%] ${darkMode ? "text-[#747573]" : "text-[#332301]"} `}>
                  <p className=''>
                    A goal-oriented software developer with experience in building applications using modern technologies like <span className={`${darkMode ? "text-[#59b806]" : "text-[#a80202]"} font-semibold`}>React, MongoDB, Express.js, Node.js, and more</span>. I am seeking to leverage my technical skills to deliver exceptional user experiences.
                  </p>
                </div>

                <div className='flex lg:mt-6 md:mt-12 mt-9 items-center lg:gap-7 md:gap-10 gap-5'>

                  <div onClick={()=>downloadFileAtURL(resume)} className={`${darkMode ? "bg-[#0b258c] hover:bg-[#0b358f]" : "bg-[#900771] hover:bg-[#87066a] text-[#d3c6c6]"}  rounded flex items-center pl-0.5 cursor-pointer `}>
                    <IoMdDownload size={20} />
                    <p className='text-base px-2 py-1.5'>Resume</p>
                  </div>

                  <Link to={allOf.linkedin_link} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><FaLinkedin size={darkMode ? 25 : 30} /></Link>

                  <Link to={allOf.github_link} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><FaGithub size={darkMode ? 25 : 30} /></Link>

                  {/* <Link to={allOf.email} className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><SiGmail size={20} /></Link> */}


                </div>

              </div>

              <div className='overflow-hidden absolute right-15 bottom-55 rotate-185 z-5 scale-120 object-scale-down select-none lg:block  hidden'>
                <img src={b} alt="" className="h-[500px] z-0  left-right-animation" />
              </div>

              {/* <div className='relative flex justify-end right-[20px] -top-[120px] rotate-185 z-10 scale-120 pointer-events-none '>
              <img src={b} alt="" className="" />
            </div> */}



            </div>

          </div>

        </Element>

        <div className='items-center justify-center h-full mt-10 pt-14 text-[#5e5b5b] flex sm:static relative bottom-7 animate-float'><LuChevronsDown size={30} /></div>


      </div>



      {/* <About/> */}



      <Education />
      <Projects />


      <div className=''>
        <Skills />
        <Contact />
      </div>
    </div >
  )
}

export default Home
