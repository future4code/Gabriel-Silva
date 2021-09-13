import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import LogoLabenu from "../assets/logoLabenu_.png";

const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to top, rgba(55, 41, 89, 0.8), transparent);

  height: 50vh;
  padding: 0 3%;

  h1 {
    color: #fff;
  }
`;

const DivFooter = styled.div`
  height: 10vh;
  width: 100%;
  background-color: rgba(55, 41, 89, 0.8);

  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #060607;
  font-size: 2rem;

  p {
    font-size: 0.8rem;
    color: #c1c1c1;
    text-decoration: none;
  }

  img {
    width: 10vw;
  }

  div {
    display: flex;
    flex-direction: row;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      color: rgba(98, 91, 90);
      margin: 0 20px;

      padding: 5px;
      background-color: #35265b;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;

      :hover {
        background-color: rgba(98, 91, 90);
        color: #35265b;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

const Footer = (props) => {
  return (
    <>
      <Footers>
        <h1>Footer</h1>
      </Footers>
      <DivFooter>
        <div>
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook></FaFacebook>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/gabazevdo" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/gabazevdo" target="_blank">
            <FaGithub />
          </a>
        </div>
        <a href="https://www.labenu.com.br" target="_blank">
          <img src={LogoLabenu}></img>
        </a>
      </DivFooter>
    </>
  );
};

export default Footer;
