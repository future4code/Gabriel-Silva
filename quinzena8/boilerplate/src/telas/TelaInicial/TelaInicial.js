import { React, useState, useEffect } from "react";
import {
  Container,
  Card,
  Photo,
  InfoUser,
  ContainerBottom,
} from "./StyledInicial";
import Header from "../../components/Header";
import { MdFavorite, MdHighlightOff, MdDehaze, MdHistory } from "react-icons/md";
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
      .then((response) => {
        pegaPerfil();
      })
      .catch((err) => {
        alert("Erro ao curtir o perfil");
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
      .then((response) => {
        pegaPerfil();
      })
      .catch((err) => {
        alert("Erro ao dispensar o perfil");
      });
  };

  const apagaHistorico = () => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja apagar todo o histórico de curtidas e matches ?"
    );
    if (confirmacao) {
      axios
        .put(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/clear"
        )
        .then((response) => {
          alert("Histórico apagado!");
        })
        .catch((err) => {
          alert("Ocorreu um erro ao apagar histórico");
        });
    }
  };

  return (
    <>
      <Container>
        <Card>
          <Header />

            <Photo>
              <img src={perfil.photo}></img>

              <InfoUser>
                    <h3>{perfil.name}, {perfil.age}</h3>
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
            <button onClick={apagaHistorico}>
              <MdDehaze />
            </button>
            <button onClick={apagaHistorico}>
              <MdHistory />
            </button>
          </ContainerBottom>
        </Card>
      </Container>
    </>
  );
}

export default TelaInicial;
