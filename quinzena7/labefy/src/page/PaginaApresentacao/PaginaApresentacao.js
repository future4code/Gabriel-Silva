import React from "react";
import PaginaAplicacao from "../PaginaAplicacao/PaginaAplicacao";
import { Header, Button, Body, Footer } from "./StyledPaginaApresentacao";
import { FaHeadphonesAlt } from "react-icons/fa";

export default class PaginaApresentacao extends React.Component {
  state = {
    trocarPagina: false,
  };

  TrocarPagina = () => {
    this.setState({ trocarPagina: true });
  };

  render() {
    if (this.state.trocarPagina) return <PaginaAplicacao />;

    return (
      <>
        <Body>
          <Header>
            <div>
              <FaHeadphonesAlt size={50} />
            <h2>
              Labefy
            </h2>
            </div>
            <Button onClick={this.TrocarPagina}>ENTRAR</Button>
          </Header>
        </Body>
      </>
    );
  }
}
