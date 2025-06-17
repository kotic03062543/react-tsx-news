import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Header />
      <NavBar />
      <div className="flex-grow"> {children} </div>
      <Footer />
    </div>
  )
}

export default Layout
