import React, { useEffect } from 'react'
import GlobalProvider, { useGlobalContext } from './provider/GlobalProvider'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import DarkModeToggle from './features/DarkModeToggle';
import Footer from './components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import fetchUserDetails from './utils/FetchUserDetails';
import { setUserDetails } from './store/userSlice';

const App = () => {

  const dispatch = useDispatch()
  const allOf = useSelector(state => state.allofdetails)
  const { darkMode, setDarkMode } = useGlobalContext();

  const fetchUser = async () => {
    const user = await fetchUserDetails()
    dispatch(setUserDetails(user?.data))
  }

  useEffect(() => {
    fetchUser()
  }, [])


  return (
    <>
      <Header isReady={!!allOf?.name} />

      {
        allOf?.name ? (

          <>
            <Outlet />
          </>

        ) : (
          <div className={`fixed inset-0 flex items-center justify-center ${darkMode ? "background-image" : "bg-[#e9d6b4]"}`}>
            <div className='windowload'></div>
          </div>
        )
      }


      {/* <Footer /> */}
      <Toaster />
    </>
  )
}

export default App


