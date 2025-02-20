

import { Route, Link, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Home from "./components/home/Home"
import SubNavInfo from "./components/nav/subnavinfo/SubNavInfo"
import Pricing from "./components/pricing/Pricing"
function App() {

  return (
    <>
     
     {/* <Nav/> */}
     {/* <Home/> */}
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Routes>
    </>
  )
}

export default App
