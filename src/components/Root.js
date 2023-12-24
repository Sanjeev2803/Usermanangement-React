import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function rootlayout() {
  return (
    <div>
    <Header/>
   <div className='container' style={{minHeight:"80vh"}}><Outlet/></div> 
   <Footer/>
   </div>
  )
}

export default rootlayout