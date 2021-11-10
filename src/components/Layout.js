import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from './Navigation'
import Footer from './Footer'

import './Layout.css'

function Layout() {
  return (
    <div className='layout_container'>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
