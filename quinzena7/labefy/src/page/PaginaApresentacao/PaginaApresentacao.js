import React from "react";
import PaginaAplicacao from "../PaginaAplicacao/PaginaAplicacao";
import {
  Header,
  Button,
  Body,
  Footer,
} from "./StyledPaginaApresentacao";
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
            <h2>
              <FaHeadphonesAlt size={50} color={"#2e3131"} />
              labefy
            </h2>
            <Button onClick={this.TrocarPagina}>ENTRAR</Button>
          </Header>
         </Body>
        <Footer>
          <FaHeadphonesAlt size={100} color={"#1e824c"} />
        </Footer>
      </>
    );
  }
}
