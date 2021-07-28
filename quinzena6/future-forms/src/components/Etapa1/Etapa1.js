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

  p {
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
    margin-top:10px;
    width: 200px;
    border: none;
    padding: 4px;
    border-radius: 5px;
    box-shadow: 1px 2px 20px rgb(0, 0, 0, 0.2);
    outline: 0;
  }


`;

const LinhaDivisao = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
  box-shadow: 0px 1px 2px lightsalmon;
`;


const Button = styled.button`
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
`;


/*=================== Lógica =======================*/

class Etapa1 extends React.Component {
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
          <h1>Etapa 1 - Dados Gerais</h1>
          <LinhaDivisao />
          <p>1. Nome</p>
          <input></input>
          <p>2. Idade</p>
          <input></input>
          <p>3. E-mail</p>
          <input></input>
          <p>4. Escolaridade</p>
          <select>
            {opcoes.map((opcoes) => (
              <option value={opcoes}>{opcoes}</option>
            ))}
          </select>
          <Button>Próxima Página</Button>
        </Secao>
      </>
    );
  }
}

export default Etapa1;
