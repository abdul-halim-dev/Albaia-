import { useEffect, useState } from "react"
 
import Postcard from "./Postcard";
import axios from "axios";



const Home = () => {

    const [allproductStorecard, setallproductStorecard] = useState([]);

    useEffect(() => {
        const APIfetch = async () => {
            try {
                const response = await axios.get("http://localhost:5173/src/Data.json");
                setallproductStorecard(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        APIfetch();

    }, [ ])

    return (
        <div className=" w-full flex flex-col items-center px-[10px] sm:px-[40px] py-[35px] sm:py-[50px] justify-center flex-wrap gap-[20px] sm:gap-[50px] ">
           
           <h2 className='w-[90%] text-[20px] sm:text-[30px] text-center font-semibold uppercase underline underline-offset-[10px] '> Top Sellers </h2>           
          <div className="w-full flex flex-wrap items-center justify-center gap-6">
          {
                allproductStorecard.map((item) => (
                    <Postcard key={item.id} cardInfo={item} />
                ))
            }
          </div>
        </div>
    )
}

export default Home