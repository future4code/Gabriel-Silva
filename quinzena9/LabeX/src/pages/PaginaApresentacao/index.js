import React from "react";
import { MdArrowDownward } from "react-icons/md";
import Rocket from "../../assets/Rocket.png";
import {
  ContainerApresentacao,
  DivApresentacao,
  BotaoIngresso,
  BotaoSaibaMais,
  Imagem,
  ContainerCards,
  Cards
} from "./indexStyle";

const TelaPrincipal = (props) => {
  return (
    <>
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
            <BotaoIngresso>Embarque no foguete!</BotaoIngresso>
            <BotaoSaibaMais href="#cards">
             
              <MdArrowDownward size="25" />
              Saiba mais
            </BotaoSaibaMais>
          </div>
        </DivApresentacao>
      </ContainerApresentacao>
      <ContainerCards id="cards">
        <Cards/>
        <Cards/>
        <Cards/>
      </ContainerCards>
    </>
  );
};

export default TelaPrincipal;
