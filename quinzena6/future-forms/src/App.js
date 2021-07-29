import React from "react";

import GlobalStyle from "../src/GlobalStyledComponents";
import styled from "styled-components";

import Etapa1 from "./components/Etapa1/Etapa1";
import Etapa2 from "./components/Etapa2/Etapa2";
import Etapa3 from "./components/Etapa3/Etapa3";
import Etapa4 from "./components/Etapa4/Etapa4";

class App extends React.Component {
    state = {
      etapa: 1,
    };


  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 onClick={this.proximaEtapa} />;
      case 2:
        return <Etapa2 onClick={this.proximaEtapa}/>;
      case 3:
        return <Etapa3 onClick={this.proximaEtapa} />;
      case 4:
        return <Etapa4 />;
      default:
        return <Etapa4 />;
    }
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1});
  };

  render() {
    return (
      <>
        <GlobalStyle />
        {this.renderizaEtapa()}
        
      </>
    );
  }
}

export default App;
