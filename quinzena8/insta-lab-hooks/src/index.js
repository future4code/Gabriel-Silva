import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyled = createGlobalStyle`
*{
    font-family: sans-serif;
}

body{
  height: 100vh;
  background-size: cover;
  background-image: linear-gradient(
-45deg
, #241F37 0%, #3D0C15 100%);
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
