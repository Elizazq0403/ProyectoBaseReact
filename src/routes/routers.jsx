import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import Error404 from '../components/Error404/Error404'



function Routers() {
  return (
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/servicios" element={<Servicios />} />
    <Route path="/contacto" element={<Contacto />} />
    <Route path="/*" element={<Error404 />} />

    </Routes>
  )
}

export default Routers