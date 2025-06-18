import React, { useEffect } from 'react'
import GlobalProvider from './provider/GlobalProvider'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import DarkModeToggle from './features/DarkModeToggle';
import Footer from './components/Footer';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import fetchUserDetails from './utils/FetchUserDetails';
import { setUserDetails } from './store/userSlice';

const App = () => {

  const dispatch = useDispatch()

  const fetchUser = async () => {
    const user = await fetchUserDetails()
    dispatch(setUserDetails(user?.data))

    console.log("user app.jsx",user)
  }

  useEffect(() => {
    fetchUser()
  }, [])



  return (
    <>
      <GlobalProvider >

        <Header />

        <Outlet />

        <Footer />
        <Toaster />

      </GlobalProvider >
    </>
  )
}

export default App


