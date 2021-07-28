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

  li {
    margin-top: 20px;
  }

  input {
    margin: 5px 0;
    width: 200px;
    border: none;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 1px 2px 20px rgb(0, 0, 0, 0.2);
    outline: 0;
  }

  select {
    width: 200px;
    border: none;
    padding: 4px;
    border-radius: 5px;
    box-shadow: 1px 2px 20px rgb(0, 0, 0, 0.2);
    outline: 0;
  }

  button {
    margin-top: 10vh;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    box-shadow: 1px 2px 20px rgb(0, 0, 0, 0.2);

    :hover {
      background-color: darkgreen;
      color: white;
    }
  }
`;

const LinhaDivisao = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 2px lightsalmon;
`;

/*=================== Lógica =======================*/

class Etapa2 extends React.Component {
  render() {
    return (
      <>
        <Secao>
          <h1>Etapa 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
          <LinhaDivisao />
          <ol>
            <li>
              Qual seu curso?
              <br />
              <input></input>
            </li>
            <li>
              Qual a Faculdade?
              <br />
              <input></input>
            </li>
          </ol>
          <button>Próxima Página</button>
        </Secao>
      </>
    );
  }
}

export default Etapa2;
