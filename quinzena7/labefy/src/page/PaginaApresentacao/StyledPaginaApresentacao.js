import styled from "styled-components";
import wp5122265 from '../../assets/images/wp5122265.webp'

export const Body = styled.body`
  background-color: #0F1112;
  height: 100vh;
  width: 100vw;
  background-image: url(${wp5122265});
  background-size: cover ;
  background-repeat: no-repeat;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 5%;
  height: 10%;
  width: 100%;

  h2{
    color: #2e3131;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: transparent;
  color: #2e3131;
  font-weight: 700;
  border: 1px solid #2e3131;
  cursor: pointer;

  :hover{
    color: #818B93;
    border: 1px solid #818B93;
  }
`;


export const Footer = styled.footer`
  height: 40vh;
  width: 100%;
  background-color: #101010;
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