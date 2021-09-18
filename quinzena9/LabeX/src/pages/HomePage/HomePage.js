import React, { useEffect, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import Rocket from "../../assets/Rocket.png";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";
import {
  ContainerApresentacao,
  DivApresentacao,
  BotaoIngresso,
  BotaoSaibaMais,
  Imagem,
  ContainerCards,
  Cards,
  DivSolitaria,
} from "./HomePageStyle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const TelaPrincipal = (props) => {
  const history = useHistory();
  const [listTrip, setListTrip] = useState([{}]);

  const PegarViagem = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setListTrip(res.data.trips);
      })
      .catch((err) => {
        alert("Algo deu ruim");
      });
  };
  useEffect(() => {
    document.title = "Home";
    PegarViagem();
  }, []);

  const goToPage = () => {
    history.push("/ListTripsPage");
  };

  const cardsHome = listTrip.map((trips) => {
    return (
      <Cards>
        <p onClick={goToPage}>{trips.name}</p>
      </Cards>
    );
  });

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
            <BotaoIngresso onClick={goToPage}>
              Embarque no foguete!
            </BotaoIngresso>
            <BotaoSaibaMais href="#cards">
              <MdArrowDownward />
              Viagens disponíveis
            </BotaoSaibaMais>
          </div>
        </DivApresentacao>
      </ContainerApresentacao>
      <ContainerCards>
        <DivSolitaria id="cards">
          <h1>Conheça lugares incríveis</h1>
        </DivSolitaria>
        {cardsHome}
        <DivSolitaria id="cards">
          <h3>  E ESPERE PELO INESPE R A D O !</h3>
        </DivSolitaria>
      </ContainerCards>
      <Footer />
    </>
  );
};

export default TelaPrincipal;
