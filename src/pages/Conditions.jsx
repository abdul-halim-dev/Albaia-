import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io"
import { Link, useLocation } from "react-router-dom"

 

const Conditions = () => {

      const {pathname}= useLocation();
      
      useEffect(()=>{
          window.scrollTo(0,0)
      },[pathname])

      
  return (
    <section className=" w-full py-[50px] flex items-center justify-center flex-col gap-[20px]   ">
       <div className='w-full flex items-center justify-start  pl-[25px] sm:pl-[40px] '> 
                  <Link to="/" className='w-[120px] gap-2 hover:bg-active duration-200 flex items-center justify-center bg-secondary text-primary rounded-md shadow-md py-1 text-base font-semibold'> Home <IoIosArrowForward />  
                  </Link> 
              </div>
               <div className='w-full h-[210px] shadow-md sm:h-[280px]   '> 
                      <img className='w-full h-full  img object-cover' src="https://i.ibb.co.com/hxvDvhRt/page-title-7.jpg" alt="about-meeting-image" />
              </div>
              <div className='w-full flex items-center justify-center flex-col gap-6 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h1 className='text-center text-[20px] sm:text-[32px] text-secondary font-bold uppercase underline underline-offset-4 '> Terms Conditions – Albaia</h1>
                    <p className='text-base text-secondary font-medium leading-[25px] '> <span className='text-2xl sm:text-3xl font-bold text-secondary float-center '> At Albaia</span> , we believe in collaboration, integrity, and a shared vision to create exceptional shopping experiences. Our team operates under the following conditions to ensure a productive, respectful, and growth-focused environment: </p>
             </div>

              <div className='w-full flex items-start justify-center flex-col gap-2 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h3 className='text-start text-[22px] text-secondary font-semibold capitalize '> 1. Respect & Inclusion</h3>
                    <p className='text-base text-secondary font-medium leading-[25px] '> Every team member is valued. We promote a culture of respect, inclusivity, and open communication, where diverse ideas and backgrounds are embraced. </p>
             </div>
              <div className='w-full flex items-start justify-center flex-col gap-2 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h3 className='text-start text-[22px] text-secondary font-semibold capitalize '>2. Accountability & Responsibility</h3>
                    <p className='text-base text-secondary font-medium leading-[25px] '> Each team member is responsible for their role and deliverables. We hold ourselves and each other accountable for maintaining high standards of work and professionalism. </p>
             </div>
              <div className='w-full flex items-start justify-center flex-col gap-2 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h3 className='text-start text-[22px] text-secondary font-semibold capitalize '>3. Transparency & Communication</h3>
                    <p className='text-base text-secondary font-medium leading-[25px] '> We encourage honest and constructive communication. Updates, challenges, and feedback are shared regularly to ensure alignment and trust across all departments. </p>
             </div>
              <div className='w-full flex items-start justify-center flex-col gap-2 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h3 className='text-start text-[22px] text-secondary font-semibold capitalize '>4. Customer-Centric Mindset</h3>
                    <p className='text-base text-secondary font-medium leading-[25px] '>Our customers are at the heart of everything we do. Every decision and task is driven by a desire to enhance their experience and satisfaction. </p>
             </div>
              <div className='w-full flex items-start justify-center flex-col gap-2 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h3 className='text-start text-[22px] text-secondary font-semibold capitalize '>5. Continuous Improvement</h3>
                    <p className='text-base text-secondary font-medium leading-[25px] '>Our customers are at the heart of everything we do. Every decision and task is driven by a desire to enhance their experience and satisfaction. </p>
             </div>
              <div className='w-full flex items-start justify-center flex-col gap-2 pt-[20px] px-[20px] sm:px-[40px] '>
                    <h3 className='text-start text-[22px] text-secondary font-semibold capitalize '>6. Collaboration Over Competition</h3>
                    <p className='text-base text-secondary font-medium leading-[25px] '>We work together, not in silos. Success at Albaia is a collective achievement, built on mutual support and shared goals. </p>
             </div>


    </section>

   )
}

export default Conditions