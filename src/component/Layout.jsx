import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

 

const Layout = () => {
  return (
    <div className="  ">
        <Header/>
        <div className="w-full flex items-start p-[0px] lg:flex-row flex-col justify-center gap-0 bg-primary ">
            <Outlet/>
        </div>
        <Footer/>

    </div>
  )
}

export default Layout