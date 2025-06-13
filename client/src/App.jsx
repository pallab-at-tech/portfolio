import React from 'react'
import GlobalProvider from './provider/GlobalProvider'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import DarkModeToggle from './features/DarkModeToggle';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
      <GlobalProvider >

        <Header />

        <Outlet />

        <Footer/>

      </GlobalProvider >
    </>
  )
}

export default App


