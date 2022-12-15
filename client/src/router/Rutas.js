import React from 'react'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Error } from '../pages/Error'
import { Perfil } from '../components/Perfil/Perfil'
import { Actividad } from '../components/Perfil/Actividad'
import { Tarjetas } from '../components/Perfil/Tarjetas'
import { Configuración } from '../components/Perfil/Configuracion'
import Home from '../components/Tableros/Home'
import { Boards } from '../components/Boards/Boards'
import { Registro } from '../pages/Registro'

export const Rutas = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="*" element={<Error />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/registro" element={<Registro />} />

                    {/* Rutas del perfil del usuario */}
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/perfil/actividad" element={<Actividad />} />
                    <Route path="/perfil/tarjetas" element={<Tarjetas />} />
                    <Route path="/perfil/configuracion" element={<Configuración />} />

                    <Route path="/boards" element={<Boards />} />
                    <Route path="*" element={<Error />} />

                </Routes>
            </div>
        </BrowserRouter>

    )
}
