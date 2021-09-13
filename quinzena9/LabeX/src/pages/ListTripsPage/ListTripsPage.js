import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { ContainerViagens, ContainerCards, Cards } from "./ListTripsStyled";

const ListTripsPage = () => {

  const history = useHistory()
  const goToPage = () =>{
    history.push("/ApplicationFormPage")
  }



  return (
    <>
      <Header />
      <ContainerViagens>
        <h1> Viagens disponíveis </h1>
        <ContainerCards>
          <Cards>
            <p>Nome da Trilha</p>
            <p>Planeta</p>
            <p>Descrição</p>
            <p>Duração</p>
            <p>Data</p>
            <button onClick={goToPage}>Inscrição</button>
          </Cards>
        </ContainerCards>
      </ContainerViagens>
      <Footer />
    </>
  );
};

export default ListTripsPage;
