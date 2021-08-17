import React from "react";
import PaginaAplicacao from "../PaginaAplicacao/PaginaAplicacao";

import {
  Header,
  Logo,
  Button,
  Body,
  TextoCentral,
  Container,
  Button2,
  Footer
} from "../PaginaApresentacao/StyledPaginaApresentacao";

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
      <div>
        <Body>
          <Header>
            <Logo>Labef<span>y</span></Logo>
            <Button onClick={this.TrocarPagina}>ENTRAR</Button>
          </Header>
          <Container>
            <TextoCentral>Ouvir música, muda tudo!
            </TextoCentral>
            <Button2 onClick={this.TrocarPagina}>É free!</Button2>
          </Container>
        </Body>
        <Footer>Aqui é o Footer</Footer>
      </div>
    );
  }
}
