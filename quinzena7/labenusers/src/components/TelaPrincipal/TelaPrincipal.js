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
import axios from "axios";
import { ThemeProvider } from "styled-components";

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
      const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
        name: this.state.nome,
        email:this.state.email,
      }
      axios.post(url, body,{
        headers: {
          Authorization:"gabriel-azevedo-johnson"
        }
      })
      .then(() =>{ 
        this.setState({nome:"", email:""})
        alert("Usuário cadastrado com sucesso!")
      })
      .catch(() =>{ 
        alert("Não foi possível cadastrar usuário")

      })
  };

  render() {
    if (this.state.novaTela) return <TelaUsuarios usuario={{nome: this.state.nome, email:this.state.email}}/>;

    return (
      <Body>
        <LateralDireita />
        <LateralEsquerda>
          <Titulo> Laben<span>Users</span></Titulo>

          <FotoUsuario />

          <Divinputs>
            <Input
              type="text"
              placeholder="Nome"
              value={this.state.nome}
              onChange={this.inputNome}

              required
            ></Input>

            <Input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.inputEmail}
              
              required
            ></Input>

            <Button onClick={this.novoUsuario}>Cadastrar</Button>
          </Divinputs>

          {/* Ir para a tela de usuários cadastrados */}
          <Button onClick={this.TrocarPagina}>Lista de usuários</Button>
        </LateralEsquerda>
      </Body>
    );
  }
}
