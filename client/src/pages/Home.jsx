import React from 'react'
import pic from "../assets/profile_black_1.jpg"
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-w-screen min-h-[calc(100vh-72px)] bg-primary-dark'>

      <div className='grid grid-cols-[2fr_3fr] mx-10 pt-14'>

        <div className='flex items-center justify-center p-3 mt-6 lg:pl-16'>
          <img src={pic} alt="" className='w-[220px] h-[254px] rounded-[50px] m-3' />
        </div>

        <div className='text-primary-text flex-col extra-font-style flex items-start mt-13 justify-start text-3xl'>
          <div className='grid gap-0.5'>
            <p className='pb-2'>Hi  {" "}, </p>
            <p className=''> i am ,{" "}<span className='text-terniary-dark'>Pallab Bag</span></p>
            <p className=''>Full <span className='text-[#80ed21]'>stack</span> developer</p>
          </div>

          <div className='text-sm mt-5 lg:w-[50%] text-[#747573]'>
            <p>
              A goal-oriented software developer with experience in building applications using modern technologies like React, MongoDB, Express.js, Node.js, and more. I am seeking to leverage my technical skills to deliver exceptional user experiences.
            </p>
          </div>

          <div className='flex mt-4 items-center gap-7'>
            <div className='bg-terniary-dark  rounded flex items-center pl-0.5 cursor-pointer hover:bg-[#f04f0a]'>
              <IoMdDownload size={20} />
              <p className='text-base px-2 py-1.5'>Resume</p>
            </div>

            <Link className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><FaGithub size={20}/></Link>

            <Link className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><SiGmail size={20}/></Link>

            <Link className='bg-[#747573] p-0.5 rounded-md text-[#211f1f] hover:bg-[#aba7a7]'><FaLinkedin size={20}/></Link>

          </div>

        </div>

      </div>



    </div>
  )
}

export default Home
