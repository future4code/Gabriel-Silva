import styled from "styled-components";

export const ContainerApresentacao = styled.section`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

export const DivApresentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 47%;
  height: 500px;
  margin: 10% 0 0 3%;
  color: #fff;

  p {
    margin-top: 5%;
    font-size: 1.2rem;
    color: #9466ff;
    font-weight: 600;
  }
  h1 {
    padding-top: 5%;
    font-size: 4rem;
  }
  h3 {
    font-size: 1.5rem;
    padding-top: 4%;
  }

  div {
    padding-top: 3%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Imagem = styled.img`
  transform: rotate(45deg);
`;

export const BotaoIngresso = styled.button`
  height: 60px;
  width: 300px;
  border: none;
  color: #fff;
  border-radius: 10px;
  background-color: #6833e4;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8%;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #734bd1;
    transition: all 0.2s ease-in-out;
  }
`;

export const BotaoSaibaMais = styled.a`
  text-decoration: none;

  display: flex;
  align-items: center;
  padding: 0 90px;
  font-weight: 600;
  font-size: 1rem;
  color: #9466ff;

  cursor: pointer;
  margin-top: 8%;
  transition: all 0.2s ease-in-out;
  transition: 0.2s;

  :hover {
    color: #26a65b;
    transform: translateY(6px);
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  width: 100%;

  p {
    color: #fff;
  }
`;

export const Cards = styled.div`
  width: 20%;
  height: 60vh;
  border: 1px solid #372959;
  border-radius: 15px;
  margin: 5% 2%;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.09);
    box-shadow: 1px 0 20px #372959;
    background-color: #372959;
  }
`;
