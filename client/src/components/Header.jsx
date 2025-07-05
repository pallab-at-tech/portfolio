import React, { useEffect, useState, useRef } from 'react'
import { gsap } from "gsap";
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import ActiveUnderline from '../utils/ActiveUnderline';
import Sidebar from './Sidebar';
import Popbar from './Popbar';
import { useGlobalContext } from '../provider/GlobalProvider';
import logo from "../assets/logo1.png"


const Header = ({ isReady }) => {

  const location = useLocation();

  const [activeSection, setActiveSection] = useState("")
  const homeLocation = location.pathname === "/"
  const [showHeader, setShowHeader] = useState(true);
  const { darkMode, setDarkMode } = useGlobalContext();


  useEffect(() => {

    if (!isReady) return;

    let homeTop = 0;
    let eduTop = 0;
    let eduBottom = 0;

    const homeEl = document.getElementById("realHomeId");
    const eduEl = document.getElementById("realEducationId");

    if (homeEl) {
      homeTop = homeEl.getBoundingClientRect().top + window.scrollY;
    }

    if (eduEl) {
      const rect = eduEl.getBoundingClientRect();
      eduTop = rect.top + window.scrollY;
      eduBottom = eduTop + rect.height;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY >= homeTop && scrollY < eduTop) {
        setActiveSection("HomeID");
      } else if (scrollY >= eduTop && scrollY < eduBottom) {
        setActiveSection("EducationID");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isReady]);


  useEffect(() => {

    if (!isReady) return;

    let lastScroll = window.scrollY

    const handleScoll = () => {

      let currScoll = window.scrollY

      if (currScoll > lastScroll && currScoll > 72) {
        setShowHeader(false)
      }
      else {
        setShowHeader(true)
      }

      lastScroll = currScoll

    }

    window.addEventListener("scroll", handleScoll)

    return () => {
      window.removeEventListener("scroll", handleScoll)
    }

  }, [isReady])




  return (
    <header className={`h-[72px] ${(homeLocation && activeSection === "HomeID" && darkMode) && "background-image"} ${(!(homeLocation && activeSection === "HomeID") && (darkMode)) && "bg-primary-dark"} ${((homeLocation && activeSection === "HomeID") && (!darkMode)) && "bg-[#1b1300]"} ${(!(homeLocation && activeSection === "HomeID") && (!darkMode)) && "bg-[#2c2109]"}  text-white w-full fixed ${showHeader ? "top-0" : "-top-[100px]"}  z-50 transition-all duration-700 `}>

      <div className='grid lg:grid-cols-[2fr_1fr_2fr] md:grid-cols-[2fr_1fr_2fr] grid-cols-2 justify-between gap-15 w-full h-full relative z-50'>

        <NavLink to={"/"} className='flex justify-center items-center pt-2'>
          <img src={logo} alt="" className='w-[65px] h-[65px] rounded-full cursor-pointer'/>
        </NavLink>

        <div className='lg:gap-12 md:gap-4 justify-center items-center text-primary-text lg:flex md:flex hidden relative z-10'>



          {
            location.pathname !== "/" ? (
              <NavLink to="/" className='cursor-pointer' >Home
              </NavLink>
            ) : (
              <Link to='HomeID' smooth={true} duration={200}
                className={`cursor-pointer ${activeSection === "HomeID" && "active text-glow"}`} >Home
                {activeSection === "HomeID" && <ActiveUnderline />}
              </Link>
            )
          }


          {
            location.pathname === "/" && (
              <>
                <Link to='EducationID' smooth={true} duration={200}
                  className={`cursor-pointer ${activeSection === "EducationID" && "active text-glow"}`} >Education
                  {activeSection === "EducationID" && <ActiveUnderline />}
                </Link>

                <Link to='projectID' smooth={true} duration={200} spy offset={-80}
                  activeClass={'active text-glow'} onSetActive={() => setActiveSection("projectID")}
                  onSetInactive={() => setActiveSection("")} className='cursor-pointer' >Project
                  {activeSection === "projectID" && <ActiveUnderline />}
                </Link>

                <Link to='skillID' smooth={true} duration={200} spy offset={-80}
                  onSetActive={() => setActiveSection("skillID")} activeClass=''
                  onSetInactive={() => setActiveSection("")} className={`${activeSection === "skillID" && "active text-glow"} cursor-pointer`} >Skills
                  {activeSection === "skillID" && <ActiveUnderline />}
                </Link>

                <Link to='ContactID' smooth={true} duration={200} spy offset={-80}
                  onSetActive={() => setActiveSection("ContactID")} activeClass=''
                  onSetInactive={() => setActiveSection("")} className={`${activeSection === "ContactID" ? "active text-glow" : ""} cursor-pointer`} >Contact
                  {activeSection === "ContactID" && <ActiveUnderline />}
                </Link>
              </>
            )
          }


          <NavLink to={"/Others"}>Others</NavLink>

        </div>

        <div className='flex justify-center items-center w-full cursor-pointer'>

          <Popbar close={showHeader} />

        </div>

      </div>


    </header>
  )
}

export default Header
