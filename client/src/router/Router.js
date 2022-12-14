import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Error } from '../pages/Error'
import {Boards } from '../components/Boards/Boards'

export const Router = () => {
    return (
        <BrowserRouter>
            <section>
                <Routes>
                    <Route path="/boards" element={<Boards />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </section>
        </BrowserRouter>
    ) 
}