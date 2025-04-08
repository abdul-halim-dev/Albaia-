import Aboutus from "./Aboutus"
import BottomFooter from "./BottomFooter"
 
import Information from "./Information"
import MiddleFooter from "./MiddleFooter"

 

const Footer = () => {
  return (
    <>
     <footer className=" px-[40px] py-[60px] w-full  flex  flex-col sm:flex-row  items-start justify-between gap-6 sm:gap-2 bg-secondary ">
      <Aboutus/>
      <MiddleFooter/>
      <Information/>
   </footer>

  <BottomFooter/>
    </>
   
  )
}

export default Footer