import axios from "axios";
import { React, useEffect, useState } from "react";
import Header from "../../components/Header";
import {MdDehaze} from 'react-icons/md'
import { Container, FotoMatch, NomePerfil, Card, ContainerMatches, ListMatches } from "./StyledMatches";

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
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((err) => {
        alert("Não sei o que houve");
      });
  };

  const listMatches = matches.map((profile) => {
    return (
      <ContainerMatches>
        <FotoMatch src= {profile.photo}/>
        <NomePerfil>{profile.name} </NomePerfil>
      </ContainerMatches>
    );
  });

  return (
    <>
      <Container>
        <Card>
          <Header/>
          <ListMatches>
          {listMatches}
          </ListMatches>
          <button onClick={() => props.mudaPagina()}>
            <MdDehaze />
          </button>
        </Card>
      </Container>
    </>
  );
}
