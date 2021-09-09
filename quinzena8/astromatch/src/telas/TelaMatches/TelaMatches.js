import axios from "axios";
import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import { MdDehaze, MdHistory } from "react-icons/md";
import {
  Container,
  FotoMatch,
  NomePerfil,
  Card,
  ContainerMatches,
  ListMatches,
  DivButtons,
} from "./StyledMatches";



export default function TelaMatches(props) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    pegaMatches();
  }, []);

  const pegaMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel/matches"
      )
      .then((recebe) => {
        setMatches(recebe.data.matches);
      })
      .catch(() => {
        alert("Não sei o que houve");
      });
  };

  const apagaHistorico = () => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja apagar todo o histórico de curtidas e matches ?"
    );
    if (confirmacao) {
      setMatches([]);
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

  const listMatches = matches.map((profile) => {
    return (
      <ContainerMatches>
        <FotoMatch src={profile.photo} />
        <NomePerfil>{profile.name} </NomePerfil>
      </ContainerMatches>
    );
  });

  return (
    <>
      <Container>
        <Card>
          <Header />
          <ListMatches>{listMatches}</ListMatches>
          <DivButtons>
            <button onClick={apagaHistorico}>
              <MdHistory />
            </button>
            <button onClick={() => props.mudaPagina()}>
              <MdDehaze />
            </button>
          </DivButtons>
        </Card>
      </Container>
    </>
  );
}
