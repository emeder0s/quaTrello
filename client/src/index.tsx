import React from 'react'
import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Rutas';
import "./sass/styles.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <div className='index'>
    <Rutas />
    </div>
);
