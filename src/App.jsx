import React from  "react"
import Navbar from "./components/Navbar.jsx";
import HomeContent from "./components/HomeContent.jsx"
import "./Style.scss"
import About from "./components/About.jsx"
export default function App(){
  return(
    <div> 
    <div className = "Bg">
    <div>
    <Navbar/>
    <HomeContent/>
    </div>
    </div>
    <div className = "Bg">
    <About/>
    </div>




    </div>
  )
}