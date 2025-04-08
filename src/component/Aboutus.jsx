import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import logo from '../assets/Logo/Albaia1-01.png'
 

const Aboutus = () => {
  return (
    <div className=" border-b-2 sm:border-b-0 pb-5 sm:pb-0 w-full sm:w-[48%] md:w-[40%] lg:w-[40%] flex  items-center sm:items-start justify-center flex-col gap-6 ">

<div className=" px-4 py-2 bg-primary shadow rounded-md ">
                <Link className="  " to="/"> <img className="w-[150px] h-[60px] object-cover  " src={logo} alt="" />  </Link>
            </div>
<div className=" w-full flex items-center sm:items-start justify-center flex-col gap-4">
    <h4 className=" text-2xl font-primary font-semibold text-active "> About Us </h4>
<span className="text-lg text-center sm:text-start  font-primary text-primary ">
    We want to help bring talented students and unique starting together.
</span>
</div>

 






    </div>
  )
}

export default Aboutus