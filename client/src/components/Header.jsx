import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import ActiveUnderline from '../utils/activeUnderline';
import Sidebar from './Sidebar';
import Popbar from './Popbar';


const Header = () => {

  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isAboutActive = location.pathname === '/about';
  const isEducationActive = location.pathname === '/education';
  const isSkillActive = location.pathname === '/skills';
  const isProjectsActive = location.pathname === '/projects';
  const isOrderActive = location.pathname === '/Others'
  const isContactActive = location.pathname === '/contact';

  const [activeSection, setActiveSection] = useState("")




  return (
    <header className='h-[72px] bg-primary-dark text-white w-full fixed top-0 z-50'>

      <div className='grid lg:grid-cols-[2fr_1fr_2fr] md:grid-cols-[2fr_1fr_2fr] grid-cols-2 justify-between gap-15 w-full h-full relative z-50'>

        <div className='flex justify-center items-center'>Logo</div>

        <div className='lg:gap-12 md:gap-4 justify-center items-center text-primary-text lg:flex md:flex hidden relative z-10'>

          <NavLink to={""} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Home <ActiveUnderline active={isHomeActive} /></NavLink>

          {/* <NavLink to={"/about"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>About <ActiveUnderline active={isAboutActive} /></NavLink>

          <NavLink to={"/projects"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Projects <ActiveUnderline active={isProjectsActive} /></NavLink>

          <NavLink to={"/skills"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Skills <ActiveUnderline active={isSkillActive} /></NavLink>

          <NavLink to={"/education"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Education <ActiveUnderline active={isEducationActive} /></NavLink>

          <NavLink to={"/contact"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Contact <ActiveUnderline active={isContactActive} /></NavLink>

          <NavLink to={"/Others"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Others <ActiveUnderline active={isOrderActive} /></NavLink> */}

          <Link to='EducationID' smooth={true} duration={200} spy offset={-80}
            activeClass={'active text-glow'} onSetActive={() => setActiveSection("EducationID")}
            onSetInactive={() => setActiveSection("")} className='cursor-pointer' >Education
            {activeSection === "EducationID" && <ActiveUnderline />}
          </Link>

          <Link to='projectID' smooth={true} duration={200} spy offset={-80}
            activeClass={'active text-glow'} onSetActive={() => setActiveSection("projectID")}
            onSetInactive={() => setActiveSection("")} className='cursor-pointer' >Project
            {activeSection === "projectID" && <ActiveUnderline />}
          </Link>

          <Link to='skillID' smooth={true} duration={200} spy offset={-80}
            activeClass={'active text-glow'} onSetActive={() => setActiveSection("skillID")}
            onSetInactive={() => setActiveSection("")} className='cursor-pointer' >Skills
            {activeSection === "skillID" && <ActiveUnderline />}
          </Link>

          <Link to='ContactID' smooth={true} duration={200} spy offset={-60}
            activeClass={'active text-glow'} onSetActive={() => setActiveSection("ContactID")}
            onSetInactive={() => setActiveSection("")} className='cursor-pointer' >Contact
            {activeSection === "ContactID" && <ActiveUnderline />}
          </Link>

        </div>

        <div className='flex justify-center items-center w-full cursor-pointer'>

          <Popbar />

        </div>

      </div>

      {
        // <Sidebar/>
      }





    </header>
  )
}

export default Header
