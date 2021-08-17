import styled from "styled-components";
import Headphone from "../../images/Headphone.png";

export const Body = styled.body`
  background-color: #2546b1;
  height: 100vh;
  width: 100vw;

  background-image: url(${Headphone});
  background-repeat: no-repeat;
  background-position: right;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;

  height: 16vh;
  width: 100%;
  color: yellow;
  background-color: #0f1c44;
  

  border-bottom: 1.6px solid #001c44;
`;

export const Logo = styled.p`
  color: #fff;
  font-weight: 900;
  font-size: 48px;

  span {
    color: greenyellow;
    font-weight: 900;
    font-size: 50px;

}
:hover{
  border-bottom: 1px solid greenyellow;
}

`;
export const TextoCentral = styled.h1`
  color: #fff;
  display: flex;
  font-size: 48px;
  font-weight: 900;
  padding: 20% 0 0 5%;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: greenyellow;
  color: #000;
  font-weight: 700;


  :hover {
    background-color: #0f1c44;
    border: 1px solid greenyellow;
    color: #fff;
    cursor: pointer;
  }
`;

export const Button2 = styled.button`
  height: 10vh;
  width: 20vw;
  border: none;
  border-radius: 40px;
  align-self: center;
  margin-top: 16vh;
  font-size: 20px;
  font-weight: 900;
  margin-right: 60px;

  :hover {
    background-color: #F0BB23;
    color: #0f1c44;
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  height: 40vh;
  width: 100%;
  background-color: yellowgreen;
  border-top: 1.6px solid pink;

  display: flex;
  justify-content: center;
  align-items: center;
`;
