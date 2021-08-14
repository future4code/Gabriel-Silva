import React from "react";
import TelaPrincipal from "../TelaPrincipal/TelaPrincipal";
import { DivContainer, Button, Secaousuarios, Usuario } from "./StyledTelausuarios";

export default class TelaUsuarios extends React.Component {
  state = {
    trocarTela: false,
    usuarios: [],
  };

  


  trocarTela = () => {
    this.setState({ trocarTela: true });
  };

  render() {
    if (this.state.trocarTela) return <TelaPrincipal />;
    console.log(this.props)
    return (  
      <>
        <DivContainer>
          <Secaousuarios>
              <h1>Usuários</h1>
            <Usuario>
              <p>{this.props.usuario.nome}</p>
              <p>{this.props.usuario.email}</p>
              <button>X</button>
            </Usuario>
            <Button onClick={this.trocarTela}> Voltar para Home</Button>
          </Secaousuarios>
        </DivContainer>
      </>
    );
  }
}
