import styled from "styled-components";

export const DivContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Secaousuarios = styled.section`
  width: 80%;
  height: 80%;
  background-color: thistle;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  padding: 2%;
  border-radius: 10px;
`;

export const Usuario = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: aliceblue;
  width: 60%;

  button{
    border:none;
    padding: 4px;
    background-color: blueviolet;
    height: 20px;
    width: 20px;
  }
`

export const Button = styled.button`
  margin-top: 5%;
  width: 20%;
  height: 10%;
  border-radius: 8px;
  background-color: yellowgreen;
  border: none;

  :hover {
    background-color: orangered;
    cursor: pointer;
  }
`;