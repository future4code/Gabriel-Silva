import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*{
    font-family: sans-serif;
}
`
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyled/>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );