import HomeSlider from '@/component/HomeSlider'
 
import Overview from '@/component/Overview'
import Testimonial from '@/component/Testimonial'
import React from 'react'
import Home from './Home'
 
const Landingpage = () => {
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