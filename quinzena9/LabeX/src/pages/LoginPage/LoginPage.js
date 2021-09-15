import React, { useEffect } from "react";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";
import useForm from "../../Hooks/useForm";
import {
  ContainerLogin,
  FormContainer,
  DivInputs,
  InputEmail,
  InputSenha,
  BotaoEntrar,
} from "./LoginStyled";
import { RiAdminLine, RiEmotionHappyLine, RiLock2Line } from "react-icons/ri";

const LoginPage = () => {
  const history = useHistory();

  const goToPage = () => {
    history.push("/AdminHomePage");
  };

  useEffect(() => {
    document.title = "Login Adm";
  }, []);

  const [form, handleForm] = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        goToPage();
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("E-mail ou senha inválidos!");
      });
  };

  return (
    <>
      <Header />
      <ContainerLogin>
        <FormContainer onSubmit={onSubmitForm}>
          <DivInputs>
            <RiAdminLine size="80" color="#26A65B" />
            <label>
              <span>
                <RiEmotionHappyLine size="30" color="#606468" />
              </span>
              <InputEmail
                name="email"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={handleForm}
                required
              ></InputEmail>
            </label>
            <label>
              <span>
                <RiLock2Line size="30" color="#606468" />
              </span>
              <InputSenha
                name="password"
                placeholder="Senha"
                type="password"
                reauired
                value={form.password}
                onChange={handleForm}
              />
            </label>
            <BotaoEntrar>LogIn</BotaoEntrar>
          </DivInputs>
        </FormContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
