import React from 'react'
import { LuSchool } from "react-icons/lu";
import { IoSchoolOutline } from "react-icons/io5";

const Education = () => {
  return (
    <section className='bg-primary-black'>
      <div className='text-primary-text extra-font-style w-full flex justify-start items-center md:px-20   px-10 pb-5 pt-10'>

        <div>
          <p className='font-bold text-2xl mb-3'>Education</p>

          <div className='tracking-wide pb-4'>
            <div className='text-lg pb-1 flex gap-2 items-center'>
              <div className='p-1 bg-[#5a5a5a3a] rounded-md hover:text-primary-dark hover:bg-[#9b9a9a] hover:scale-110 md:block hidden'><LuSchool /></div>
              <p>MCKV Institute Of Engineering , Liluah , Howrah</p>
            </div>
            <div className='text-sm text-[#747573]'>
              <p>B.Tech in  computer Science and Engineering</p>
              <p>Aug 2023 - Sep 2027  , <span>CGPA : 8.20/10 (upto 3rd sem)</span></p>
            </div>
          </div>

          <div className='tracking-wide'>
            <div className='text-lg pb-1 flex gap-2 items-cente'>
              <div className='p-1 bg-[#5a5a5a3a] rounded-md hover:text-[#070707] hover:bg-[#9b9a9a] hover:scale-110 md:block hidden'><IoSchoolOutline/></div>
              <p>Singur MahaMaya High School , Singur , Hooghly</p>
            </div>
            <div className='text-sm text-[#747573]'>
              <ul className='list-disc pl-6 flex gap-16'>
                <li>
                  <p>High Secoundary , Science</p>
                  <p>jan 2022 - jul 2023 , score : 80%</p>
                </li>

                <li className=''>
                  <p>Secoundary , Science</p>
                  <p>jan 2020 - dec 2020 , score : 80%</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education
