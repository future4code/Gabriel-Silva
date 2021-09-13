import React from "react";
import Header from "../../components/Header";
import { RiProfileLine } from "react-icons/ri";
import {
  DivContainer,
  CardInscricao,
  Formulario,
} from "./ApplicationFormStyled";

const ApplicationFormPage = () => {
  return (
    <>
      <Header />
      <DivContainer>
        <CardInscricao>
          <h1>
            {" "}
            <span>
              <RiProfileLine />
            </span>{" "}
            Fomulário de inscrição
          </h1>
          <Formulario>
            <select>
              <option value="">Para onde vou?</option>
            </select>
            <input type="text" placeholder="Nome"></input>
            <input type="number" placeholder="Idade"></input>
            <input type="text" placeholder="Descrição"></input>
            <input type="text" placeholder="Profissão"></input>
            <select>
              <option value="">País de origem</option>
            </select>
            <button>Enviar</button>
          </Formulario>
        </CardInscricao>
      </DivContainer>
    </>
  );
};

export default ApplicationFormPage;
