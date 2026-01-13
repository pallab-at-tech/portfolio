<div id="internId">

    <p className={`font-bold text-2xl sm:text-3xl mb-6 sm:pl-1 ${darkMode ? "" : "text-[#171924]"}`}>Work Experience</p>

    <div className="relative mt-12">

        {/* Vertical line */}
        <div className="absolute left-0 top-0 h-full w-[2px] -translate-x-1/2 bg-[#37290b]/40" />

        {
            experienceDetails && Array.isArray(experienceDetails) && experienceDetails.map((val, idx) => (
                <div className="relative pl-10 mb-20">

                    {/* Timeline dot */}
                    <span className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-red-700 ring-4 ring-red-400/40" />

                    <div className="flex items-start gap-16">
                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#730c0c]">
                                {val?.tittle}
                            </h3>
                            <p className="text-sm opacity-80">
                                {val?.institute}
                            </p>
                            <p className="text-xs mt-1 opacity-60">
                                {
                                    val?.startDate ? `${month[new Date(val?.startDate).getMonth()]} ${new Date(val?.startDate).getFullYear()} - ` : ""
                                }
                                {
                                    val?.endDate ? `${month[new Date(val?.endDate).getMonth()]} ${new Date(val?.endDate).getFullYear()}` : ""
                                }
                            </p>
                        </div>

                        <div className=''>
                            {
                                val?.describe?.map((dv, iv) => (
                                    <li>{dv}</li>
                                ))
                            }

                            <div className='mt-4 flex flex-wrap gap-2'>
                                {
                                    val?.tech_stack?.map((tv, ti) => (
                                        <span
                                            className={`text-xs px-3 py-1 rounded-full ${darkMode ? "bg-white/5 border border-white/10" : "bg-black/5 border border-black/10"}`}
                                        >
                                            {tv}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            ))
        }
    </div>
</div>