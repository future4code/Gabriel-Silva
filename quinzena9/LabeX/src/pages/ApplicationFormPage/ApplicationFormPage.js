import React, { useEffect } from "react";
import Header from "../../components/Header";
import { RiProfileLine } from "react-icons/ri";
import { BASE_URL } from "../../constants/BASE_URL";
import { useRequestData } from "../../Hooks/useRequestData";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import {
  DivContainer,
  CardInscricao,
  Formulario,
  VoltarParaViagens,
} from "./ApplicationFormStyled";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

const ApplicationFormPage = () => {
  const history = useHistory();
  const goToPage = () => {
    history.push("/ListTripsPage");
  };

  useEffect(() => {
    document.title = "Formulário de inscrição";
  }, []);

  const tripsData = useRequestData(`${BASE_URL}/trips`);

  const [form, handleForm] = useForm({
    trip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "Selecione o seu país",
  });

  const applyToTrip = (body, headers) => {
    axios
      .post(`${BASE_URL}/trips/${form.trip}/apply`, body, headers)
      .then((result) => {
        Swal.fire("Feito!", "Inscrição realizada com sucesso!", "success");
        window.location.reload();
      })
      .catch((error) => {
        alert("Erro: " + error + " Algo deu errado! Tente novamente.");
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };

    const requestHeaders = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    applyToTrip(body, requestHeaders);
  };

  const tripSelect =
    tripsData &&
    tripsData.trips.map((trip) => {
      return (
        <option name="trip" value={trip.id}>
          {trip.name}
        </option>
      );
    });

  return (
    <>
      <Header />
      <DivContainer>
        <CardInscricao>
          <h1>
            <span>
              <RiProfileLine />
            </span>
            Fomulário de inscrição
          </h1>
          <Formulario onSubmit={onSubmitForm}>
            <select name="trip" value={form.trip} onChange={handleForm}>
              <option value="Selecione" selected="selected">
                Para onde vou?
              </option>
              {tripSelect}
            </select>

            <input
              required
              pattern="[a-zA-ZsÀ-ú ]{3,}"
              name="name"
              value={form.name}
              onChange={handleForm}
              placeholder="Nome"
              type="text"
            ></input>

            <input
              required
              name="age"
              value={form.age}
              onChange={handleForm}
              placeholder="Idade"
              type="number"
              min="18"
            ></input>

            <input
              required
              pattern="^.{30,}"
              name="applicationText"
              value={form.applicationText}
              onChange={handleForm}
              type="text"
              placeholder="Porque o desejo da viagem?"
            ></input>

            <input
              required
              name="profession"
              value={form.profession}
              onChange={handleForm}
              placeholder="Profissão"
              type="text"
            ></input>
            <input
              required
              name="country"
              onChange={handleForm}
              placeholder="País de origem"
              type="text"
              pattern="^.{5,}"
            ></input>
            <button type="submit">Enviar</button>
          </Formulario>
          <VoltarParaViagens onClick={goToPage}>
            Voltar para listas de viagens
          </VoltarParaViagens>
        </CardInscricao>
      </DivContainer>
    </>
  );
};

export default ApplicationFormPage;
