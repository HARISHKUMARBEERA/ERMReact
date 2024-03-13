import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
import Calendar from '../../Pages/Calendar'
import Orders from '../../Pages/Orders'
import Products from '../../Pages/Products'

function AppRoutes() {
  return (
  
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Calendar" element={<Calendar/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
      
    </Routes>
    

  )
}

export default AppRoutes