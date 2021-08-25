import React from "react";
import Post from "./components/Post/Post";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  gap:15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {

  return (
    <AppContainer>
      <Post
        nomeUsuario={"Usuário"}
        fotoUsuario={"https://picsum.photos/50/50?random=1"}
        fotoPost={"https://picsum.photos/200/150?random=1"}
      />

      <Post
        nomeUsuario={"Usuário"}
        fotoUsuario={"https://picsum.photos/50/50?random?random=2"}
        fotoPost={"https://picsum.photos/200/150?random?random=2"}
      />

      <Post
        nomeUsuario={"Usuário"}
        fotoUsuario={"https://picsum.photos/50/50?random=3"}
        fotoPost={"https://picsum.photos/200/150?random=3"}
      />
    </AppContainer>
  );
};

export default App;
