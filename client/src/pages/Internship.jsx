import React from 'react'
import { useGlobalContext } from '../provider/GlobalProvider'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { GrCertificate } from "react-icons/gr";

const Internship = () => {

    const { darkMode } = useGlobalContext()
    const allOf = useSelector(state => state.allofdetails)
    const experienceDetails = allOf.all_experience

    const month = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]


    return (
        <section
            className={`
                ${darkMode ? "bg-primary-black text-primary-text" : "bg-[#e9d6b4] text-[#37290b]"} extra-font-style lg:px-20 sm:px-12 px-6 py-5 sm:py-12
            `}
        >
            <div id="internId">
                <div>
                    <p className={`font-bold text-2xl sm:text-3xl sm:pl-1 ${darkMode ? "text-[#f54e2ced] " : "text-[#171924]"}`}>
                        Work Experience
                    </p>
                    <p className={`lg:pl-1.5 pt-0.5 mb-6 ${darkMode ? "text-[#c3c7cb]" : "text-[#241a07de]"} text-sm pb-0 lg:pb-8`}>Here is a quick rundown of my most recent experience.</p>
                </div>

                <div className="relative">

                    {/* Vertical timeline */}
                    <div className={`sm:block hidden absolute left-4 top-0 h-full w-[2px] ${darkMode ? "bg-[#8486846b]" : "bg-[#37290b]/30"}`} />

                    {Array.isArray(experienceDetails) &&
                        experienceDetails.map((val, idx) => (
                            <div key={idx} className="relative sm:pl-14">

                                {/* Timeline dot */}
                                <span className={`sm:block hidden absolute left-4 top-6 -translate-x-1/2 h-4 w-4 rounded-full ${darkMode ? "bg-[#01ca7a] ring-4 ring-[#00e98a]/30" : "bg-[#730c0c] ring-4 ring-[#730c0c]/30"} `} />

                                {/* Card */}
                                <div
                                    className={`
                                        ${darkMode ? "border-gray-300 intern_dark_shadow" : "intern_light_shadow bg-[#f3e6cf] border-[#5a3e04]/25"} border rounded-2xl p-6 shadow-sm hover:shadow-md transition hover:scale-[101%] duration-200`
                                    }
                                >

                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                                        <div>
                                            <div className='flex items-center gap-2 lg:gap-4'>
                                                <h3
                                                    className={`text-lg max-w-[35ch] lg:max-w-full truncate sm:text-xl font-semibold ${darkMode ? "text-[#00e589] text-shadow-[1px_-1px_11px_rgb(21,109,255,0.36)]" : "text-[#730c0c]"}`}
                                                >
                                                    {val?.tittle}
                                                </h3>

                                                {/* for desktop version */}
                                                {
                                                    val?.github_link && (
                                                        <Link to={val?.github_link}>
                                                            <div className={`lg:flex hidden items-center justify-center gap-0.5 px-2.5 pl-3.5 py-[2px] pt-[3px] rounded-full hover:scale-[104%] transition-transform duration-200 border ${darkMode ? "bg-[#19191946] border-gray-600" : "bg-[#37290b]/5 border-[#37290b]/20"}`}>
                                                                <span className='text-[14px]'>{`GitHub`}</span> <span className='text-[20px]'>{" >"}</span>
                                                            </div>
                                                        </Link>
                                                    )
                                                }

                                                {/* for desktop version */}
                                                {
                                                    val?.view_certificate && (
                                                        <Link to={val?.view_certificate} className={`lg:block hidden p-1 rounded w-fit h-fit transition duration-300 hover:scale-110 ${darkMode ? "hover:bg-[#303131]" : "hover:bg-[#f3e8d8]"}`}>
                                                            <GrCertificate size={22} title='View Certificate' />
                                                        </Link>
                                                    )
                                                }

                                            </div>

                                            <p className="text-sm font-medium opacity-60">
                                                {val?.institute}
                                            </p>
                                        </div>

                                        <span
                                            className={`
                                                inline-flex items-center gap-1
                                                text-[11px] sm:text-xs font-semibold
                                                px-3 py-1.5 rounded-full
                                                tracking-wide w-fit
                                                transition-all duration-300
                                                ${darkMode
                                                    ? "bg-amber-400/10 text-amber-400 ring-1 ring-amber-300/50"
                                                    : "bg-[#37290b]/10 text-[#37290b] ring-1 ring-[#37290b]/20"}
                                                hover:scale-[1.03] 
                                            `}
                                        >
                                            {val?.startDate
                                                ? `${month[new Date(val.startDate).getMonth()]} ${new Date(val.startDate).getFullYear()}`
                                                : ""}
                                            {val?.endDate
                                                ? ` – ${month[new Date(val.endDate).getMonth()]} ${new Date(val.endDate).getFullYear()}`
                                                : " – Present"}
                                        </span>

                                    </div>

                                    {/* Description */}
                                    <ul className={`list-disc list-inside space-y-1 text-sm opacity-90 ${darkMode ? "text-[#dbdbdb]" : "text-[#37290b]"}`}>
                                        {Array.isArray(val?.describe) &&
                                            val.describe.map((dv, iv) => (
                                                <div key={iv} className='relative my-2 pl-[18px]'>
                                                    <span className={`absolute top-[6px] -left-0 min-h-[6px] max-h-[6px] min-w-[6px] max-w-[6px] ${darkMode ? "bg-gray-300" : "bg-[#422c02]"} block rounded-full`}></span>
                                                    <span className='mb-4'>{dv}</span>
                                                </div>
                                            ))}
                                    </ul>

                                    <div className='flex  lg:hidden items-center gap-1.5 sm:gap-4 my-3'>
                                        {/* for phone and tablet version */}
                                        {
                                            val?.github_link && (
                                                <Link to={val?.github_link} className='w-fit'>
                                                    <div className={`w-fit flex items-center justify-center gap-0.5 px-2 sm:px-2.5 pl-3 sm:pl-3.5 py-[2px] sm:pt-[3px] rounded-full hover:scale-[104%] transition-transform duration-200 border ${darkMode ? "bg-gradient-to-r from-[#03912bf0] via-[#03912bf0] to-[#03783af0] border-gray-400" : "bg-[#613212f7] hover:bg-[#48260ff7] text-white border-[#e1dfda]"}`}>
                                                        <span className='text-[14px]'>{`GitHub`}</span> <span className='text-[20px]'>{" >"}</span>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                        {/* for phone and tablet version */}
                                        {
                                            val?.view_certificate && (
                                                <Link to={val?.view_certificate} className='w-fit'>
                                                    <div className={`w-fit flex items-center justify-center gap-0.5 px-2 sm:px-2.5 pl-3 sm:pl-3.5 py-[2px] sm:pt-[3px] rounded-full hover:scale-[104%] transition-transform duration-200 border ${darkMode ? "bg-gradient-to-r from-[#03912bf0] via-[#03912bf0] to-[#03783af0] border-gray-400" : "bg-[#613212f7] hover:bg-[#48260ff7] text-white border-[#e1dfda]"}`}>
                                                        <span className='text-[14px]'>{`View Certificate`}</span> <span className='text-[20px]'>{" >"}</span>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    </div>

                                    {/* Tech stack */}
                                    {Array.isArray(val?.tech_stack) && val.tech_stack.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {val.tech_stack.map((tv, ti) => (
                                                <span
                                                    key={ti}
                                                    className={`text-xs px-3 py-1 hover:scale-[104%] transition-transform duration-200 rounded-full border ${darkMode ? "bg-[#19191946] border-gray-600" : "bg-[#37290b]/5 border-[#37290b]/20"} `}
                                                >
                                                    {tv}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </section>

    )
}

export default Internship
