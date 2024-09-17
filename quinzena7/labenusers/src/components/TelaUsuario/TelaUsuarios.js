import React from "react";
import axios from "axios";
import TelaPrincipal from "../TelaPrincipal/TelaPrincipal";
import {
  DivContainer,
  Button,
  Secaousuarios,
  Usuario,
  ButtonUser,
} from "./StyledTelausuarios";

export default class TelaUsuarios extends React.Component {
  state = {
    trocarTela: false,
    usuarios: [],
  };

  componentDidMount() {
    this.trazerUsuarios();
  }

  trocarTela = () => {
    this.setState({ trocarTela: true });
  };

  trazerUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
      .get(url, {
        headers: {
          Authorization: "gabriel-azevedo-johnson",
        },
      })
      .then((res) => {
        this.setState({ usuarios: res.data });
      })
      .catch((err) => {
        alert("Ocorreu um erro e não foi possível carregar os usuários.");
      });
  };



  deletarUsuario=(id)=>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
    axios.delete(url, {
      headers: {
        Authorization:"gabriel-azevedo-johnson"
      }
    })
    .then(()=>{
      this.trazerUsuarios()
      window.confirm("Deseja realmente deletar o usuário?")
    })
    .catch(()=>{
      alert("Não foi possível deletar usuário, tente novamente")
    })
  }

  render() {
    if (this.state.trocarTela) return <TelaPrincipal />;
    console.log(this.state)
    const listaUsuarios = this.state.usuarios.map((user) => {
      return(
      <Usuario key={user.id}>
        <p>{user.name}</p>
        <ButtonUser onClick={()=> this.deletarUsuario(user.id)}>x</ButtonUser>
      </Usuario>
      )
    });
    return (
      <>
        <DivContainer>
          <Secaousuarios>
            <h1>Usuários</h1>
              {listaUsuarios}
            <Button onClick={this.trocarTela}> Voltar para Home</Button>
          </Secaousuarios>
        </DivContainer>
      </>
    );
  }
}
