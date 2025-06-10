import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className='bg-primary-black p-20 pt-0 text-primary-text extra-font-style'>
       <p className='font-bold text-2xl mb-3'>project ShowCase</p>
      <div className='w-full'>

        <div>

          <div>
            {/* /title */}
            <p>Binkeyit</p>

            {/* live link and git link */}
            <div>
              <Link><FaExternalLinkAlt /></Link>
              <Link><FaGithub /></Link>
            </div>

            {/* image and hover to video */}
            <div>
              <img src="" alt="" />
              <video src=""></video>
            </div>

            {/* key feature in 2 or 3 points */}
            <div>
              <div>
                <ul className='list-disc'>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div>
                <p>Will you know more ?</p>
                <button></button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects
