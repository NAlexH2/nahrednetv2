import React from 'react';
import ReactDOM from 'react-dom/client';
import Nahrednet from "./Nahrednet";
import "./styles/global.css"
import "./styles/";
import "./fonts/JosefinSans-Italic-VariableFont_wght.ttf";
import "./fonts/JosefinSans-VariableFont_wght.ttf";
import "./fonts/SquarePeg-Reg.ttf";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nahrednet />
  </React.StrictMode>
);

