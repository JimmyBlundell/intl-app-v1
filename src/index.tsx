import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from "react-intl"
import Spanish from "./i18n/es-MX.json";
import English from "./i18n/en-US.json";

const local = navigator.language;

let lang;
if (local === "en-US") {
    lang = English;
} else {
    lang = Spanish;
}

ReactDOM.render(
  <IntlProvider locale={"es-MX"} messages={Spanish}>
    <App date={Date.now()} />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
