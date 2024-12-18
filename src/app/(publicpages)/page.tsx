import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Navbar from '../components/Breakpoint'
import Section1 from '../components/Section1'
import Section3 from '../components/Section3'
import Section6 from '../components/Section6'
import Section5 from '../components/Section5'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='bg-white text-black'>
    <Section5/>
    <Section6/>
    </div>
    <Footer/>
    </>
  )
}

export default Home