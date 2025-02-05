import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home"
import PlaceOrder from "./pages/PlaceOrder"
import Cart from "./pages/Cart"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/order" element={<PlaceOrder/>}/>
            
        </Routes>

        
      </div>
  
    </>
  )
}

export default App
