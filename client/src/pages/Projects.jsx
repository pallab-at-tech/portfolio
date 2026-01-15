import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useGlobalContext } from '../provider/GlobalProvider';

const Projects = () => {

  const allOf = useSelector(state => state.allofdetails)
  const proDetails = allOf.projectList
  const { darkMode } = useGlobalContext()

  return (
    <section className={`${darkMode ? "bg-primary-black" : "bg-[#e9d6b4]"} ${darkMode ? "text-primary-text" : "text-[#37290b]"} extra-font-style lg:px-20 sm:px-12 px-8 pb-5 pt-6 sm:pt-6 relative`}>

      <div id='projectID'>

        <p className={`font-bold text-2xl sm:text-3xl sm:pl-1 ${darkMode ? "text-[#f54e2ced]" : "text-[#241a07de]"}`}>Project ShowCase</p>
        <p className={`lg:pl-1 pt-0.5 ${darkMode ? "text-[#d0d0d0e5]" : "text-[#241a07]"} text-sm pb-6`}>A collection of projects that demonstrate my skills, problem-solving approach, and hands-on experience.</p>

        <div className='w-full'>

          <div className='flex overflow-x-auto gap-6 scrollbar-custom scroll-smooth pb-3 pl-2'>
            {

              proDetails.map((val, idx) => {
                return (
                  <div key={`project-${val?._id}-${idx}`} className={`md:max-w-[350px] md:min-w-[350px] 
                   transition-shadow duration-500 ease-in-out  min-w-[260px] max-w-[260px] md:min-h-[530px] md:max-h-[530px] rounded-xl  px-2 text-base  ${darkMode ? "shadow-[inset_0_0_12px_rgba(0,191,255,0.2),inset_0_0_8px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_0_20px_rgba(0,191,255,0.4),inset_0_0_12px_rgba(255,255,255,0.15)] border border-primary-text" : "card-bg-color-light  border-[3px] border-[#342020] shadow-[inset_0_0_12px_rgb(255 14 0 / 20%),inset_0_0_8px_rgb(255 172 0 / 8%)]"}  `}>

                    <div className='flex justify-around pt-3'>
                      {/* /title */}
                      <p className={`w-[60%] overflow-hidden font-semibold fontw text-xl  ${darkMode && "bg-gradient-to-r from-[#17f5a4] to-[#0f38ef]"} bg-clip-text text-transparent`} style={darkMode ? {} : { background: 'linear-gradient(125deg, rgb(2 0 144), rgb(224 11 159))', backgroundClip: 'text' }}>{val.tittle}</p>

                      {/* live link and git link */}
                      <div className='flex gap-4'>
                        <Link to={val.project_deploy_link} className={`p-1 rounded w-fit h-fit transition duration-300 hover:scale-110 ${darkMode ? "hover:bg-[#1b2c2c]" : "hover:bg-[#fdce88]"}`}><FaExternalLinkAlt size={15} /></Link>
                        <Link to={val.project_git_link} className={`p-1 rounded w-fit h-fit transition duration-300 hover:scale-110 ${darkMode ? "hover:bg-[#1b2c2c]" : "hover:bg-[#fdce88]"}`}><FaGithub size={18} /></Link>
                      </div>

                    </div>

                    <p className={`pl-4 pt-1  ${darkMode ? "text-[#cbd5e1]" : "text-[#020826]"} text-sm line-clamp-2`}>{val.body}</p>

                    {/* image and hover to video */}
                    <div className='min-w-[80%]'>
                      <div className='w-full p-4 sm:p-5 overflow-hidden flex justify-center items-center hover:scale-125 transition-all'>
                        <img src={val.image} alt="" className='rounded-md w-full h-[130px] max-h-[130px] sm:h-[137px] sm:max-h-[137px] object-cover' />
                      </div>
                      {/* <video src=""></video> */}
                    </div>

                    {/* key feature in 2 or 3 points */}
                    <div className='pl-3'>

                      <p className={`font-semibold   bg-gradient-to-r ${darkMode ? "from-[#d9ff00] to-[#f39428]" : "to-black"} bg-clip-text text-transparent inline-block`} style={darkMode ? {} : { background: 'linear-gradient(125deg, rgb(93 0 150), rgb(206 0 0))', backgroundClip: 'text' }}>Feature</p>
                      <ul className={`list-disc pl-7 ${darkMode ? "text-[#d1d3dc]" : "text-[#020826]"} text-sm min-h-[80px] max-h-[80px] overflow-y-auto scrollbar-custom`}>

                        {
                          val.feature?.map((valFeature, idxFeature) => {
                            return (
                              <li key={`valFeature-${Math.random()}`}>{valFeature}</li>
                            )
                          })
                        }
                      </ul>

                      {/* tech use */}
                      <p className={`font-semibold ${darkMode && "bg-gradient-to-r from-[#d9ff00] to-[#f39428]"} bg-clip-text text-transparent inline-block pt-1 pl-3`} style={darkMode ? {} : { background: 'linear-gradient(125deg, rgb(93 0 150), rgb(206 0 0))', backgroundClip: 'text' }}>Tech</p>

                      <div className='flex pl-3 gap-2 pt-2 items-center flex-wrap min-h-[75px] max-h-[75px] overflow-y-scroll scrollbar-custom'>

                        {
                          val.tech_uses?.map((valTech, idxTech) => {
                            return (
                              <div key={`${Math.random()}`} className={`px-2 py-1 rounded-full text-center text-[13px] ${darkMode ? "bg-[#0b1c2c] text-[#4ac0dd] border border-[#61dcfb2f]" : "border border-purple-900 bg-[#690551] text-[#f1df87]"} hover:scale-110 transition-all`} style={darkMode ? { textShadow: '0 0 8px #61DBFB' } : { textShadow: 'rgb(180 114 0) 0px 0px 8px' }}>
                                {valTech}
                              </div>
                            )
                          })
                        }

                      </div>

                      <div className='flex justify-between px-6 items-center pl-3 md:py-3 py-5 flex-wrap md:pb-2'>
                        <p className={`text-[13px] leading-tight ${darkMode ? "text-[#606465]" : "text-[#292a2b]"}`}>
                          check out my github readme.md to know more ? <Link to={val.project_git_link} className={`${darkMode && "bg-gradient-to-r from-[#3af574] to-[#18b4f0]"} bg-clip-text text-transparent`} style={darkMode ? {} : { background: 'linear-gradient(125deg, rgb(95 6 180), rgb(179 5 166))', backgroundClip: 'text' }}>click here</Link>
                        </p>
                      </div>

                    </div>

                  </div>
                )
              })

            }
          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects
