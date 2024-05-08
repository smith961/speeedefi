import React from 'react'
import NavBar from './components/NavBar'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Homes/Homescreen"
import SupplyLend from "./pages/SupplyLend"
import LoanBorrow from "./pages/LoanBorrow"
import Liquidity from "./pages/Liquidity"
import Portfolio from "./pages/Portfolio"
import CollectRewards from "./pages/CollectRewards"
import NotFoundPage from "./pages/NotFoundPage"




function App() {
  return (
    <BrowserRouter>
      <NavBar />
        {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={ <Home/>}>

        <Route path="/supply-lend" element={<SupplyLend/>}/>
        <Route path="/loan-borrow" element={<LoanBorrow/>}/>
        <Route path="/liquidity" element={<Liquidity/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/collect-reward" element={<CollectRewards/>}/>
     
        
      </Route>

        <Route path="*" element={<NotFoundPage/>}/>

      </Routes>
     

    </BrowserRouter>
  
  
    
    

  )
}

export default App
