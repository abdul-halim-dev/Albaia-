import HomeSlider from '@/component/HomeSlider'
 
import Overview from '@/component/Overview'
import Testimonial from '@/component/Testimonial'
import React, { useEffect } from 'react'
import Home from './Home'
import { useLocation } from 'react-router-dom'
 
const Landingpage = () => {

   const {pathname}= useLocation();
      
      useEffect(()=>{
          window.scrollTo(0,0)
      },[pathname])

  return (
  <div className='w-full flex flex-col'>
      <HomeSlider/>
      <Overview/>
      <Home/>
      <Testimonial/>
  </div>
  )
}

export default Landingpage