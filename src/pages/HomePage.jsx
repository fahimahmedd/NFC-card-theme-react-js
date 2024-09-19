import React from 'react'
import Header from '../components/Header'
import Hero from '../components/homeComponents/Hero'
import Introduce from '../components/homeComponents/Introduce'
import Mobile from '../components/homeComponents/Mobile'
import Buy from '../components/homeComponents/Buy'
import Dark from '../components/homeComponents/Dark'
import Review from '../components/homeComponents/Review'
import Footer from '../components/homeComponents/Footer'

const HomePage = () =>{
  window.scroll(0,0)
  return (
    <> 
     <Header/>
     <Hero/> 
     <Introduce/>
     <Mobile/>
     <Buy/>
     <Dark/>
     <Review/>
     <Footer/>
   </> 
  )
}
export default HomePage