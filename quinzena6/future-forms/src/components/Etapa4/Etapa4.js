import React from "react";
import styled from "styled-components";

const Secao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: lightgreen;
  box-shadow: 1px 2px 20px rgb(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-top: 50px;

  width: 50vw;
  height: 80vh;

  h1 {
    margin: 20px 0;
  }
`;

/*=================== Lógica =======================*/

class Etapa3 extends React.Component {
  render() {
    const opcoes = [
      "Selecione...",
      "Ensino Médio Incompleto",
      "Ensino Médio Completo",
      "Ensino Superior Incompleto",
      "Ensino Superior Completo",
    ];

    return (
      <>
        <Secao>
          <h1>Cabô!</h1>
        </Secao>
      </>
    );
  }
}

export default Etapa3;
