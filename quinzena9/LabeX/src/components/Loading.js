import React from "react";
import styled from "styled-components";
import Gif from "../assets/LoaderGif.gif";

const Container = styled.div`
  height: 10vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  position: absolute;
`;

const GifLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${Gif});
  background-size: 40%;
  background-repeat: no-repeat;
  width: 10%;
  height:85vh;
`;

export const Loading = () => {
  return (
    <Container>
      <GifLoading />
    </Container>
  );
};
