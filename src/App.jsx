 
import Layout from "./component/Layout"
import './App.css'
import ScrollToTop from "react-scroll-to-top"
 

 
  
  const App = () => {
    return (
      <div style={{ marginTop: "0px" }}>
      <Layout/>
      <ScrollToTop smooth className="!bg-active !text-primary"/>
      </div>
    )
  }
  
  export default App