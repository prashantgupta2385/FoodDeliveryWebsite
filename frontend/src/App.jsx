import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import PlaceOrder from "./pages/PlaceOrder"
import Cart from "./pages/Cart"
import Footer from "./components/Footer"
import ExploreMenu from './components/ExploreMenu'
import AppDownload from './components/AppDownload'
import LoginPopUp from './components/LoginPopUp'
function App() {
  const[showLogin,setShowLogin]=useState(false);


  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
      <div>
       <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<PlaceOrder/>}/>
          <Route path="/menu" element={<ExploreMenu/>}/>

          <Route path="/mobile-app" element={<AppDownload/>}/>
            
        </Routes>

        
      </div>
      <Footer/>
     
  
    </>
  )
}

export default App
