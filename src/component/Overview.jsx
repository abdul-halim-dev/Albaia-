import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Loading from './Loading'
import OverviewLoading from './OverviewLoading'

const Overview = () => {
  const [isLoading, setisLoading]=useState(true)
     const sliderDetails = [
    {
      img:"https://i.ibb.co.com/4gWxQ5Jj/maxall.png",
      title:"Maxwell House",
      url:"/category/Grocery"
    },
     {
      img:"https://i.ibb.co.com/Dfn20WSR/dukin.png",
      title:"Dunkin' Donuts",
      url:"/category/Grocery"
    },
     {
      img:"https://i.ibb.co.com/WpNyNrdS/mott.png",
      title:"Mott's Inc Clamato",
      url:"/category/Grocery"
    },

    {
      img:"https://i.ibb.co.com/twwzCqCh/owala.png",
      title:"Owala SmoothSip",
       url:"/category/Home Kitchen"
    },
     {
      img:"https://i.ibb.co.com/D2LvrK9/Stanley.png",
      title:"Stanley Quencher",
      url:"/category/Home Kitchen"
    },
     {
      img:"https://i.ibb.co.com/qL91vC8Q/lemi.png",
      title:"Lemi Shine",
       url:"/category/Household"
    },
    {
      img:"https://i.ibb.co.com/kgF32X5S/pods.png",
      title:"Dishwasher Pods",
       url:"/category/Household"
    },
   ]
  
useEffect(()=>{
  setTimeout(() => {
      setisLoading(false)
  }, 1500);
})




  return (
    <div className='w-full flex items-center  flex-col gap-[30px] sm:gap-[50px] px-[25px] sm:px-[60px] py-[10px] '> 
       {
         isLoading ?  
          <div className="w-full flex items-center justify-center ">
                 <div className='w-[50%] sm:w-[40%] h-[30px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
           </div> :  
                  <h2 className='w-[90%] text-[20px] sm:text-[30px] text-center font-semibold uppercase underline underline-offset-[10px]'> SHOP BY BRAND</h2>

      }       
        
      {
          isLoading? <OverviewLoading/>:
   
      <div className='w-full flex flex-wrap gap-[15px] items-center justify-center  sm:px-0 px-[20px]  '>
        <Carousel
          opts={{
            align: "center",
            loop:true
          }}
          className="w-full   "
        >
        <CarouselContent >
          {sliderDetails.map((item, index) => (
            <CarouselItem key={index} className=" basis-1/1 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 py-2.5  ">
               <Link to={`${item.url}`} key={item.id} className=' duration-200 w-[100%] h-[217px] cardBorder flex items-center justify-center flex-col gap-[10px] ' > 
                <img className='hover:scale-110 duration-200 transition-all w-[173px] h-[140px] object-cover ' src={item.img} alt="Product image" />
                <h3 className='text-base font-semibold font-poppins '>{item.title} </h3>
               </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!border-[#180D5B] cursor-pointer  " />
        <CarouselNext className="!border-[#180D5B] cursor-pointer  "/>
      </Carousel>
        </div>
      }
    </div>
  )
}

export default Overview