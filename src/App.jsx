 
import Layout from "./component/Layout"
import './App.css'
import ScrollToTop from "react-scroll-to-top"
import { Toaster } from "react-hot-toast"
 

 
  
  const App = () => {
    return (
      <div style={{ marginTop: "0px" }}>
        <Toaster/>
        <Layout/>
        <ScrollToTop smooth className="!bg-active !text-primary !shadow"/>
      </div>
    )
  }
  
  export default App