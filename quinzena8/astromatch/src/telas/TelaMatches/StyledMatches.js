import React from "react";
import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
`;

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e0e0e0;
  height: 70%;
  width: 22%;

  border-radius: 20px;

  padding: 1%;
  box-shadow: 10px 10px 28px #bababa, -10px -10px 28px #ffffff;
`;

export const DivButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 2%;
  height: 10%;
  width: 100%;
  margin-top: 5%;

  button {
    display: flex;
    padding: 2%;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
    border: none;
    font-size: 30px;
    cursor: pointer;


    :nth-child(1) {
      color: #19b5fe;

      :hover {
        color: #22a7f0;
        transition: 0.3s;
        filter: drop-shadow(1px 1px 5px #00ff00);
      }
    }
    :nth-child(2) {
      color: orange;
      :hover {
        color: orangered;
        transition: 0.3s;
        filter: drop-shadow(1px 1px 5px orange);
      }
    }
  }
`;

export const ContainerMatches = styled.div`
  width: 98%;
  height: 10%;
  margin-bottom: 10px;
  padding: 2%;
  display: flex;
  align-items: center;

  img {
      border: 1px solid #d4d4d4;
      width: 10%;
      height: 100%;
    }

  :hover {
    cursor: pointer;
    box-shadow: 10px 10px 28px #bababa, -10px -10px 28px #ffffff;
    border-radius: 20px;

    img {
      border: 1px solid #d4d4d4;
      width: 20%;
      height: 200%;
    }
  }
`;
export const FotoMatch = styled.img`
  width: 30px;
  height: 100%;

  border-radius: 50%;
  margin: 0 3px;
`;
export const NomePerfil = styled.p`
  margin-left: 10px;
`;

export const ListMatches = styled.div`
  height: 80%;
  width: 100%;
  background: #e0e0e0;
  border-radius: 20px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: inset 14px 14px 28px #bababa, inset -14px -14px 28px #ffffff;

  overflow-y: auto;
  overflow-x: hidden;
`;
