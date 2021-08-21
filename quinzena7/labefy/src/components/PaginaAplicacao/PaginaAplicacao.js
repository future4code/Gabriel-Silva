import React from "react";
import PaginaApresentacao from "../PaginaApresentacao/PaginaApresentacao";
import {
  Body,
  ConteudoBilioteca,
  NavegacaoLateral,
  BotoesNavegacao,
  BotoesOpcoesNav,
  PlayLists,
  Audio,
  } from "./StyledPaginaAplicacao";
import { MdHome, MdSearch, MdLibraryMusic,MdReportProblem,MdLibraryAdd,MdRssFeed} from "react-icons/md";

export default class PaginaAplicacao extends React.Component {
  state = {
    trocarPagina: false,
  };

  TrocarPagina = () => {
    this.setState({ trocarPagina: true });
  };

  render() {
    if (this.state.trocarPagina) return <PaginaApresentacao />;

    return (
      <div>
        <Body>
          <NavegacaoLateral>
            <span>...</span>
            <BotoesNavegacao>
              <BotoesOpcoesNav onClick={this.TrocarPagina}><MdHome size={18}/><p>Início</p></BotoesOpcoesNav>
              <BotoesOpcoesNav><MdSearch size={18}/><p>Busca</p></BotoesOpcoesNav>
              <BotoesOpcoesNav><MdLibraryMusic size={18}/><p>Sua Biblioteca</p></BotoesOpcoesNav>
              <BotoesOpcoesNav><MdLibraryAdd size={18}/><p>Criar PlayList</p></BotoesOpcoesNav>
              <BotoesOpcoesNav><MdRssFeed size={18}/><p>Podcasts</p></BotoesOpcoesNav>
            </BotoesNavegacao>
            <PlayLists>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
              <p>Início</p>
              <p>Busca</p>
              <p>Sua Biblioteca</p>
            </PlayLists>
          </NavegacaoLateral>
          <ConteudoBilioteca>
              <MdReportProblem size={50}/>
              <h1>Não foi possível localizar a página</h1>
              <p>Quer fazer outra busca?</p>

          </ConteudoBilioteca>

          <Audio autoplay="autoplay" controls="controls">
            {" "}
          </Audio>

        </Body>
      </div>
    );
  }
}
