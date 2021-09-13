import styled from "styled-components";
import Header from "../components/Header";
import { RiErrorWarningLine } from "react-icons/ri";
const ContainerError = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80vh;

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: #8257e5;
    text-shadow: 0 -2px 10px rgba(0,0,0,.90);

    span {
      color: #26a65b;
    }
  }
`;

const Error = () => {
  return (
    <>
      <Header />
      <ContainerError>
        <h1>
          PÁGINA NÃO ENCONTRADA
          <span>
            <RiErrorWarningLine size="100"/>

          </span>
        </h1>
      </ContainerError>
    </>
  );
};

export default Error;
