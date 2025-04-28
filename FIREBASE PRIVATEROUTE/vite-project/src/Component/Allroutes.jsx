import React from 'react'
import Home from '../PAGES/Home'
import Dashboard from '../PAGES/Dashboard'
import Login from '../PAGES/Login'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default Allroutes;