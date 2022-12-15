import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Rutas';
import { Header } from './components/layouts/Header';
import "./styles/styles.scss"
import { Registro } from './pages/Registro';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
  <>
=======
>>>>>>> d899895f1e62f1c0dcc7ada002a2fff67e61ba5e
  <div className='index'>
    <Header />
    <Registro />
    <Rutas />
<<<<<<< HEAD
    </div>
    </>
=======
  </div>
>>>>>>> d899895f1e62f1c0dcc7ada002a2fff67e61ba5e
);
