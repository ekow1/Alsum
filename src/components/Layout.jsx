import React from 'react'
import Navigation from './sections/Navigation'
import MobileNav from './sections/MobileNav'
import {Outlet} from 'react-router-dom'
import Footer from './sections/Footer'
import GoTop from './sections/GoTop'

const Layout = () => {
  return (
    <>
    <Navigation/>
    <MobileNav />
    <Outlet />
    <GoTop/>
    <Footer />
    </>
  )
}

export default Layout