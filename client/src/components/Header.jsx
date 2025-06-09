import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { NavLink, useLocation } from 'react-router-dom';
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
  const isContactActive = location.pathname === '/contact';




  return (
    <header className='h-18 bg-white dark:bg-primary-dark text-white w-full'>

      <div className='grid lg:grid-cols-[2fr_1fr_2fr] md:grid-cols-[2fr_1fr_2fr] grid-cols-2 justify-between gap-35 w-full h-full'>

        <div className='flex justify-center items-center'>Logo</div>

        <div className='lg:gap-12 md:gap-4 justify-center items-center text-primary-text lg:flex md:flex hidden relative z-10'>
          <NavLink to={""} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Home <ActiveUnderline active={isHomeActive} /></NavLink>

          <NavLink to={"/about"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>About <ActiveUnderline active={isAboutActive} /></NavLink>

          <NavLink to={"/education"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Education <ActiveUnderline active={isEducationActive} /></NavLink>

          <NavLink to={"/skills"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Skills <ActiveUnderline active={isSkillActive} /></NavLink>

          <NavLink to={"/projects"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Projects <ActiveUnderline active={isProjectsActive} /></NavLink>

          <NavLink to={"/contact"} className={({ isActive }) =>
            isActive ? 'text-amber-500 text-glow font-bold transition-all' : ''
          }>Contact <ActiveUnderline active={isContactActive} /></NavLink>
        </div>

        <div className='flex justify-center items-center w-full cursor-pointer'>

          <Popbar/>

        </div>

      </div>

      {
        // <Sidebar/>
      }





    </header>
  )
}

export default Header
