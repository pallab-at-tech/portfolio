import React from 'react'
import GlobalProvider from './provider/GlobalProvider'
import { Outlet } from 'react-router-dom'
import Header from './components/Header';
import DarkModeToggle from './features/DarkModeToggle';
import About from './pages/About';

const App = () => {

  return (
    <>
      <GlobalProvider >

        <Header />

        <Outlet />

      </GlobalProvider >
    </>
  )
}

export default App


