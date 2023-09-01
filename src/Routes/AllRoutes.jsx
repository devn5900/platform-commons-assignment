import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Carts from '../components/Cart/Carts'
import ConfirmOrder from '../components/Confirm/ConfirmOrder'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' Component={Home} />
    <Route path='/cart' Component={Carts} />
    <Route path='/confirmorder' Component={ConfirmOrder} />
   </Routes>
  )
}

export default AllRoutes