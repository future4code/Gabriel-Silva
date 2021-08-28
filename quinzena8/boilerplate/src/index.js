import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *{
        padding: 0;
        margin:0;
        box-sizing: border-box;

        font-family: sans-serif;
    }
    html{
      height:100vh;
      width: 100vw;
    }
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

