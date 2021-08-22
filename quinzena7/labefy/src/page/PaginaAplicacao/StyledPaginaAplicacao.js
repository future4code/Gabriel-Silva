import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  
  width: 100%;
  height: 100vh;
  background: rgb(34, 34, 34);
  background: linear-gradient(
    0deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(69, 69, 69, 1) 100%
  );
`;
export const DivHeader = styled.header`
  padding: .5% 0 0 2% ;
  height: 5%;
  width: 80%;
  background-color: transparent;
  position: absolute;
  top:0;
`
export const ConteudoBilioteca = styled.div`
  width: 80%;
  height: 85%;

  background: rgb(34, 34, 34);
  background: linear-gradient(
    0deg,
    rgba(34, 34, 34, 1) 0%,
    rgba(69, 69, 69, 1) 100%
  );

  margin-bottom: 8%;
  color: #fff;
  font-weight: 600;
  padding: 2%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ::-webkit-scrollbar {
    background: #000;
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #222122;
  }
`;

export const NavegacaoLateral = styled.nav`
  background-color: #000;
  height: 100vh;
  width: 20%;
  color: #fff;

  span {
    margin: 10%;
    font-weight: 900;
    letter-spacing: 3px;
    color: #1e824c;
  }
`;

export const BotoesNavegacao = styled.div`
  height: 40%;
  border-bottom: 1px solid #222222;
  padding: 10% 5% 0 5%;
`;

export const BotoesOpcoesNav = styled.button`
  display: flex;
  font-weight: 600;
  width: 100%;
  color: #fff;
  padding: 4%;
  border: none;
  background-color: #000;
  cursor: pointer;
  border-radius: 10px;
  font-size: 1rem;

  p {
    margin-left: 5px;
  }

  :hover {
    background-color: #222222;
    transition-duration: 0.1s;
    color: #1e824c;
    border-right: 15px solid #1e824c;
  }

  :hover:nth-child(5){
    border-right: 15px solid orange;
    transition-duration: 0.1s;
    color: orange;
    
  }
  :active {
    color: orange;
    border-right: 15px solid orange;
  }
`;

export const DivPlayLists = styled.div`
  height: 45%;
  overflow-y: scroll;
  padding: 0 0 0 5%;

  p {
    padding-top: 5%;
  }
`;

export const PlaylistButton = styled.button`
  width: 90%;
  height:10%;
  margin-bottom: 1px;
  background-color: transparent;
  color: #fff;
  border:none;
  display: flex;
  justify-content: flex-start;

  p{
    font-weight: 600;
  }
  :hover {
    background-color: #222222;
    color: #1e824c;
    border-bottom: 1px solid orange;
    cursor: pointer;
  }
`

export const Audio = styled.div`
  height: 15%;
  width: 100%;
  background-color: #222122;
  position: absolute;
  bottom: 0;
`;


