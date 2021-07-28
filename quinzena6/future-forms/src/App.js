import React from "react";
import GlobalStyle from "../src/GlobalStyledComponents";
import Etapa1 from "./components/Etapa1/Etapa1";
import Etapa2 from "./components/Etapa2/Etapa2";
import Etapa3 from "./components/Etapa3/Etapa3";
import Etapa4 from "./components/Etapa4/Etapa4";

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />


        <Etapa1 />
        <Etapa2/>
        <Etapa3/>
        <Etapa4/>
      </>
    );
  }
}

export default App;
