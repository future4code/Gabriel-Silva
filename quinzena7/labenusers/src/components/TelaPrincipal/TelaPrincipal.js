import React from "react";
import {
  Body,
  LateralDireita,
  LateralEsquerda,
  LogoLogin,
  Titulo,
  Divinputs,
  Input,
  Button,
} from "./StyledTelaPrincipal";
import TelaUsuarios from "../TelaUsuario/TelaUsuarios";





export default class TelaPrincipal extends React.Component{
  
  TrocarPagina = () =>{
    return <TelaUsuarios/>
    alert("trocoou")
  }


  render(){
  return (
    <Body>
      <LateralDireita />
        <LateralEsquerda>
        <Titulo> LabenUserss</Titulo>

        <LogoLogin />

        <Divinputs>
          <Input type="text" placeholder="Insira seu nome" required></Input>
          <Input type="email" placeholder="Insira seu nome" required></Input>
          <Button>Enviar</Button>
        </Divinputs>

        {/* Ir para a tela de usuários cadastrados */}
        <Button onClick={this.TrocarPagina}>Lista de usuários</Button>
        
      </LateralEsquerda>
    </Body>
  );
  }
};

