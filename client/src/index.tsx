import React, { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Rutas';
import "./sass/styles.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/layouts/Header'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div className='index'>
          <Header />
          <Rutas />
        </div>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);