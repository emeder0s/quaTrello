import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes } from 'react-router-dom'
import { Rutas } from './router/Rutas';
import "./styles/styles.scss"



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

 <Rutas></Rutas>

);

