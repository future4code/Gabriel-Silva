import React from "react";
import Header from "../../components/Header";
import {
  ContainerLogin,
  FormContainer,
  DivInputs,
  InputEmail,
  InputSenha,
  BotaoEntrar,
} from "./LoginStyled";
import {
  RiAdminLine,
  RiEmotionHappyLine,
  RiLock2Line,
} from "react-icons/ri";

const LoginPage = () => {
  return (
    <>
      <Header />
      <ContainerLogin>
        <FormContainer>
          <DivInputs>
            <RiAdminLine size="80" color="#26A65B" />
            <label>
              <span>
                <RiEmotionHappyLine size="30" color="#606468" />
              </span>
              <InputEmail
                placeholder="Email"
                type="email"
                required
              ></InputEmail>
            </label>
            <label>
              <span>
                <RiLock2Line size="30" color="#606468" />
              </span>
              <InputSenha placeholder="Senha" type="password" reauired />
            </label>
            <BotaoEntrar>LogIn</BotaoEntrar>
          </DivInputs>
        </FormContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginPage;
