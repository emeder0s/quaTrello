import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Tableros/Home';
import { Rutas } from './router/Rutas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Rutas/>
  </BrowserRouter>
);

