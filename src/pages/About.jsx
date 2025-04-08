import React, { useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom'

const About = () => {

const {pathname}= useLocation();

useEffect(()=>{
    window.scrollTo(0,0)
},[pathname])


  return (
    <section className='w-full py-[50px] flex items-center justify-center flex-col gap-[20px] '>
        <div className='w-full flex items-center justify-start  pl-[25px] sm:pl-[40px] '> 
            <Link to="/" className='w-[120px] gap-2 hover:bg-active duration-200 flex items-center justify-center bg-secondary text-primary rounded-md shadow-md py-1 text-base font-semibold'> Home <IoIosArrowForward />  
            </Link> 
        </div>
         <div className='w-full h-[250px] shadow-md sm:h-[400px]   '> 
                <img className='w-full h-full  img object-cover' src="https://i.ibb.co.com/gFg9ccsN/about-ss.jpg" alt="about-meeting-image" />
        </div>
       <div className='w-full flex items-center justify-center flex-col gap-6 pt-[20px] px-[20px] sm:px-[40px] '>
            <h1 className='text-center text-[32px] text-secondary font-bold uppercase underline underline-offset-4 '> Our Misson</h1>
            <p className='text-base text-secondary font-medium leading-[25px] '> <span className='text-3xl font-bold text-secondary float-center '> Welcome</span> to Albaia – your go-to destination for quality groceries, household essentials, and kitchen products at unbeatable prices. We strive to bring you a shopping experience with a wide selection of products, ensuring convenience and affordability. Our mission is to provide customers with the best value while continuously expanding our offerings. At Albaia, we believe in making everyday shopping simple, reliable, and budget-friendly.</p>
       </div>

       <div className='w-full flex md:flex-row flex-col pt-[40px] gap-[20px] md:gap-0 px-[20px] sm:px-[40px] items-center justify-center '>
            <div className='w-full md:w-[50%] h-auto '> 
                <img className='w-full h-full object-cover' src="https://i.ibb.co.com/dJ667J7c/customers-800x599.jpg" alt="customer-image" />
               
            </div>
            <div className='w-full md:w-[50%] flex items-center justify-center flex-col gap-[25px] sm:gap-[35px] '>
                <div className='w-full flex items-center justify-center flex-col gap-[15px] sm:gap-[25px] '>
                     <h4 className='text-[18px] font-bold text-secondary '>Active Customers </h4>
                    <h1 className='sm:text-[60px] text-2xl font-bold text-secondary  '> 40,000</h1>
                </div>
                <p className='w-full md:w-[85%] lg:w-[70%] text-[20px] font-medium text-center '>
                    Avada is the preferred choice of beginners, marketers, and professionals.
                    Avada is the preferred choice of beginners, marketers, and professionals.
                </p>
            </div>
       </div>
    </section>
  )
}

export default About