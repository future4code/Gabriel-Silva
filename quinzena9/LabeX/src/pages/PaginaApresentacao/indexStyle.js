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
    padding-top: 5%;
    font-size: 1.2rem;
    color: #9466ff;
  }
  h1 {
    padding-top: 5%;
    font-size: 4rem;
  }
  h3 {
    font-size: 1.5rem;
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
  background-color: #372959;

  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
`;

export const BotaoSaibaMais = styled.a`
  text-decoration: none;
  height: 60px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 90px;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  background-color: transparent;
  border: none;
  cursor: pointer;
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
    margin:5% 2%;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    :hover{
        transition: all 0.2s ease-in-out;
        transform: scale(1.09);
        box-shadow: 1px 0 20px #372959;
        background-color: #372959;
        
    }
   

`