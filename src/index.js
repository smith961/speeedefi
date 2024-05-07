import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
* {


 margin: 0;
 padding: 0;


}

body{
  background-color: #132b80;
  background-image: linear-gradient(90deg, #132b80 0%, #9FACE6 100%);


}`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

