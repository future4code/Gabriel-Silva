import React from "react";
import Header from "../../components/Header";
import { RiSettings3Line, RiEdit2Line, RiUserAddLine } from "react-icons/ri";
import {
  DivContainer,
  CardInscricao,
  Formulario,
  DivControle,
  CardInscricao2,
  VoltarParaViagens,
} from "./AdminHomeStyled";

import { useHistory } from "react-router-dom";

const AdminHomePage = () => {
  const history = useHistory();
  const goToPage = () => {
    history.push("/LoginPage");
  };

  return (
    <>
      <Header />
      <DivContainer>
        <h1>
          <span>
            <RiSettings3Line />
          </span>
          Painel de controle
        </h1>

        <DivControle>
          <CardInscricao>
            <Formulario>
              <h1>
                <span>
                  <RiEdit2Line />
                </span>
                Nova viagem
              </h1>
              <input type="text" placeholder="Nome da viagem"></input>
              <select>
                <option value="" disabled="" selected="">
                  Escolha um Planeta
                </option>
              </select>
              <input type="date"></input>
              <input type="text" placeholder="Descrição"></input>
              <input type="number" placeholder="Quantidade de dias"></input>
              <button>Cadastrar</button>
            </Formulario>

            <VoltarParaViagens onClick={goToPage}>Logout</VoltarParaViagens>
          </CardInscricao>
          <CardInscricao2>
            <h1>
              <span>
                <RiUserAddLine />
              </span>
              Cadastrados
            </h1>
          </CardInscricao2>
        </DivControle>
      </DivContainer>
    </>
  );
};

export default AdminHomePage;
