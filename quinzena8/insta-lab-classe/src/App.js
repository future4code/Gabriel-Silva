import React from "react";
import Post from "./components/Post/Post";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <Post
        nomeUsuario={"Gabriel Azevedo"}
        fotoUsuario={"https://avatars.githubusercontent.com/u/16105546?v=4"}
        fotoPost={
          "http://www.nerdsite.com.br/wp-content/uploads/2021/07/ordem-completa-dos-filmes-do-homem-aranha_f.jpg"
        }
      />
    </AppContainer>
  );
}

export default App;
