import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { NavLink, useLocation } from 'react-router-dom';
import ActiveUnderline from '../utils/ActiveUnderline';
import Popbar from './Popbar';
import { useGlobalContext } from '../provider/GlobalProvider';
import logo from "../assets/logo1.png"


const Header = ({ isReady }) => {

  const location = useLocation();

  const [activeSection, setActiveSection] = useState("")
  const homeLocation = (location.pathname === "/")
  const [headerAllowed, setHeaderAllowed] = useState(false)
  const [showHeader, setShowHeader] = useState(true);
  const { darkMode } = useGlobalContext();


  // Auto Scroll
  const scrollTo = (elementId) => {

    if (!elementId) return

    const container = document.querySelector("#fullScreenId");
    const targetElement = document.querySelector(`#${elementId}`)

    if (!container || !targetElement) return

    const containerTop = container.getBoundingClientRect().top
    const elementTop = targetElement.getBoundingClientRect().top

    const offset = 72

    const scrollPosition = container.scrollTop + elementTop - containerTop - offset;

    container.scrollTo({
      top: scrollPosition,
      behavior: "smooth"
    })

  }

  // Current active section detected
  useEffect(() => {
    if (!isReady) return;

    const container = document.querySelector("#fullScreenId");

    const homeElement = document.querySelector("#realHomeId")
    const educationElement = document.querySelector("#realEducationId")
    const projectElement = document.querySelector("#projectID")
    const skillElement = document.querySelector("#skillID")
    const contactElement = document.querySelector("#ContactID")
    const internElement = document.querySelector("#internId")

    if (!container || !homeElement || !educationElement || !projectElement || !skillElement || !contactElement || !internElement) return;

    const educationTop = educationElement.getBoundingClientRect().top
    const internTop = internElement.getBoundingClientRect().top
    const projectTop = projectElement.getBoundingClientRect().top
    const skillTop = skillElement.getBoundingClientRect().top
    const contactTop = contactElement.getBoundingClientRect().top

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      if (scrollTop < (educationTop - 73)) {
        setActiveSection("H-ID")
      }
      else if (scrollTop < (internTop - 73)) {
        setActiveSection("E-ID")
      }
      else if (scrollTop < (projectTop - 73)) {
        setActiveSection("In-ID")
      }
      else if (scrollTop < (skillTop - 73)) {
        setActiveSection("P-ID")
      }
      else if (scrollTop < (contactTop - 300)) {
        setActiveSection("S-ID")
      }
      else {
        setActiveSection("C-ID")
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isReady]);

  // header disappear when scroll bottom , appear when scroll top
  useEffect(() => {
    if (!isReady) return;

    const container = document.querySelector("#fullScreenId");
    if (!container) return;

    let lastScroll = container.scrollTop;

    const handleScroll = () => {
      const currScroll = container.scrollTop;

      if (currScroll > lastScroll && currScroll > 72) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }

      lastScroll = currScroll;
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isReady]);

  useEffect(() => {
    const home = (location.pathname === "/")
    const dashboard = (location.pathname.split("/").length > 1 && location.pathname.split("/")[1] === "dashboard")
    const other = (location.pathname === "/Others")
    
    setHeaderAllowed(() => {
      return (home || dashboard || other)
    })
  }, [location.pathname])


  return (
    <header className={`h-[72px] ${headerAllowed ? "block" : "hidden"} ${(homeLocation && activeSection === "H-ID" && darkMode) && "background-image"} ${(!(homeLocation && activeSection === "H-ID") && (darkMode)) && "bg-primary-dark"} ${((homeLocation && activeSection === "H-ID") && (!darkMode)) && "bg-[#1b1300]"} ${(!(homeLocation && activeSection === "H-ID") && (!darkMode)) && "bg-[#2c2109]"}  text-white w-full fixed ${showHeader ? "top-0" : "-top-[100px]"}  z-50 transition-all duration-700 `}>

      <div className='grid lg:grid-cols-[2fr_1fr_2fr] md:grid-cols-[2fr_1fr_2fr] grid-cols-2 justify-between gap-15 w-full h-full relative z-50'>

        <NavLink to={"/"} className='flex justify-center items-center pt-2'>
          <img src={logo} alt="" className='w-[65px] h-[65px] object-cover rounded-full cursor-pointer' />
        </NavLink>

        <div className='lg:gap-12 md:gap-4 justify-center items-center text-primary-text lg:flex md:flex hidden relative z-10'>

          {
            location.pathname !== "/" ? (
              <NavLink to="/" className='cursor-pointer' >Home
              </NavLink>
            ) : (
              <div
                className={`cursor-pointer ${activeSection === "H-ID" && "active text-glow"}`}
                onClick={() => scrollTo("realHomeId")}
              >
                Home
                {activeSection === "H-ID" && <ActiveUnderline />}
              </div>
            )
          }

          {
            location.pathname === "/" && (
              <>
                <div
                  className={`cursor-pointer ${activeSection === "E-ID" && "active text-glow"}`}
                  onClick={() => scrollTo("realEducationId")}
                >
                  Education
                  {activeSection === "E-ID" && <ActiveUnderline />}
                </div>

                <div
                  className={`cursor-pointer ${activeSection === "In-ID" && "active text-glow"}`}
                  onClick={() => scrollTo("internId")}
                >
                  Experience
                  {activeSection === "In-ID" && <ActiveUnderline />}
                </div>

                <div
                  className={`cursor-pointer ${activeSection === "P-ID" && "active text-glow"}`}
                  onClick={() => scrollTo("projectID")}
                >
                  Project
                  {activeSection === "P-ID" && <ActiveUnderline />}
                </div>

                <div
                  className={`cursor-pointer ${activeSection === "S-ID" && "active text-glow"}`}
                  onClick={() => scrollTo("skillID")}
                >
                  Skills
                  {activeSection === "S-ID" && <ActiveUnderline />}
                </div>

                <div
                  className={`cursor-pointer ${activeSection === "C-ID" && "active text-glow"}`}
                  onClick={() => scrollTo("ContactID")}
                >
                  Contact
                  {activeSection === "C-ID" && <ActiveUnderline />}
                </div>
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
