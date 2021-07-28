import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      padding:0;
      margin:0;
      box-sizing: border-box;
      font-family: sans-serif;
  }
  body{
    display: flex;
    justify-content: center;
    background-color: lightgrey;
  }
 `;


export default GlobalStyle