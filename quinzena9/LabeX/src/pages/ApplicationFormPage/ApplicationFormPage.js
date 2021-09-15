import React, {useEffect} from "react";
import Header from "../../components/Header";
import { RiProfileLine } from "react-icons/ri";
import {
  DivContainer,
  CardInscricao,
  Formulario,
  VoltarParaViagens,
} from "./ApplicationFormStyled";

import { useHistory } from "react-router-dom";

const ApplicationFormPage = () => {
  const history = useHistory();
  const goToPage = () => {
    history.push("/ListTripsPage");
  };


  useEffect(()=> {
    document.title = "Formulário de inscrição" 
}, [])




  return (
    <>
      <Header />
      <DivContainer>
        <CardInscricao>
          <h1>
            <span>
              <RiProfileLine />
            </span>
            Fomulário de inscrição
          </h1>
          <Formulario>
            <select>
              <option value="">Para onde vou?</option>
            </select>
            <input type="text" placeholder="Nome"></input>
            <input type="number" placeholder="Idade"></input>
            <input type="text" placeholder="Porque o desejo da viagem?"></input>
            <input type="text" placeholder="Profissão"></input>
            <select>
              <option value="">País de origem</option>
            </select>
            <button>Enviar</button>
          </Formulario>
          <VoltarParaViagens onClick={goToPage}>Voltar para listas de viagens</VoltarParaViagens>
        </CardInscricao>
      </DivContainer>
    </>
  );
};

export default ApplicationFormPage;
