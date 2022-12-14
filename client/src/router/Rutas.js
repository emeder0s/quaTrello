import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Tableros/Home'
import { Error } from '../pages/Error'
import { Perfil } from '../pages/Perfil'
import { Tableros } from '../pages/Tableros'

export const Rutas = () => {
    return (
        <Routes>
            <Route path="/tableros" element={<Tableros />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Error />} />
        </Routes>

    )
}
