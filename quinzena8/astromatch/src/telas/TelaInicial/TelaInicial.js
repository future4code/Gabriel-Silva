import { React, useState, useEffect } from "react";
import {
  Container,
  Card,
  Photo,
  InfoUser,
  ContainerBottom,
} from "./StyledInicial";
import Header from "../../components/Header";
import {
  MdFavorite,
  MdHighlightOff,
  MdDehaze,
  MdHistory,
} from "react-icons/md";
import axios from "axios";

function TelaInicial(props) {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    pegaPerfil();
  }, []);

  const pegaPerfil = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/person"
      )
      .then((response) => {
        if (response.data.profile === null) {
          alert(
            "Parace que já viu todos os perfis disponíveis, clique para limpar"
          );
        } else {
          setPerfil(response.data.profile);
        }
      })
      .catch((err) => {
        console.log("Erro");
      });
  };

  const darMatch = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/choose-person",
        {
          id: perfil.id,
          choice: true,
        }
      )
      .then(() => {
        pegaPerfil();
      })
      .catch((err) => {
        alert("Erro ao curtir o perfil", err);
      });
  };

  const dispensar = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/choose-person",
        {
          id: perfil.id,
          choice: false,
        }
      )
      .then(() => {
        pegaPerfil();
      })
      .catch((err) => {
        alert("Erro ao dispensar o perfil", err);
      });
  };

  return (
    <>
      <Container>
        <Card>
          <Header />

          <Photo>
            <img src={perfil.photo}></img>

            <InfoUser>
              <h3>
                {perfil.name}, {perfil.age}
              </h3>
              <p>{perfil.bio}</p>
            </InfoUser>
          </Photo>

          <ContainerBottom>
            <button onClick={dispensar}>
              <MdHighlightOff />
            </button>
            <button onClick={darMatch}>
              <MdFavorite />
            </button>
            <button onClick={() => props.mudaPagina()}>
              <MdDehaze />
            </button>
          </ContainerBottom>
        </Card>
      </Container>
    </>
  );
}

export default TelaInicial;
