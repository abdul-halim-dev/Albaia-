 
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

const MiddleFooter = () => {
  return (
    <div className=" w-full sm:w-[48%] md:w-[30%] flex items-center justify-center flex-col gap-4">
    <h4 className="text-2xl font-primary font-semibold text-active"> Contact Us</h4>
    
      <div className=" w-full sm:w-[70%] md:w-[60%] lg:w-[40%] flex flex-col gap-2 items-center justify-center sm:items-start sm:justify-start">
          <a className="text-sm text-primary font-primary text-white flex items-center justify-center gap-2 " href="tel:+1(941)264-3428"> <FaPhoneAlt/> +1(941)264-3428</a>
          <a className="text-sm text-primary font-primary text-white flex items-center justify-center gap-2 " href="https://wa.me/19412643428" target="_blank"> <FaWhatsapp className="text-base "/> +1(941)264-3428</a>
          <a className="text-sm text-primary font-primary text-white flex items-center justify-center gap-2" href="mailto: email@example.com"> <FaEnvelope /> support@albaia.com</a>
        
      </div>
    </div>
 
   
  )
}

export default MiddleFooter