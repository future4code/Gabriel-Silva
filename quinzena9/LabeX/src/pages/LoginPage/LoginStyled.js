import styled from "styled-components";

export const ContainerLogin = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  width: 25%;
  min-width: 400px;
  background-color: #2c3338;
  border-radius: 3px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.8);
`;

export const DivInputs = styled.div`
  margin-top: 20%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 45vh;
  justify-content: space-around;

  label {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #363b41;

    span {
      margin: 0 3%;
      color: #26a65b;
    }
    
    :nth-child(3) {
      span {
        margin: 0 3%;
        color: #26a65b;
        cursor: pointer;
      }
    }
  }
`;

export const InputEmail = styled.input`
  height: 6vh;
  width: 100%;
  border-radius: 0 5px 5px 0;
  border: none;
  background-color: #3b4148;
  transition: background-color 0.3s;
  color: #eee;

  :hover{
    background-color: #434a52;
  }

`;
export const InputSenha = styled.input`
  height: 6vh;
  width: 100%;
  border-radius: 0 5px 5px 0;
  border: none;
  background-color: #3b4148;
  transition: background-color 0.3s;
  color: #eee;

  :hover {
    background-color: #434a52;
  }
`;

export const BotaoEntrar = styled.button`
  height: 5vh;
  width: 100%;
  background-color: #26a65b;

  transition: background-color 0.2s;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  font-size: 1rem;

  :hover {
    background-color: #26885b;
  }
`;
