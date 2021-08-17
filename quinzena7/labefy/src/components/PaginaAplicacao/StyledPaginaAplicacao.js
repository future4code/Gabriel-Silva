import styled from "styled-components";

export const Body = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

 
  background: linear-gradient(
    to right,
    #1488CC,
    #2B32B2
  );
`;

export const Container = styled.section`
  display: flex;
  
  width: 90%;
  height: 80%;
  border-radius: 10px;
  padding:30px;

    background:rgba(255,255,255,.1);
    backdrop-filter: blur(100px);
    box-shadow: 1px 1px 100px rgba(000,000,000,.3);
`;


export const BuscaMusicas = styled.div`
    height:100%;
    width: 30%;
    background-color: red;
`

export const PlayMusica = styled.div`
    height: 100%;
    width: 70%;
    background-color: yellow;

`

export const Button = styled.button`
    border:none;
    margin: 25px 5vw 0 0 ;
    background-color: transparent;
    align-self: flex-end;
    color: #aaa;

    :hover{
        cursor: pointer;
        span{
            color: yellow;
        }
    }
    

`