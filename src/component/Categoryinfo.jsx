import { Link } from "react-router-dom"



const Categoryinfo = () => {

  return (
    <div className=" w-full flex flex-col gap-4  bg-black/80  py-[40px] px-4">
    <span className="py-4 shadow rounded uppercase px-4 bg-orange-500 text-white text-2xl font-primary font-bold">Category</span>

      <Link to={"/"} className="py-4 shadow rounded uppercase px-4 bg-orange-500 text-white text-xl font-primary font-bold"> All Categories</Link>

  </div>
  )
}

export default Categoryinfo