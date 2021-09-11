import React from "react";
import styled from "styled-components";
import {IoRocketOutline} from "react-icons/io5"

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background-color: rgb(0, 0, 0, 0.1);
  height: 10vh;

  padding: 0 3%;

  h1 {
    color: #9466ff;
    span{
    color: #26a65b;

    }
  }
`;

const BotaoLogIn = styled.h3`
  position: relative;
  color: #9466ff;
  font-size: 1.2rem;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    background-color: #26a65b;
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transition: all 0.2s ease-in-out 0s;
            transition: all 0.2s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  @media (max-width: 300px) {
    margin: 2rem 2rem 0 0;
  }
`;




const CliqueLogin = () =>{
  alert("Clicou no login")
}

const Header = (props) => {
  return (
    <>
      <Headers>
        <h1>Labe<span>X</span><IoRocketOutline/></h1>

        <BotaoLogIn onClick={CliqueLogin}>Login</BotaoLogIn>
      </Headers>
    </>
  );
};

export default Header;
