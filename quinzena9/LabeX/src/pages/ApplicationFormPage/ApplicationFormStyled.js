import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 85vh;
  width: 100%;

`;

export const VoltarParaViagens = styled.button`
height: 5vh;
    width: 100%;
    background-color: #e54b4b;

    transition: background-color 0.2s;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;

    :hover {
      background-color: #e03a3a;
    }
`

export const CardInscricao = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  height: 98%;
  width: 30%;
  min-width: 400px;
  background-color: #2c3338;
  border-radius: 3px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.8);

  h1 {
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(130, 87, 229);

    span {
      color: #26a65b;
    }
  }
`;

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 60vh;
  width: 100%;

  select {
    height: 8%;
    width: 90%;
    border-radius: 5px;
    border: none;
    background-color: #3b4148;
    transition: background-color 0.3s;
    color: #eee;
  }
  input {
    height: 6vh;
    width: 90%;
    border-radius: 5px;
    border: none;
    background-color: #3b4148;
    transition: background-color 0.3s;
    color: #eee;

    :hover {
      background-color: #434a52;
    }
  }

  button {
    height: 5vh;
    width: 90%;
    background-color: #26a65b;

    transition: background-color 0.2s;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    font-size: 1rem;

    :hover {
      background-color: #26885b;
    }
  }
`;
