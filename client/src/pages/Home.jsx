import React from 'react'
import pic from "../assets/profile_black_1.jpg"
import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
import { LuChevronsDown } from "react-icons/lu";
import Education from "./Education"
import Projects from './Projects';

import b from "../assets/leave.png"
import Skills from './Skills';
import Contact from './Contact';
import { useSelector } from 'react-redux'
import { useGlobalContext } from '../provider/GlobalProvider';
import resume from "../assets/resume.pdf"
import Footer from '../components/Footer';

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

    <div className='h-screen overflow-y-auto hide-scrollbar' id='fullScreenId' >

      {/* Home components */}
      <div className={`h-screen flex flex-col overflow-hidden ${darkMode ? "background-image" : "background-image-light"}  pt-[72px]`} id='realHomeId'>

        <div id='HomeID' className='relative flex-1'>

          <div className='absolute overflow-hidden -top-14 right-1 rotate-185 scale-120 object-scale-down select-none lg:block hidden'>
            <img src={b} alt="" className="h-[500px] object-cover z-0 left-right-animation overflow-hidden" />
          </div>

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

                <div className={`text-sm mt-1 md:mt-5 lg:w-[60%] ${darkMode ? "text-[#747573]" : "text-[#332301]"} `}>
                  <p className=''>
                    A goal-oriented software developer with experience in building applications using modern technologies like <span className={`${darkMode ? "text-[#59b806]" : "text-[#a80202]"} font-semibold`}>React, MongoDB, Express.js, Node.js, and more</span>. I am seeking to leverage my technical skills to deliver exceptional user experiences.
                  </p>
                </div>

                <div className='flex lg:mt-6 md:mt-12 mt-9 items-center lg:gap-7 md:gap-10 gap-5'>

                  <div onClick={() => downloadFileAtURL(resume)} className={`${darkMode ? "bg-[#0b258c] hover:bg-[#0b358f]" : "bg-[#900771] hover:bg-[#87066a] text-[#d3c6c6]"}  rounded flex items-center pl-0.5 cursor-pointer `}>
                    <IoMdDownload size={20} />
                    <p className='text-base px-2 py-1.5'>Resume</p>
                  </div>

                  <Link to={allOf.linkedin_link} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><FaLinkedin size={darkMode ? 25 : 28} /></Link>

                  <Link to={allOf.github_link} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><FaGithub size={darkMode ? 25 : 28} /></Link>

                  <Link to={`mailto:${allOf.email}`} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><SiGmail size={darkMode ? 25 : 28} /></Link>

                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='flex items-center justify-center my-3 text-[#5e5b5b] animate-float'>
          <LuChevronsDown size={26} />
        </div>

      </div>

      <Education />
      <Projects />

      <div className=''>
        <Skills />
        <Contact />
      </div>

      <Footer />
    </div >
  )
}

export default Home
