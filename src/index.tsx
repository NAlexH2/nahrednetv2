import React from 'react';
import ReactDOM from 'react-dom/client';
import Nahrednet from "./Nahrednet";
import "./styles/index";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nahrednet />
  </React.StrictMode>
);

