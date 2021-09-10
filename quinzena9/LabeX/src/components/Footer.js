import React from "react";
import styled from "styled-components";

const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to top, rgba(55, 41, 89, 0.8), transparent);

  height: 50vh;
  padding: 0 3%;

  bottom: 0;

  h1 {
    color: #fff;
  }
`;



const Footer = (props) => {
  return (
    <>
      <Footers>
        <h1>logo</h1>

      </Footers>
    </>
  );
};

export default Footer;
