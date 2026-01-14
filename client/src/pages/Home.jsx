import React, { useEffect, useRef, useState } from 'react'
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
import Internship from './Internship';

const Home = () => {

  const allOf = useSelector(state => state.allofdetails)
  const { darkMode } = useGlobalContext();

  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null);

  const downloadFileAtURL = (url) => {

    const fileName = "MyResume.pdf"

    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()

  }

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);


  return (

    <div className='h-screen overflow-y-auto hide-scrollbar' id='fullScreenId' >

      {/* Home components */}
      <div className={`h-screen flex flex-col overflow-hidden ${darkMode ? "background-image" : "background-image-light"} pt-[72px]`} id='realHomeId'>

        <div id='HomeID' className='relative flex-1'>

          {/* Animated leave png */}
          <div className='absolute overflow-hidden -top-[150px] lg:-top-[140px] -right-[30px] lg:right-7 rotate-[180deg] lg:rotate-[175deg] scale-[125%] sm:scale-[140%]  object-scale-down select-none sm:block hidden'>
            <img src={b} alt="" className="h-[500px] object-cover z-0 left-right-animation overflow-hidden" />
          </div>

          {/* for window */}
          <div className='lg:grid hidden lg:grid-cols-[2fr_3fr] mx-10 p-0 pt-14'>

            <div className='items-center justify-center p-3 mt-14 pl-16 flex'>

              <div className={`${darkMode ? "outer-box" : "outer-box-light"}`}>

                <div className={`${darkMode ? "card" : "card-light"}`}>

                  <img src={pic} alt="" className='w-[220px] h-[254px] rounded-[40px]' />

                </div>

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

                  <div onClick={() => downloadFileAtURL(resume)} className={`${darkMode ? "bg-[#0b258c] hover:bg-[#0b358f]" : "bg-[#900771] hover:bg-[#87066a] text-[#d3c6c6]"}  rounded flex gap-1 items-center px-2.5 py-1.5 cursor-pointer `}>
                    <IoMdDownload size={20} />
                    <p className='text-base'>Resume</p>
                  </div>

                  <Link to={allOf.linkedin_link} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><FaLinkedin size={darkMode ? 25 : 28} /></Link>

                  <Link to={allOf.github_link} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><FaGithub size={darkMode ? 25 : 28} /></Link>

                  <Link to={`mailto:${allOf.email}`} className={`${darkMode ? "text-[#59b806] hover:shadow-[#59b806]/50" : "text-[#000000]"} p-1 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg rounded-md `}><SiGmail size={darkMode ? 25 : 28} /></Link>

                </div>
              </div>
            </div>
          </div>

          {/* for mobile and tablet */}
          <div className='flex lg:hidden items-center justify-center w-full h-[calc(100vh-72px)]'>
            <div className='grid grid-rows-[120px_1fr_1fr] sm:grid-rows-[160px_1fr_1fr] px-10 py-5 mt-4 sm:px-[100px] sm:py-10'>

              {/* Tittle and text section */}
              <div className={`leading-[1.01] text-4xl sm:text-[46px] ${darkMode ? "text-primary-text" : "text-primary-light-text"}`}>

                <div>
                  <span className={`text-[45px] sm:text-[60px] ${darkMode ? "first-dark-mode" : "first-light-mode"} font-semibold`}>H</span>
                  <span>ello {" ,"}</span>
                </div>

                <div>
                  <span className='text-[45px] sm:text-[60px]'>I</span> 'm {" "}
                  <span
                    className={`${darkMode ? "text-terniary-dark" : "text-[#a80000]"} font-semibold`} style={darkMode ? { textShadow: 'rgb(187 80 8 / 50%) 1px 1px 8px' } : { textShadow: 'rgb(187 0 0 / 50%) 2px 0px 6px' }}
                  >
                    Pallab Bag
                  </span>
                </div>

                <div className='text-[17px] flex items-center gap-2 py-2'>
                  <div className={`h-[6px] w-[6px] ${darkMode ? "bg-sky-500" : "bg-amber-800 "} rounded-full`}></div>
                  <span className={`${darkMode ? "text-[#bdcbebeb]" : "text-[#481e03d8]"}`}>MERN STACK DEVELOPER</span>
                </div>
              </div>

              {/* profile and social media section */}
              <div className='grid grid-cols-[1fr_80px] pt-5 pb-5 '>

                <div className='relative w-fit h-fit'>
                  {/* Image layer */}
                  <div className={`relative rounded-2xl p-1.5 border ${darkMode ? "border-blue-800" : "border-[#92220690]"} overflow-hidden`}>
                    {/* Neon spotlight */}
                    <div className={`${loaded ? "opacity-100" : "opacity-0"} absolute inset-0 rounded-2xl ${darkMode ? "neon-spotlight-dark" : "neon-spotlight-light"}`}></div>

                    {/* Image */}
                    <img
                      src={pic}
                      alt=""
                      ref={imgRef}
                      onLoad={() => setLoaded(true)}
                      fetchPriority='high'
                      loading='eager'
                      className={`relative z-10 h-[28vh] sm:h-[29vh] w-full rounded-xl object-contain
                      transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                    />

                    {!loaded && (
                      <div className={`absolute inset-0 animate-pulse  ${darkMode ? "background-image" : "background-image-light"} rounded-xl`} />
                    )}
                  </div>

                  {/* social media section */}
                  <div className="absolute -right-[65px] sm:-right-[230px] bottom-2 space-y-3 sm:space-y-4">

                    <div className='flex items-center gap-4'>
                      <Link
                        to={allOf.linkedin_link}
                        className={`
                            group
                            flex items-center justify-center
                            w-11 h-11
                            rounded-xl
                            border border-amber-700
                            transition-all duration-300
                            ${darkMode ? "bg-[#913800] text-[#59b806] shadow-[0_0_5px_0_rgb(89,184,6,0.4)] hover:shadow-[0_0_18px_rgba(89,184,6,0.6)]" : "bg-[#fee7c0] text-black hover:shadow-lg"}
                        `}
                      >
                        <FaLinkedin
                          size={22}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </Link>

                      <div className={`items-center gap-2 hidden sm:flex ${darkMode ? "text-white" : "text-[#381500]"} `}>
                        <div className={`h-[6px] w-[6px] rounded-full ${darkMode ? "bg-green-500" : "bg-red-900"}`}></div>

                        <Link to={allOf.linkedin_link} >
                          My linkedIn.Com
                        </Link>
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>
                      <Link
                        to={allOf.github_link}
                        className={`
                        group
                        flex items-center justify-center
                        w-11 h-11
                        rounded-xl
                        border border-amber-700
                        transition-all duration-300
                        ${darkMode ? "bg-[#913800] text-[#59b806] shadow-[0_0_5px_0_rgb(89,184,6,0.4)] hover:shadow-[0_0_18px_rgba(89,184,6,0.6)]" : "bg-[#fee7c0] text-black hover:shadow-lg"}
                      `}
                      >
                        <FaGithub
                          size={22}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </Link>

                      <div className={`items-center gap-2 hidden sm:flex ${darkMode ? "text-white" : "text-[#381500]"} `}>
                        <div className={`h-[6px] w-[6px] rounded-full ${darkMode ? "bg-green-500" : "bg-red-900"}`}></div>

                        <Link to={allOf.github_link} className=''>
                          My Github.Com
                        </Link>
                      </div>
                    </div>

                    <div className='flex items-center gap-4'>

                      <Link
                        to={`mailto:${allOf.email}`}
                        className={`
                          group
                          flex items-center justify-center
                          w-11 h-11
                          rounded-xl
                          border border-amber-700
                          transition-all duration-300
                          ${darkMode ? "bg-[#913800] text-[#59b806] shadow-[0_0_5px_0_rgb(89,184,6,0.4)] hover:shadow-[0_0_18px_rgba(89,184,6,0.6)]" : "bg-[#fee7c0] text-black hover:shadow-lg"}
                        `}
                      >
                        <SiGmail
                          size={20}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      </Link>

                      <div className={`items-center gap-2 hidden sm:flex ${darkMode ? "text-white" : "text-[#381500]"} `}>
                        <div className={`h-[6px] w-[6px] rounded-full ${darkMode ? "bg-green-500" : "bg-red-900"}`}></div>

                        <Link to={`mailto:${allOf.email}`} >
                          My Gmail.Com
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>

              </div>

              {/* little bit about and download cv */}
              <div className='flex flex-col sm:gap-10 gap-6 mt-0 sm:mt-4'>

                <div className={`text-sm sm:text-lg mt-1 ${darkMode ? "text-[#747573]" : "text-[#332301]"} pl-1 pr-5`}>
                  <p className=''>
                    A goal-oriented software developer with experience in building applications using modern technologies like <span className={`${darkMode ? "text-[#59b806]" : "text-[#a80202]"} font-semibold`}>React, MongoDB, Express.js, Node.js, and more</span>. I am seeking to leverage my technical skills to deliver exceptional user experiences.
                  </p>
                </div>

                <div
                  onClick={() => downloadFileAtURL(resume)}
                  className={`flex items-center justify-center shadow-md gap-0.5 rounded-md px-4 sm:px-5 py-[8px] sm:py-[10px] w-fit ${darkMode ? "bg-blue-700 text-white" : "bg-[#fee7c0] text-amber-900"}`}
                >
                  <IoMdDownload size={22} className='hidden sm:block' />
                  <IoMdDownload size={20} className='block sm:hidden' />
                  <p className='text-base sm:text-lg'>Download Resume</p>
                </div>

                <div className='flex items-center justify-center sm:my-3 text-[#5e5b5b] animate-float'>
                  <LuChevronsDown size={32} className='hidden sm:block' />
                  <LuChevronsDown size={22} className='block sm:hidden' />
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className='lg:flex hidden items-center justify-center my-3 text-[#5e5b5b] animate-float'>
          <LuChevronsDown size={26} />
        </div>

      </div>

      <Education />
      <Internship />
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
