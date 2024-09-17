import styled from "styled-components";

export const Body = styled.body`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  display: flex;
`;

export const LateralDireita = styled.div`
  background-color: #444;
  width: 70%;
`;
export const LateralEsquerda = styled.div`
  width: 30%;
  background-color: #d4d4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h1`
  margin-top: 20%;
  color: #444;

  span{
    color: grey;
  }
`;

export const FotoUsuario = styled.div`
  background-color: #e5e5e5;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-top: 10%;

  background-image: url("https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png");
  background-size: cover;
`;

export const Divinputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  width: 50%;
  height: 30%;
  display: flex;
  border-bottom: 1px solid #444;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  margin-bottom: 5%;
  padding-left: 5%;
  border: none;
  border-radius: 8px;
  outline: 0;

  :focus {
    background-color: #f4f4f4 transparent;
    border-radius: 8px 8px 0 0;

    border-bottom: 1px solid #444;

  }
`;

export const Button = styled.button`
  margin-top: 5%;
  padding: 4%;
  width: 60%;
  border-radius: 8px;
  background-color: yellowgreen;
  border: none;

  :hover {
    background-color: orangered;
    cursor: pointer;
  }
`;
