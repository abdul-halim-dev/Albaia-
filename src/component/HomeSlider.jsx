 import React from 'react'

 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
 
 const HomeSlider = () => {
   return (
     <div className='w-full h-auto '> 

<Carousel showArrows={false} autoPlay={true} showStatus={false} showThumbs={false} swipeable={true} infiniteLoop=
{true}  className='w-full h-auto mb-[20px] sm:mb-[50px]  ' >
                <Link to={"/category/Home Kitchen"} className=' w-full   sm:h-[auto] md:h-auto cursor-pointer relative flex items-center justify-center '>
                    <img className='w-full sm:h-[auto] md:h-auto object-contain cursor-pointer' src="https://i.ibb.co.com/FLYWL7KH/2-01.jpg" />
                    <div className='sm:flex hidden bg-[#1a1010]/40 backdrop-blur-sm absolute top-[6px] px-[20px]   '>
                    <h1 className='  sm:text-[18px] md:text-[24px] font-bold text-primary '>More Choices, Better Prices – Groceries, Household & Kitchen Essentials for You</h1>
                    </div>
                </Link>
                <Link to={"/category/Household"} className='w-full  sm:h-[auto] md:h-auto cursor-pointer relative flex items-center justify-center '>
                    <img className='w-full sm:h-[auto] md:h-auto object-contain cursor-pointer' src="https://i.ibb.co.com/FbZHBXKR/3-01.jpg" />
                    <div className='sm:flex hidden bg-[#1a1010]/40 backdrop-blur-sm absolute top-[6px]  px-[20px]   '>
                    <h1 className='text-[18px] md:text-[24px] font-bold text-primary '>More Choices, Better Prices – Groceries, Household & Kitchen Essentials for You</h1>
                    </div>
                </Link>
                <Link to={"/category/Grocery"} className='w-full  sm:h-[auto] md:h-auto cursor-pointer relative flex items-center justify-center '>
                    <img className='w-full  sm:h-[auto] md:h-auto object-contain cursor-pointer' src="https://i.ibb.co.com/FL2Q3Rx2/1.jpg"/>
                    <div className='sm:flex hidden bg-[#1a1010]/40 backdrop-blur-sm absolute top-[6px]  px-[20px]   '>
                    <h1 className='text-[18px] md:text-[24px] font-bold text-primary '>More Choices, Better Prices – Groceries, Household & Kitchen Essentials for You</h1>
                    </div>
                </Link>
            </Carousel>
    
     </div>
   )
 }
 
 export default HomeSlider