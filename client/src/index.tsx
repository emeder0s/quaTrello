import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Rutas';
import { Header } from './components/layouts/Header';
import "./styles/styles.scss"
import { Registro } from './pages/Registro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <div className='index'>
    <Header />
    <Registro />
    <Rutas />
    </div>
    </>
);
