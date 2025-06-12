import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import { RiEnglishInput } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <section className='bg-primary-black  p-10 text-primary-text extra-font-style pt-10 md:p-14  pb-5'>
      <h1 className='font-bold text-2xl md:pl-6'>My Skills</h1>
      <p className='md:pl-6 pt-1 text-[#cbd5e1] text-sm pb-8'>Technology and tools i have work with throughout my projects and experience</p>

      <div className='md:pl-6'>

        <div className='grid lg:grid-cols-2  lg:grid-rows-2 grid-cols-1 '>

          <div className='pb-5'>

            <h2 className='pl-2.5'>Front-End</h2>

            <div className='flex flex-wrap text-sm pt-3'>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-yellow-shadow'>
                  <IoLogoJavascript
                    size={26}
                    className='text-amber-400 transition duration-300 group-hover:text-yellow-500'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  JavaScript
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-violet-shadow'>
                  <RiReactjsLine
                    size={26}
                    className='text-violet-500 transition duration-300 group-hover:text-violet-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  React
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-orange-shadow'>
                  <FaHtml5
                    size={26}
                    className='text-orange-500 transition duration-300 group-hover:text-orange-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  HTML
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-sky-shadow'>
                  <FaCss3
                    size={26}
                    className='text-sky-500 transition duration-300 group-hover:text-sky-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  CSS
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-sky-shadow'>
                  <RiTailwindCssFill
                    size={26}
                    className='text-blue-500 transition duration-300 group-hover:text-blue-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Tailwind CSS
                </p>
              </div>

            </div>

          </div>

          <div className='pb-5'>

            <h2 className='pl-2.5'>DataBase</h2>

            <div className='flex gap-5 flex-wrap  text-sm pt-3'>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-green-shadow'>
                  <SiMongodb
                    size={26}
                    className='text-green-500 transition duration-300 group-hover:text-green-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  MongoDb
                </p>
              </div>

            </div>

          </div>

          <div className='pb-5'>

            <h3 className='pl-2.5'>Backend</h3>

            <div className='flex gap-5 flex-wrap  text-sm pt-3'>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-yellow-shadow'>
                  <FaNodeJs
                    size={26}
                    className='text-yellow-500 transition duration-300 group-hover:text-yellow-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Node js
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-green-shadow'>
                  <SiExpress
                    size={26}
                    className='text-green-500 transition duration-300 group-hover:text-green-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Express js
                </p>
              </div>

            </div>

          </div>

          <div className='pb-5'>

            <h3 className='pl-2.5'>Tools & PlatForm</h3>

            <div className='flex gap-5 flex-wrap  text-sm pt-3'>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-red-shadow'>
                  <FaGitAlt
                    size={26}
                    className='text-red-500 transition duration-300 group-hover:text-red-400'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Git
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-gray-shadow'>
                  <FaGithub
                    size={26}
                    className='text-gray-400 transition duration-300 group-hover:text-gray-300'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  GitHub
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-gray-shadow'>
                  <IoLogoVercel
                    size={26}
                    className='text-gray-400 transition duration-300 group-hover:text-gray-300'
                  />
                </div>
                <p className='max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Vercel
                </p>
              </div>

            </div>
          </div>

          <div className='pb-5'>
            <h3 className='pl-2.5'>Languages & Others</h3>

            <div className='flex gap-5 flex-wrap  text-sm pt-4'>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-yellow-shadow'>
                  <FcIdea
                    size={26}
                    className='text-yellow-400 transition duration-300 group-hover:text-yellow-300'
                  />
                </div>
                <p className="max-w-[9ch] pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words">
                  DSA (java)
                </p>
              </div>


              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-orange-shadow'>
                  <RiEnglishInput
                    size={26}
                    className='text-orange-500 transition duration-300 group-hover:text-orange-400'
                  />
                </div>
                <p className='pt-2.5 max-w-[9ch] text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  English
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-gray-shadow'>
                  <FaLanguage
                    size={26}
                    className='text-gray-400 transition duration-300 group-hover:text-gray-300'
                  />
                </div>
                <p className='pt-2.5 max-w-[9ch] text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Bengali (Native)
                </p>
              </div>

              <div className='flex flex-col items-center justify-start group w-[90px] h-[110px]'>
                <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-red-shadow'>
                  <FaLanguage
                    size={26}
                    className='text-red-500 transition duration-300 group-hover:text-red-400'
                  />
                </div>
                <p className='pt-2.5 max-w-[9ch] text-[#abaeb2] transition duration-300 group-hover:text-white text-center text-sm leading-snug break-words'>
                  Hindi
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills
