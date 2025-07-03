import React from 'react'
import { BiSolidConfused } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';
import { useGlobalContext } from '../provider/GlobalProvider';

const Education = () => {

  const allOf = useSelector(state => state.allofdetails)
  const allEduDetails = allOf?.all_education
  const { darkMode, setDarkMode } = useGlobalContext();


  return (
    <section className={`${darkMode ? "bg-primary-black" : "bg-[#e9d6b4]"} relative`} id='realEducationId'>
      <div className={`absolute inset-y-0 left-0 w-full blur-[300px] bg-cyan-300 opacity-[1%] pointer-events-none ${darkMode ? "block" : "hidden"}`}></div>

      <Element id='EducationID'>

        <div className={`${darkMode ? "text-primary-text" : "text-[#37290b]"} extra-font-style w-full flex justify-start items-center md:px-20 px-10 pb-5 pt-10`}>

          <div>
            <p className={`font-bold text-2xl mb-4 ${darkMode ? "" : "text-[#020826]"}`} >Education</p>

            {
              !allEduDetails ? (
                <div className='font-bold text-xl flex items-center gap-2'>
                  <p>No Data found</p>
                  <BiSolidConfused />
                  <p>?! ....</p>
                </div>
              ) : (
                <>

                  {
                    allEduDetails.map((val, idx) => {
                      return (
                        <div key={`edu-details-${idx}`} className='tracking-wide pb-4'>

                          <div className='text-lg pb-1 flex gap-2 items-cente'>
                            <div className={`p-1 bg-[#5a5a5a3a] rounded-md hover:text-[#070707] ${darkMode && "hover:bg-[#9b9a9a]"} hover:scale-110 md:block hidden`}><IoSchoolOutline /></div>
                            <p className={`font-bold ${!darkMode && "text-[#a80000]"}`}>{`${val?.institute_name} , ${val?.location}`}</p>
                          </div>

                          <div className={`text-base ${darkMode ? "text-[#747573]" : "text-[#796b54] font-semibold"} leading-tight`}>

                            <ul className='list-disc md:pl-6 pl-5 flex flex-col  gap-4'>
                              {
                                allEduDetails[idx]?.qualification?.map((innerVal, innerIdx) => {

                                  return (
                                    <li key={`innnerval-${val?._id}-${innerIdx}`} className='lg:ml-6 '>
                                      <p>{`${innerVal?.level} , ${innerVal?.stream}`}</p>
                                      <p>{`${innerVal?.startDate} - ${innerVal?.endDate} , ${innerVal?.typeOfScore === "CGPA" ? "CGPA : " + innerVal?.score : "Score :" + innerVal?.score}`}</p>
                                    </li>
                                  )

                                })
                              }
                            </ul>

                          </div>

                        </div>
                      )
                    })
                  }

                </>
              )
            }


          </div>


        </div>

      </Element>
    </section>
  )
}

export default Education
