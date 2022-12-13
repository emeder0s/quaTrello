import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Error } from '../pages/Error'
import { Perfil } from '../pages/Perfil'
import { Tableros } from '../pages/Tableros'

export const routes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/tableros" element={<Tableros />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="*" element={<Error />} />
            </Routes></div>
    )
}
