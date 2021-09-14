import styled from "styled-components";

export const ContainerViagens = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  color: #fff;
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;


  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
      display: flex;
      flex-direction: column;
    }
`;

export const Cards = styled.div`
  width: 20%;
  min-width: 320px;
  height: 60vh;
  border: 1px solid #372959;
  border-radius: 15px;
  margin: 1%;
  transition: all 0.2s ease-in-out;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 0 20px;
  background-color: rgba(55, 41, 89, 0.89);

  
    h1{
      align-self: center ;
    }
    p{
      font-size: 1.2rem;
    }
  button {
    align-self: center;
    height: 10%;
    width: 90%;
    background-color: rgba(38, 166, 91, 0.5);

    color: #d1d1d1;
    font-weight: 600;
    font-size: 1rem;
    transition: background-color 0.2s;

    :hover {
      background-color: #26885b;
    }
  }

  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.04);
    background-color: #372959;
  }
`;
