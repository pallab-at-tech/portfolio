import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import ActiveUnderline from '../utils/activeUnderline';
import Sidebar from './Sidebar';
import Popbar from './Popbar';


const Header = () => {

  const location = useLocation();

  const [activeSection, setActiveSection] = useState("")




  return (
    <header className='h-[72px] bg-primary-dark text-white w-full fixed top-0 z-50'>

      <div className='grid lg:grid-cols-[2fr_1fr_2fr] md:grid-cols-[2fr_1fr_2fr] grid-cols-2 justify-between gap-15 w-full h-full relative z-50'>

        <div className='flex justify-center items-center'>Logo</div>

        <div className='lg:gap-12 md:gap-4 justify-center items-center text-primary-text lg:flex md:flex hidden relative z-10'>

          <Link to='HomeID' smooth={true} duration={200} spy offset={-80}
            activeClass={'active text-glow'} onSetActive={() => setActiveSection("HomeID")}
            onSetInactive={() => setActiveSection("")} className='cursor-pointer' >Home
            {activeSection === "HomeID" && <ActiveUnderline />}
          </Link>

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
            onSetActive={() => setActiveSection("skillID")} activeClass=''
            onSetInactive={() => setActiveSection("")} className={`${activeSection === "skillID" && "active text-glow"} cursor-pointer`} >Skills
            {activeSection === "skillID" && <ActiveUnderline />}
          </Link>

          <Link to='ContactID' smooth={true} duration={200} spy offset={-80}
            onSetActive={() => setActiveSection("ContactID")} activeClass=''
            onSetInactive={() => setActiveSection("")} className={`${activeSection === "ContactID" ? "active text-glow" : ""} cursor-pointer`} >Contact
            {activeSection === "ContactID" && <ActiveUnderline />}
          </Link>

          <NavLink to={"/Others"}>Others</NavLink>

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
