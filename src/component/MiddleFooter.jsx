import React from 'react'
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"

const MiddleFooter = () => {
  return (
    <div className=" w-full sm:w-[48%] md:w-[30%]  flex items-center justify-center flex-col gap-2">
    <h4 className="text-2xl font-primary font-semibold text-active"> Contact Us</h4>
    <a className="text-sm text-primary font-primary text-white flex items-center justify-center gap-2 " href="tel:+880124587654"> <FaPhoneAlt/> +880124587654</a>
    <a className="text-sm text-primary font-primary text-white flex items-center justify-center gap-2" href="mailto: email@example.com"> <FaEnvelope />  demo@gmail.com</a>
    </div>
  )
}

export default MiddleFooter