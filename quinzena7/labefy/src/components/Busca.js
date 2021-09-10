import React from "react";
import styled from "styled-components";
import axios from "axios";
import { MdClear, MdCheck } from "react-icons/md";
import PaginaAplicacao from "../page/PaginaAplicacao/PaginaAplicacao";

const DivBotoes = styled.div`
  display: flex;
  width: 40%;
  padding: 1px 0 1px 0;

  input {
    width: 100%;
    border-radius: 10px;
    outline:0;
    padding-left: 2%;
    background-color: transparent;
    color:#fff;

  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color:#a4a4a4;

    :hover:nth-child(2) {
    color: #1e824c;
  }
  :hover:nth-child(3) {
    color: #ec644b;
    }
  }
`;





export default class Busca extends React.Component {
  state={
    telaAplicacao: false,
  }


  TrocarPagina = () => {
    this.setState({telaAplicacao: true});
  };
  

  render() {
    if (this.state.telaAplicacao) return <PaginaAplicacao />;

    return (
      <>
        <DivBotoes>
          <input placeholder="Pesquise a música"></input>
          <button >
            <MdCheck size={25}/>
          </button>
          <button onClick={this.props.EscondeComponente}>
            <MdClear size={25}/>
          </button>
        </DivBotoes>
      </>
    );
  }
}
