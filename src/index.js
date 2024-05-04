import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
html {
  /* background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%) */
  background-color: #3c59ff;
  background: linear-gradient(225deg, #3c59ff 0%, #784BA0 50%, #2B86C5 100%);
}

body{
   background-color: rgb(100,149,237);
   color: black;
   
  
}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

