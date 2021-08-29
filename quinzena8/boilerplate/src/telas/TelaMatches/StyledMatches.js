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




  button{
    border:none;
    background-color: transparent ;
    margin-top: 5% ;
    cursor:pointer;
    height: 10px;
    align-self: center;
    width: 20px;
    font-size:1.5rem;
  }
`;

export const ContainerMatches = styled.div`
  width: 98%;
  height: 10%;
  margin-bottom: 10px;
  padding: 2%;
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
    box-shadow: 10px 10px 28px #bababa, -10px -10px 28px #ffffff;
    border-radius: 20px;

    img {
      border: 1px solid #d4d4d4;
      width: 25%;
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
