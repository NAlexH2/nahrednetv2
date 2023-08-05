import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NahRedNet from './websrc/body';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NahRedNet />
  </React.StrictMode>
);