import React from "react";
import styled from "styled-components";
import axios from "axios";
import { axiosConfig, baseUrl } from "../constants/constants";

import { MdClear, MdCheck, MdQueueMusic } from "react-icons/md";
import PaginaAplicacao from "../page/PaginaAplicacao/PaginaAplicacao";
import Error from "../components/Error";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 1px 0 1px 0;

  input {
    height: 20vh;
    width: 80%;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #222122;
    font-size: 100px;
    color: #fff;
    outline: 0;

    ::placeholder {
      font-size: 48px;
    }
  }
`;

const DivBotoes = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #a4a4a4;

  :hover:nth-child(1) {
    color: #1e824c;
  }
  :hover:nth-child(2) {
    color: #ec644b;
  }
`;

export default class CriarPlayList extends React.Component {
  state = {
    inputPlayList: "",
    telaAplicacao: false,
  };

  changeInputPlayList = (event) => {
    this.setState({ inputPlayList: event.target.value });
  };

  novaPlayList = () => {
    this.setState({inputPlayList: ""});
    alert("Playlist criada com sucesso!")
    const body = {
      name: this.state.inputPlayList,
    };
    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return <Error />;
      });
  };

  TrocarPagina = () => {
    this.setState({ telaAplicacao: true });
  };

  render() {
    if (this.state.telaAplicacao) return <PaginaAplicacao />;

    return (
      <>
        <Container>
          <MdQueueMusic size={200}></MdQueueMusic>
          <input
            placeholder="Nome da Playlist..."
            type="text"
            value={this.state.inputPlayList}
            onChange={this.changeInputPlayList}
          ></input>
        </Container>
        <DivBotoes>
          <Button onClick={this.novaPlayList}>
            <MdCheck size={25} />
          </Button>
          <Button onClick={this.props.EscondeComponente}>
            <MdClear size={25} />
          </Button>
        </DivBotoes>
      </>
    );
  }
}
