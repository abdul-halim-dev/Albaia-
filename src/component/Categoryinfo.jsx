import { Link } from "react-router-dom"
import Singlecategory from "./Singlecategory"
 
import GetFunc from "@/APIBOX/GetFunc"
import { Singlecategories } from "@/APIBOX/Apilist"
import { useEffect, useState } from "react"




const Categoryinfo = () => {
//     const [categoriescard , setcategoriescard] = useState([])

// useEffect(()=>{
//   const categoryFetch = async ()=>{
//     try {
      
//       const response = await GetFunc(Singlecategories);
//       console.log(response.data)
//       setcategoriescard(response.data)
//     } catch (error) {
//       console.log(error.message)
//     }
//   }
//   categoryFetch()
// },[])
  return (
    <div className=" w-full flex flex-col gap-4  bg-black/80  py-[40px] px-4">
    <span className="py-4 shadow rounded uppercase px-4 bg-orange-500 text-white text-2xl font-primary font-bold">Category</span>

      <Link to={"/"} className="py-4 shadow rounded uppercase px-4 bg-orange-500 text-white text-xl font-primary font-bold"> All Categories</Link>
{/* 
    {
      categoriescard.map((item)=>(
         <Singlecategory key={item.id} catInfo={item} />
      ))
    } */}
  </div>
  )
}

export default Categoryinfo