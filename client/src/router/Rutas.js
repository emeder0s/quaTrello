import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Error } from '../pages/Error'
import { Tableros } from '../pages/Tableros'
import { Perfil } from '../components/Perfil/Perfil'
import { Actividad } from '../components/Perfil/Actividad'
import { Tarjetas } from '../components/Perfil/Tarjetas'
import { Configuración } from '../components/Perfil/Configuracion'
import { NavPerfil } from '../components/Perfil/NavPerfil'


export const Rutas = () => {
    return (
        <BrowserRouter>

            <NavPerfil />
            <div>
                <Routes>

                    <Route path="/tableros" element={<Tableros />} />
                    <Route path="*" element={<Error />} />

                    {/* Rutas del perfil del usuario */}
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/perfil/actividad" element={<Actividad />} />
                    <Route path="/perfil/tarjetas" element={<Tarjetas />} />
                    <Route path="/perfil/configuracion" element={<Configuración />} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}
