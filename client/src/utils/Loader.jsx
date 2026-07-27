import React from 'react'
import { useGlobalContext } from '../provider/GlobalProvider'

const Loader = () => {

    const { darkMode } = useGlobalContext();

    return (
        <div className={`${darkMode ? "bg-primary-black text-gray-400" : "bg-[#e9d6b4]"} p-8 text-2xl flex items-center justify-center`}>
            <div className={`fallBackLoader`}></div>
        </div>
    )
}

export default Loader
