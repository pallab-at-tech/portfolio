import React from 'react'
import { useGlobalContext } from '../provider/GlobalProvider';

const Footer = () => {

    const { darkMode, setDarkMode } = useGlobalContext()

    return (
        <section className={`${darkMode ? "bg-primary-dark" : "bg-[#241a07]"}`}>

            <div className={`px-10 py-1 flex items-center justify-center ${darkMode ? "text-[#abaeb2]" : "text-[#abaeb2]"}`}>
                <p>&copy;2025 pallab.All rights reserved.</p>
            </div>


        </section>
    )
}

export default Footer
