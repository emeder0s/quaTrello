import ReactDOM from 'react-dom/client';
import { Rutas } from './router/Rutas';
import { Header } from './components/layouts/Header';
import "./styles/styles.scss"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Header />
    <Rutas />
  </div>
);