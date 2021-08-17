import React from "react";
import PaginaApresentacao from "../PaginaApresentacao/PaginaApresentacao";
import {
  Body,
  Container,
  BuscaMusicas,
  PlayMusica,
  Button,
} from "./StyledPaginaAplicacao";

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

          <Container>
            <BuscaMusicas></BuscaMusicas>
            <PlayMusica></PlayMusica>
          </Container>
        <Button onClick={this.TrocarPagina}> <span>{"<"}</span> VOLTAR </Button>

        </Body>
      </div>
    );
  }
}
