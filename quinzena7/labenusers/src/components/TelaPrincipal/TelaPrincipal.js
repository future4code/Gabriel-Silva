import React from "react";
import {
  Body,
  LateralDireita,
  LateralEsquerda,
  FotoUsuario,
  Titulo,
  Divinputs,
  Input,
  Button,
} from "./StyledTelaPrincipal";
import TelaUsuarios from "../TelaUsuario/TelaUsuarios";

export default class TelaPrincipal extends React.Component {
  state = {
    novaTela: false,

    nome: "",
    email: "",
  };

  TrocarPagina = () => {
    this.setState({ novaTela: true });
  };

  inputNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  novoUsuario = () => {

  };

  render() {
    if (this.state.novaTela) return <TelaUsuarios usuario={{nome: this.state.nome, email:this.state.email}}/>;

    return (
      <Body>
        <LateralDireita />
        <LateralEsquerda>
          <Titulo> LabenUsers</Titulo>

          <FotoUsuario />

          <Divinputs>
            <Input
              type="text"
              placeholder="Nome"
              required
              onChange={this.inputNome}
              value={this.state.nome}
            ></Input>

            <Input
              onChange={this.inputEmail}
              value={this.state.email}
              type="email"
              placeholder="Email"
              require
            ></Input>

            <Button onClick={this.novoUsuario}>Enviar</Button>
          </Divinputs>

          {/* Ir para a tela de usuários cadastrados */}
          <Button onClick={this.TrocarPagina}>Lista de usuários</Button>
        </LateralEsquerda>
      </Body>
    );
  }
}
