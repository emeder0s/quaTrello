import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './router/Router'
import "./styles/styles.scss" 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router />
);

