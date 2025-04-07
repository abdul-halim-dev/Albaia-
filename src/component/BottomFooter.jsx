import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

 

const BottomFooter = () => {
  return (
    <div className="bg-primary px-[15px] py-[15px] w-full flex-col sm:flex-row flex gap-4 items-center justify-evenly ">
        <div className=" flex items-center justify-center gap-4 ">
                <a className="  text-active hover:text-secondary transition-all ease-in duration-300 text-xl font-semibold " href="https://www.facebook.com/" target="_blank"> <FaFacebook /> </a>
                <a className="  text-active hover:text-secondary transition-all ease-in duration-300 text-xl font-semibold " href="#"> <FaTwitter /> </a>
                <a className="  text-active hover:text-secondary transition-all ease-in duration-300 text-xl font-semibold " href="#"> <FaInstagram /> </a>
                <a className="  text-active hover:text-secondary transition-all ease-in duration-300 text-xl font-semibold " href="#"> <FaYoutube /> </a>
            </div>
            <div>
                <span className="text-secondary text-sm "> &copy; AlphaBet All Rights Reserved</span>
            </div>
        </div>
  )
}

export default BottomFooter