import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100%;
  padding: 0 8%;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(130, 87, 229);

    span {
      color: #26a65b;
    }
  }
`;

export const DivControle = styled.body`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
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
`;

export const CardInscricao = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  height: 90%;
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

export const CardInscricao2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  overflow-x: hidden;
  overflow-y: hidden;
  height: 90%;
  width: 60%;
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

export const ContainerTrips = styled.div`
  width: 90%;
  height: 80%;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #2c3338;
    border: 1px solid #060607;
    border-radius: 50px;
  }

  margin: 2% 0;
  padding: 2% 0;
  border-radius: 5px;
  background-color: #434a52;
`;

export const Optiontrip = styled.div`
  height: 40px;
  width: 96%;
  border-radius: 5px;
  margin: 2%;
  padding: 2%;
  background-color: #3b4148;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    width: 10%;
    justify-content: space-between;

    button {
      display: flex;
      background-color: transparent;
      font-size: 1.2rem;
      transition: all ease-in-out 0.2s;

      :nth-child(1) {
        justify-self: center;
        color: #1771e6;
        :hover {
          color: #0a66c2;
        }
      }
      :nth-child(2) {
        justify-self: center;
        color: #e54b4b;
        :hover {
          color: #e03a3a;
        }
      }
    }
  }

  p {
    color: #fff;
  }
`;
