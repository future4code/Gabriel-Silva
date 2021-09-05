import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  height: 5vh;
  width: 20%;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  bottom: 0;

  button {
    display: flex;
    align-items: center;
    justify-self: center;
    font-size: 35px;

    border: none;
    background-color: transparent;
    cursor: pointer;
    box-shadow: 6px 6px 14px #a8a8a8, -6px -6px 14px #ffffff;
    border-radius: 50px;
    border: none;
    margin-bottom: 5px;
    position: relative;

    a {
      color: grey;
    }

    :hover {
      top: -10px;
    }
  }
`;

export default function RedesSociais(props) {
  return (
    <Container>
      <button>
        <a href="https://www.facebook.com/gabazevdo" target="_blank">
          <FaFacebook />
        </a>
      </button>
      <button>
        <a href="https://www.instagram.com/gabazevdo/" target="_blank">
          <FaInstagram />
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/gabazevdo/" target="_blank">
          <FaLinkedin />
        </a>
      </button>
      <button>
        <a href="https://github.com/gabazevdo" target="_blank">
          <FaGithub />
        </a>
      </button>
    </Container>
  );
}
