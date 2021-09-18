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

export const ContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  flex-wrap: wrap;
  min-height: 20vh;
  width: 90%;
  margin: 1%;

  p {
    font-weight: 800;
    font-size: 1.3rem;
    color: #fff;
  }
`;

export const Cards = styled.div`
  width: 25%;
  height: 6vh;
  border: 1px solid #372959;
  border-radius: 10px;
  color: #fff;
  margin: 2%;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in;
    transform: scale(1.05);
    background-color: #372959;
  }
`;

export const DivSolitaria = styled.div`
  width: 90%;
  padding: 2%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
  text-shadow: 0 -5px 15px rgba(0, 6, 0, 0.9);
  letter-spacing: 0.2rem;
`;
