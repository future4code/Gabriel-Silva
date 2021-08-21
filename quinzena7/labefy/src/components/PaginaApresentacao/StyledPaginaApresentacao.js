import styled from "styled-components";

export const Body = styled.body`
  background-color: #28282b;
  height: 100vh;
  width: 100vw;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%;
  height: 10%;
  width: 100%;
  background-color: #000;

  h2{
    color: #1e824c;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: transparent;
  color: #1e824c;
  font-weight: 700;
  border: 1px solid #1e824c;
  cursor: pointer;
`;


export const Footer = styled.footer`
  height: 40vh;
  width: 100%;
  background-color: #000;
  color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogoFooter = styled.img`
  height: 50%;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;