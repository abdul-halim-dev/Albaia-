import Aboutus from "./Aboutus"
import BottomFooter from "./BottomFooter"
 
import Information from "./Information"

 

const Footer = () => {
  return (
    <>
     <footer className=" px-[40px] py-[35px] w-full  flex  flex-col sm:flex-row  items-start justify-between gap-6 sm:gap-2 bg-secondary ">
     
     <Aboutus/>
   
     <Information/>


  </footer>

  <BottomFooter/>
    </>
   
  )
}

export default Footer