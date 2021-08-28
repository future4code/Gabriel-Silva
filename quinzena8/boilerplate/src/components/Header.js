import React from "react";
import styled from "styled-components";
import { FaHotjar } from "react-icons/fa";

const TopoHeader = styled.header`
  height: 8%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2%;
`;

const Title = styled.h2`
  font-family: "Kavoon", sans-serif;
  color: #CC1F2D;
  font-size: 1rem;

  display: flex;
  justify-self: center;

  span {
    font-family: "Kavoon", sans-serif;
    color: #FF5233;
  }
`;

const Icon = styled.h3`
 
  animation-name: stretch;
  animation-duration: 1.5s; 
  animation-timing-function: ease-out; 
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes stretch {
  0% {
    color: red;
    
  }
   50% {
    color: orange;
  }
  100% {
    color: darksalmon;
  }
`;

export default function Header(props) {
  return (
    <>
      <TopoHeader>
        <Title>
          Astro<span>match</span>
        </Title>
        <Icon>
          <FaHotjar size={20} />
        </Icon>
      </TopoHeader>
    </>
  );
}
