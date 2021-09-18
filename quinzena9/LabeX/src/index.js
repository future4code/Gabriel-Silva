import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Resetando HTML
import { createGlobalStyle } from "styled-components";
import backgroundGalaxy from "./assets/background-galaxy.jpg";

export const GlobalStyled = createGlobalStyle`
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
  font-family: 'Glory', sans-serif;
}

html{
  width: 100vw;
  height: auto;
  scroll-behavior: smooth;


  input{
    outline: 0;
    padding: 0 8px;
    font-size: 1rem;
  }
        
  select{
    outline: 0;
    padding: 0 8px;
    font-size: 1rem;
  }

  button{
    cursor: pointer;
    border:none;
    border-radius: 5px;
  }
}
  

body{
  background-color: #060607;
  background-image: url(${backgroundGalaxy});
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
      
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background-color: transparent;        
      }

      ::-webkit-scrollbar-thumb {
        background-color: #1C1C1C;    
        border:1px solid #060607 ; 
        border-radius:50px;
      }
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
