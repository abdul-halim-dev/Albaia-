import { Link } from "react-router-dom"

 

const Postcard = ({cardInfo}) => {
  return (
 <div className="productCard hover:border-active hover:shadow-md hover:-translate-y-[10px] transform duration-200 p-[10px] w-full sm:w-[48%] md:w-[31%] lg:w-[23%] h-[340px] border-[2px] border-secondary shadow rounded-[21px] flex items-start justify-center flex-col  gap-4  ">
<div className="w-full h-[180px]  rounded-[21px] ">
    <img className="w-full h-full rounded-[21px] object-cover" src={cardInfo?.img1} alt="" />
</div>
<div className="w-full flex items-center justify-center flex-col gap-3  ">
    <h3 className="  text-xl font-bold capitalize text-center "> {cardInfo?.title.substring(0, 30)} </h3>
    <Link className=" w-[180px] py-1 text-[16px] font-medium shadow text-center hover:bg-active transition-all ease-in duration-300 bg-orange-500 rounded-full hover:text-secondary  text-primary bg-secondary " to={`/singlepage/${cardInfo.id}`}> See More</Link>
</div>
</div>
  )
}

export default Postcard

// <div className="relative productCard w-full sm:w-[48%] md:w-[31%] lg:w-[31%] h-[340px] rounded-[21px] flex items-start justify-center flex-col  gap-4 bg-primary  ">
// <div className="w-full h-[180px]  rounded-md  ">
//     <img className="w-full h-full object-contain" src={cardInfo?.img1} alt="" />
// </div>
// <div className="w-full flex items-center justify-center flex-col gap-3 ">
//     <h3 className="  text-xl font-bold capitalize "> {cardInfo?.title.substring(0, 30)} </h3>
//     <Link className=" px-[15px] py-1 text-[16px] font-semibold shadow text-center hover:bg-active transition-all ease-in duration-300 bg-orange-500 rounded-full  text-secondary " to={`/singlepage/${cardInfo.id}`}> See More</Link>
// </div>
// </div>