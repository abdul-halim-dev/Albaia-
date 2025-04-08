import { Link } from "react-router-dom"
import ScrollToTop from "react-scroll-to-top";



const Information = () => {

    const linkStyle = ` text-primary text-sm hover:underline underline-offset-2 duration-300 transition-all ease-linear hover:text-orange-400 font-primary`;

    return (
        <div className=" border-b-2 sm:border-b-0 pb-5 sm:pb-0 w-full sm:w-[48%] md:w-[30%] flex flex-col gap-4 items-center justify-center ">
            <h4 className="text-2xl font-primary font-semibold text-active "> HelpFul Links </h4>
            <div className=" w-full flex flex-col items-center justify-center gap-2">
                <Link className={linkStyle} to={"/service"}> Services  </Link>
            
                <Link className={linkStyle} to={"/"}> Terms & Conditions   </Link>
                <Link className={linkStyle} to={"/"}> Privacy Policy  </Link>
            
                <Link className={linkStyle} to={"/about"}> About Us  </Link>
                <Link className={linkStyle} to={"/testimonial"}> Testimonials  </Link>
            </div>
            <ScrollToTop smooth className="!bg-orange-500 !text-white"/>
        </div>
    )
}

export default Information