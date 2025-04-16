import { useEffect, useState } from "react"
 
import Postcard from "./Postcard";
import axios from "axios";
import Loading from "@/component/Loading";

const Home = () => {

    const [allproductStorecard, setallproductStorecard] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const APIfetch = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_APP_URL}/src/Data.json`);
                setTimeout(() => {
                setallproductStorecard(response.data)
                setisLoading(false)
                }, 300);
            } catch (error) {
                <div>
                loading {error.message}
              </div>
                console.log(error.message)
            }
        }
        APIfetch();
    }, [ ])

    return (
        <div className=" w-full flex flex-col items-center px-[15px] sm:px-[40px] py-[35px] sm:py-[50px] justify-center flex-wrap gap-[20px] sm:gap-[50px] ">
           
           {
            // loader start here 
             isLoading ?  
                <div className="w-full flex items-center justify-center ">
                     <div className='w-[50%] sm:w-[40%] h-[30px] bg-[#605d5d]/80 rounded-md animate-pulse'></div>
                 </div> :  
                <h2 className='w-[90%] text-[20px] sm:text-[30px] text-center font-semibold uppercase underline underline-offset-[10px] '> Top Sellers </h2> 
               // loader end here 
             }

         
         {isLoading ? 
         <Loading/>:
        //  data send to the postcard page 
          <div className="w-full flex flex-wrap items-center justify-center gap-6">
            {
                allproductStorecard.map((item) => (
                    <Postcard key={item.id} cardInfo={item} />
                ))
            }
          </div>
          //  data send to the postcard page 
            }
        </div>
    )
}

export default Home