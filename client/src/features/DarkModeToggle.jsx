import React from 'react'
import { useGlobalContext } from '../provider/GlobalProvider'


const DarkModeToggle = () => {

  const { darkMode, setDarkMode } = useGlobalProvider();
  return (
    <div>
      <div className='bg-white min-h-screen flex justify-center items-center flex-col dark:bg-gray-900 transition-all'>

        <p className='text-3xl dark:text-white'>Hello i am pallab</p>
        <p onClick={() => {
          setDarkMode(!darkMode)
        }} className='cursor-pointer dark:text-white'>Click to toggle</p>

      </div>
    </div>
  )
}

export default DarkModeToggle
