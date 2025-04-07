import { useEffect, useState } from "react"
 
import Postcard from "./Postcard";
import { useParams } from "react-router-dom";
import axios from "axios";
 
 

 

const Category = () => {
  const catID = useParams()
  const [catProducts, setcatProducts] = useState([]);

  useEffect(()=>{
const urlFetch = async ()=>{
  try {
    const response = await axios.get(`http://localhost:5173/src/Data.json`);
    const mainPost = response.data;

    const postfilterData = await mainPost.filter((item) => item.category == catID.cat);
    setcatProducts(postfilterData)

    } catch (error) {
      console.log(error.message)
    }
    
}
urlFetch()


  }, [catID])

 console.log(catProducts)

  return (
    <div className="w-full bg-slate-300 flex items-center px-[15px] py-[35px] justify-center flex-wrap gap-6 ">
        {
            catProducts.map((item)=>(
               
                <Postcard key={item.id} cardInfo={item} />
               
               
            ))
        }
    </div>
  )
}

export default Category