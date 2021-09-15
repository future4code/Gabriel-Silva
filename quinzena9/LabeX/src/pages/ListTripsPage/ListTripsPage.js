import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useHistory } from "react-router-dom";
import { ContainerViagens, ContainerCards, Cards } from "./ListTripsStyled";
import { BASE_URL } from "../../constants/Constants";

import {
  IoPlanetOutline,
  IoCalendarOutline,
  IoMapOutline,
  IoNewspaperOutline,
  IoRocketOutline,
} from "react-icons/io5";
import axios from "axios";




const ListTripsPage = () => {
  const history = useHistory();
  const goToPage = () => {
    history.push("/ApplicationFormPage");
  };

  const [listTrip, setListTrip] = useState([{}]);

  const PegarViagem = () => {
    axios
      .get(`${BASE_URL}/trips`)
      .then((res) => {
        setListTrip(res.data.trips);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    PegarViagem();
    document.title = "Viagens disponíveis"
  }, []);

  return (
    <>
      <Header />
      <ContainerViagens>
        <h1>
          Viagens disponíveis <IoRocketOutline />
        </h1>
        <ContainerCards>
          {listTrip.map((trips) => {
            return (
              <Cards>
                <h1>{trips.name}</h1>
                <label>
                  <IoPlanetOutline /> Planeta
                  <p>{trips.planet}</p>
                </label>

                <label>
                  <IoCalendarOutline /> Data programada
                  <p>{trips.date}</p>
                </label>

                <label>
                  <IoMapOutline /> Aventura para{" "}
                  <p>{trips.durationInDays} dias</p>
                </label>

                <label>
                  <IoNewspaperOutline /> Descrição da viagem
                  <p>{trips.description}</p>
                </label>
                <button onClick={goToPage}>Inscrição</button>
              </Cards>
            );
          })}
        </ContainerCards>
      </ContainerViagens>
      <Footer />
    </>
  );
};

export default ListTripsPage;
