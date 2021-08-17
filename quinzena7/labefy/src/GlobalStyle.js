import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    bottom: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;  


}

    html{
        height:100vh;
        width: 100vw;
        overflow-x: hidden; 
    }

`;

export default GlobalStyle;
