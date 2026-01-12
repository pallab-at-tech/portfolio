<div id="internId">

    <p className={`font-bold text-2xl sm:text-3xl  mb-6 sm:pl-1 ${darkMode ? "" : "text-[#171924]"}`}>Work Experience</p>

    <div className="relative max-w-5xl mx-auto mt-12">

        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#37290b]/40" />

        {/* ===== Experience Item 1 ===== */}
        <div className="relative grid grid-cols-2 gap-10 mb-20">

            {/* Left side */}
            <div className="md:text-right md:pr-12">
                <h3 className="text-lg sm:text-xl font-semibold text-[#730c0c]">
                    Web Developer Intern
                </h3>
                <p className="text-sm opacity-80">
                    Acceptare Technology Pvt. Ltd · Remote
                </p>
                <p className="text-xs mt-1 opacity-60">
                    Dec 2024 – March 2025
                </p>
            </div>

            {/* Timeline dot */}
            <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-red-700 ring-4 ring-red-400/40" />

            {/* Right side */}
            <div className="md:pl-12">
                <ul className="space-y-2 text-sm sm:text-base leading-relaxed opacity-90">
                    <li>• Developed scalable web applications using <b>TypeScript</b>, <b>React</b>, and <b>Node.js</b>.</li>
                    <li>• Implemented role-based authentication and document management.</li>
                    <li>• Optimized backend performance using <b>Prisma ORM</b> and <b>PostgreSQL</b>.</li>
                    <li>• Built an employee verification system for selfie-based attendance.</li>
                    <li>• Designed CMS-integrated websites using Tailwind CSS.</li>
                </ul>

                {/* Tech stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {[
                        "TypeScript",
                        "React",
                        "Node.js",
                        "Express",
                        "Prisma",
                        "PostgreSQL",
                        "Tailwind CSS",
                        "Framer Motion",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className={`text-xs px-3 py-1 rounded-full ${darkMode
                                ? "bg-white/5 border border-white/10"
                                : "bg-black/5 border border-black/10"}
                                        `}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* ===== Experience Item 2 ===== */}
        <div className="relative grid grid-cols-2 gap-10">

            {/* Left side content */}
            <div className="md:text-right md:pr-12">
                <ul className="space-y-2 text-sm sm:text-base opacity-90">
                    <li>• Developed a modern landing page using <b>Astro.js</b>.</li>
                    <li>• Built a cross-platform mobile app using <b>React Native</b>.</li>
                    <li>• Integrated authentication and real-time database using <b>Supabase</b>.</li>
                </ul>
            </div>

            {/* Timeline dot */}
            <span className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-red-700 ring-4 ring-red-400/40" />

            {/* Right side title */}
            <div className="md:pl-12">
                <h3 className="text-lg sm:text-xl font-semibold text-[#730c0c]">
                    Freelance Developer
                </h3>
                <p className="text-sm opacity-80">
                    Self-Employed
                </p>
                <p className="text-xs mt-1 opacity-60">
                    Jan 2025 – Present
                </p>
            </div>
        </div>

    </div>


</div>