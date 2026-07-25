import React from 'react'

const SmallLoader = ({ darkMode = false }) => {
    return (

        <div className="flex items-center justify-center h-full w-full">
            <div
                className={`h-10 w-10 animate-spin rounded-full border-4 ${darkMode
                    ? "border-gray-700 border-t-[#59b806]"
                    : "border-gray-300 border-t-[#a80202]"
                    }`}
            />
        </div>

    )
}

export default SmallLoader
