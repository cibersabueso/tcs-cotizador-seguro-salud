import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Styles
import './styles/main.scss';

// Components
import { CotizarSeguro } from "./pages/cotizar-seguro";

ReactDOM.render(
  <React.StrictMode>
    <CotizarSeguro />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
