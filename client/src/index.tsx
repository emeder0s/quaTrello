import React from 'react'
import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Rutas';
import { Header } from './components/layouts/Header';
import "./sass/styles.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className='index'>
    <Header />
    <Rutas />
    </div>

);