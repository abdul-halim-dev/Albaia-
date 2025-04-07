
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

 

const Singlepage = () => {
  const singleID = useParams();

  const [singleproduct, setsingleproduct] = useState({})

  useEffect(()=>{

    const productFetch = async ()=>{
    const response = await axios.get(`http://localhost:5173/src/Data.json`)
    setsingleproduct(response.data.filter((item)=>item.id == singleID.id))
    // setPostData(res.data.filter((item)=>item.id == pId.postId))

    }
    productFetch()


  }, [singleID])
console.log(singleproduct)
  
  return (
    <div className=" w-full h-auto bg-neutral-700 flex p-[20px] py-[50px] flex-col md:flex-row  gap-4 items-start justify-center ">

    <div className=" w-full md:w-[50%] h-full md:h-[450px] border-2 border-active p-2 sm:p-4 items-start justify-center">
      <img className="w-full h-full object-contain" src={singleproduct[0]?.img2} alt="" />
 
    </div>
    
    <div className="w-full md:w-[50%] p-2 sm:p-4 flex items-start justify-center flex-col gap-7 ">
      <h1 className=" text-3xl sm:text-4xl font-primary font-bold text-secondary "> {singleproduct[0]?.title}  </h1>
      <p className=" text-base sm:text-lg text-secondary font-medium sm:font-semibold font-primary"> {singleproduct[0]?.description} </p>

      <div className="w-full flex items-center justify-between">
        <div>
          <span className=" px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary"> Rating:{singleproduct[0]?.rating}  </span>
 
        </div>
        <div>
          <span className="px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary"> Price:{singleproduct[0]?.price}  </span>
        </div>

     

      </div>
      <div className="w-full flex gap-4 items-start justify-start">
        <Link className="px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary"> Add to Cart  </Link>
        <Link className="px-6 py-2 bg-secondary text-primary rounded-2xl shadow-md hover:bg-active duration-300 transition-all ease-linear text-sm font-semibold font-primary">  Buy Now  </Link>
      
      </div>
    </div>


    </div>
  )
}

export default Singlepage