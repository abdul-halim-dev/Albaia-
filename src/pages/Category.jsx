import { useEffect, useState } from "react"
 
import Postcard from "./Postcard";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
 
 

 

const Category = () => {

  const {pathname}= useLocation();
  
  useEffect(()=>{
      window.scrollTo(0,0)
  },[pathname])

  const catID = useParams()
  const [catProducts, setcatProducts] = useState([]);
  const [isloading, setisLoading] = useState(true)

  useEffect(()=>{
const urlFetch = async ()=>{
  try {
    const response = await axios.get(`http://localhost:5173/src/Data.json`);
    const mainPost = response.data;
    const postfilterData = await mainPost.filter((item) => item.category == catID.cat);
    setTimeout(() => {
    setcatProducts(postfilterData)
   
    setisLoading(false)
   }, 1000);

    } catch (error) {
      console.log(error.message)
    }
}
urlFetch()
  }, [catID])


  return (
    <section className="w-full flex flex-col items-center px-[15px] py-[25px] sm:py-[40px] justify-center gap-[25px] sm:gap-[45px] ">
      
      {/* Loader section start  */}
      {
         isloading ?  
           <div className="w-full flex items-center justify-center ">
                 <div className='w-[60%] sm:w-[30%] h-[30px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
          </div> :  
                  catProducts.map((item)=>(
                    <h1 key={item.id} className="text-2xl font-bold underline underline-offset-4 uppercase "> {item.sell} </h1>
                ))       
      }
         {/* Loader section end  */}

    
      {/* Loader section start  */}
      {

        isloading ?  
        // skeleton div start 
          <div className='w-full flex items-center py-[35px] sm:py-[40px] justify-center flex-wrap gap-[20px] sm:gap-[30px]'>
  
        <div className='w-full flex flex-col gap-[35px] sm:w-[48%] md:w-[31%] lg:w-[23%] h-[340px] p-[10px] rounded-[21px] border-[2px] animate-pulse border-[#605d5d]/80 '>
            <div className='w-full h-[180px] bg-[#605d5d]/80 rounded-[21px] animate-pulse'> </div>
            <div className='flex flex-col gap-1 '>
            <div className='w-full h-[20px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
            <div className='w-full h-[20px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
            </div>
            <div className='w-full h-[30px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
         </div>

        <div className='w-full flex flex-col gap-[35px] sm:w-[48%] md:w-[31%] lg:w-[23%] h-[340px] p-[10px] rounded-[21px] border-[2px] animate-pulse border-[#605d5d]/80 '>
           <div className='w-full h-[180px] bg-[#605d5d]/80 rounded-[21px] animate-pulse'> </div>
           <div className='flex flex-col gap-1 '>
           <div className='w-full h-[20px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
           <div className='w-full h-[20px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
           </div>
           <div className='w-full h-[30px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
         </div>

        </div> 
        // skeleton div end 
        :
        // product card start 
      <div className="w-full flex items-center justify-center gap-6 flex-wrap">
        {
            catProducts.map((item)=>(
                <Postcard key={item.id} cardInfo={item} />
            ))
        }
      </div>
       // product card end 
        }
        {/* Loader section end  */}
    </section>
  )
}

export default Category