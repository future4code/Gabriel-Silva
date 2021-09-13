import React from "react";
import { MdArrowDownward } from "react-icons/md";
import Rocket from "../../assets/Rocket.png";
import { useHistory } from "react-router-dom";

import {
  ContainerApresentacao,
  DivApresentacao,
  BotaoIngresso,
  BotaoSaibaMais,
  Imagem,
  ContainerCards,
  Cards,
} from "./HomePageStyle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const TelaPrincipal = (props) => {
  const history = useHistory()

  const goToPage = () =>{
    history.push("/ListTripsPage")
  }

  return (
    <>
      <Header />
      <ContainerApresentacao>
        <DivApresentacao>
          <div>
            <Imagem src={Rocket} />
            <p> Bem vindo(a) ao futuro!</p>
          </div>
          <h1>Sua chance de conhecer um novo ecossistema!</h1>
          <h3>
            Embarque nesse foguete assim como milhares de pesoas já fizeram e
            conheça lugares e criaturas incríveis!
          </h3>
          <div>
            <BotaoIngresso onClick={goToPage}>Embarque no foguete!</BotaoIngresso>
            <BotaoSaibaMais href="#cards">
              <MdArrowDownward />
              Saiba mais
            </BotaoSaibaMais>
          </div>
        </DivApresentacao>
      </ContainerApresentacao>
      <ContainerCards id="cards">
        <Cards />
        <Cards />
        <Cards />
      </ContainerCards>

      <Footer />
    </>
  );
};

export default TelaPrincipal;
