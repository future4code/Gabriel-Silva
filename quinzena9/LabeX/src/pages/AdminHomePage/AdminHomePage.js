import React from "react";
import Header from "../../components/Header";
import {
  RiSettings3Line,
  RiEdit2Line,
  RiUserAddLine,
  RiDeleteBin2Line,
  RiDraftLine,
} from "react-icons/ri";
import { IoPlanetOutline, IoLocationOutline } from "react-icons/io5";
import useForm from "../../Hooks/useForm";
import { BASE_URL } from "../../constants/BASE_URL";
import { useRequestData } from "../../Hooks/useRequestData";

import axios from "axios";
import {
  DivContainer,
  CardInscricao,
  Formulario,
  DivControle,
  CardInscricao2,
  VoltarParaViagens,
  Optiontrip,
  ContainerTrips,
} from "./AdminHomeStyled";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import Swal from "sweetalert2";

const AdminHomePage = () => {
  const tripsData = useRequestData(`${BASE_URL}/trips`, undefined);

  const history = useHistory();
  const goToPage = () => {
    history.push("/LoginPage");
  };

  useEffect(() => {
    document.title = "Painel de Controle";
  }, []);

  const [form, handleForm] = useForm({
    name: "",
    description: "",
    date: "",
    durationInDays: "",
    planet: "Selecione o planeta",
  });

  const logout = () =>{
    localStorage.removeItem('token')
    goToPage()
}


  const createTrip = (body, headers) => {
    axios
      .post(`${BASE_URL}/trips`, body, headers)
      .then(() => {
        Swal.fire({
          background: "",
          title: "Tudo certo!",
          text: "Viagem criada com sucesso",
          icon: "success",
          timer: 5000,
        });
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Eita",
          text: "Algo deu errado... tente novamente.",
          showConfirmButton: true,
          confirmButtonColor: "#D73743",
        });
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
      planet: form.planet,
    };

    const requestHeaders = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    createTrip(body, requestHeaders);
  };

  const deleteTrip = (id) => {
    const requestHeaders = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    Swal.fire({
      title: "Tem certeza?",
      text: "Não será possível reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, apague!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${BASE_URL}/trips/${id}`, requestHeaders)
          .then((res) => {
            Swal.fire("Tudo certo!", "Viagem deletada com sucesso");
            window.location.reload();
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "OOOPS...",
              text: "Algo deu errado... tente novamente mais tarde",
              showConfirmButton: true,
              confirmButtonColor: "#D73743",
            });
            console.log(err)
          });
      }
    });
  };

  const tripList =
    tripsData &&
    tripsData.trips.map((trip) => {
      return (
        <Optiontrip key={trip.id}>
          <p>
            <strong>
              <IoPlanetOutline /> {trip.planet}
            </strong>
          </p>
          <p>
            <strong>
              <IoLocationOutline /> {trip.name}
            </strong>
          </p>
          <div>
            <button title="Ver detalhes">
              <RiDraftLine />
            </button>

            <button title="Excluir" onClick={() => deleteTrip(trip.id)}>
              <RiDeleteBin2Line />
            </button>
          </div>
        </Optiontrip>
      );
    });

  return (
    <>
      <Header />
      <DivContainer>
        <h1>
          <span>
            <RiSettings3Line />
          </span>
          Painel de controle
        </h1>

        <DivControle>
          <CardInscricao>
            <Formulario onSubmit={onSubmitForm}>
              <h1>
                <span>
                  <RiEdit2Line />
                </span>
                Nova viagem
              </h1>
              <input
                type="text"
                placeholder="Nome da viagem"
                required
                pattern="[a-zA-ZsÀ-ú ]{5,}"
                name="name"
                value={form.name}
                onChange={handleForm}
              ></input>

              <input
                type="date"
                required
                name="date"
                value={form.date}
                onChange={handleForm}
                placeholder="Data"
              ></input>

              <input
                type="text"
                placeholder="Descrição"
                required
                pattern="^.{30,}"
                name="description"
                value={form.description}
                onChange={handleForm}
              ></input>
              <input
                type="number"
                placeholder="Quantidade de dias"
                required
                name="durationInDays"
                onChange={handleForm}
              ></input>

              <input
                type="text"
                placeholder="Planeta"
                required
                name="planet"
                onChange={handleForm}
              ></input>
              <button>Cadastrar</button>
            </Formulario>

            <VoltarParaViagens onClick={logout}>Logout</VoltarParaViagens>
          </CardInscricao>

          <CardInscricao2>
            <h1>
              <span> </span> Viagens Cadastradas
            </h1>
            <ContainerTrips>{tripList}</ContainerTrips>
          </CardInscricao2>
        </DivControle>
      </DivContainer>
    </>
  );
};

export default AdminHomePage;
