import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Error } from '../pages/Error'
import { Perfil } from '../components/Perfil/Perfil'
import { Actividad } from '../components/Perfil/Actividad'
import { Tarjetas } from '../components/Perfil/Tarjetas'
import { Configuración } from '../components/Perfil/Configuracion'
import Home from '../components/Home/Home'
import { Boards } from '../components/Home/Boards/Boards'
import { CreateBoard } from '../components/Home/Boards/CreateBoard'
import { Registro } from '../pages/Registro'
import { Login } from '../pages/Login'
import { AcountVeryfy } from '../pages/AcountVeryfy'
import Board from '../components/Board/Board'
import { Pruebinchi } from '../pages/Pruebinchi'

export const Rutas = () => {
    return (
        <div>
            <Routes>
                {/* Inicio y registro */}
                <Route path="*" element={<Error />} />
                <Route path="/home" element={<Home />} />
                <Route path="/registro" element={<Registro />} />

                <Route path="/login" element={<Login />} />
                <Route path="/account-verify/:token" element={<AcountVeryfy />} />

                <Route path="/boards" element={<Boards />} />

                {/* Rutas del perfil del usuario */}
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/perfil/actividad" element={<Actividad />} />
                <Route path="/perfil/tarjetas" element={<Tarjetas />} />
                <Route path="/perfil/configuracion" element={<Configuración />} />

                {/* Board */}
                <Route path="/board/:board" element={<Board />} />
                <Route path="/create-board" element={<CreateBoard />} />

                {/* Otros */}
                <Route path="*" element={<Error />} />
                <Route path="/pruebinchi" element={<Pruebinchi />} />
            </Routes>
        </div>
    )
}
