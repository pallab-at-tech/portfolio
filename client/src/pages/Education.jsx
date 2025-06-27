import React from 'react'
import { BiSolidConfused } from "react-icons/bi";
import { IoSchoolOutline } from "react-icons/io5";
import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';

const Education = () => {

  const allOf = useSelector(state => state.allofdetails)
  const allEduDetails = allOf?.all_education

  return (
    <section className='bg-primary-black'>
      <Element id='EducationID'>

        <div className='text-primary-text extra-font-style w-full flex justify-start items-center md:px-20   px-10 pb-5 pt-10'>

          <div>
            <p className='font-bold text-2xl mb-4'>Education</p>

            {
              !allEduDetails ? (
                <div className='font-bold text-xl flex items-center gap-2'>
                  <p>No Data found</p>
                  <BiSolidConfused/>
                  <p>?! ....</p>
                </div>
              ) : (
                <>

                  {
                    allEduDetails.map((val, idx) => {
                      return (
                        <div className='tracking-wide pb-4'>

                          <div className='text-lg pb-1 flex gap-2 items-cente'>
                            <div className='p-1 bg-[#5a5a5a3a] rounded-md hover:text-[#070707] hover:bg-[#9b9a9a] hover:scale-110 md:block hidden'><IoSchoolOutline /></div>
                            <p>{`${val?.institute_name} , ${val?.location}`}</p>
                          </div>

                          <div className='text-sm text-[#747573]'>

                            <ul className='list-disc md:pl-6 pl-5 flex flex-col  gap-4'>
                              {
                                allEduDetails[idx]?.qualification?.map((innerVal, innerIdx) => {

                                  return (
                                    <li className='lg:ml-6'>
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
