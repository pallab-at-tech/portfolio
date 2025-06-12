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

const Skills = () => {
  return (
    <section className='bg-primary-black p-20 pt-0 text-primary-text extra-font-style pt-10'>
      <h1 className='font-bold text-2xl pl-6'>My Skills</h1>
      <p className='pl-6 pt-1 text-[#cbd5e1] text-sm pb-8'>Technology and tools i have work with throughout my projects and experience</p>

      <div className='pl-6'>


        <div className='flex flex-wrap items-center justify-between '>

          <div>

            <div className='pb-5'>

              <h2>Front-End</h2>

              <div className='flex gap-10 flex-wrap text-sm pt-3'>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-yellow-shadow'>
                    <IoLogoJavascript
                      size={26}
                      className='text-amber-400 transition duration-300 group-hover:text-yellow-500'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    JavaScript
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-violet-shadow'>
                    <RiReactjsLine
                      size={26}
                      className='text-violet-500 transition duration-300 group-hover:text-violet-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    React
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-orange-shadow'>
                    <FaHtml5
                      size={26}
                      className='text-orange-500 transition duration-300 group-hover:text-orange-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    HTML
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-sky-shadow'>
                    <FaCss3
                      size={26}
                      className='text-sky-500 transition duration-300 group-hover:text-sky-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    CSS
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-sky-shadow'>
                    <RiTailwindCssFill
                      size={26}
                      className='text-blue-500 transition duration-300 group-hover:text-blue-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    Tailwind CSS
                  </p>
                </div>

              </div>

            </div>

            <div className='pb-5'>

              <h2>DataBase</h2>

              <div className='flex gap-10 flex-wrap  text-sm pt-3'>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-green-shadow'>
                    <SiMongodb
                      size={26}
                      className='text-green-500 transition duration-300 group-hover:text-green-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    MongoDb
                  </p>
                </div>

              </div>

            </div>

          </div>

          <div className='md:pr-[200px]'>

            <div className='pb-5'>

              <h3>Tools & PlatForm</h3>

              <div className='flex gap-10 flex-wrap  text-sm pt-3'>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-red-shadow'>
                    <FaGitAlt
                      size={26}
                      className='text-red-500 transition duration-300 group-hover:text-red-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    Git
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-gray-shadow'>
                    <FaGithub
                      size={26}
                      className='text-gray-400 transition duration-300 group-hover:text-gray-300'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    GitHub
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-gray-shadow'>
                    <IoLogoVercel
                      size={26}
                      className='text-gray-400 transition duration-300 group-hover:text-gray-300'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    Vercel
                  </p>
                </div>

              </div>
            </div>

            <div className='pb-5'>
              <h3>Languages & Others</h3>

              <div className='flex gap-10 flex-wrap  text-sm pt-3'>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-yellow-shadow'>
                    <FcIdea
                      size={26}
                      className='text-yellow-400 transition duration-300 group-hover:text-yellow-300'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    DSA (java)
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-orange-shadow'>
                    <RiEnglishInput
                      size={26}
                      className='text-orange-500 transition duration-300 group-hover:text-orange-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    English
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-gray-shadow'>
                    <FaLanguage
                      size={26}
                      className='text-gray-400 transition duration-300 group-hover:text-gray-300'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    Bengali(Native)
                  </p>
                </div>

                <div className='flex flex-col items-center justify-center group'>
                  <div className='bg-primary-dark p-3 rounded-full transform transition duration-300 group-hover:scale-110 group-hover:-translate-y-1 light-red-shadow'>
                    <FaLanguage
                      size={26}
                      className='text-red-500 transition duration-300 group-hover:text-red-400'
                    />
                  </div>
                  <p className='pt-2.5 text-[#abaeb2] transition duration-300 group-hover:text-white'>
                    Hindi
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills
