import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://github.com/gabazevdo.png"
          nome="Gabriel Azevedo"
          descricao="Oi, eu sou o Gabriel, e tem 3 décadas que estou vivo. 
          Casado e papai de uma princesinha linda! 
          Estou estudando React na Labenu. E faço parte da melhor turma: Johnson."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/2111/2111432.png"
          link="gabazevdo"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/747/747314.png"
          email="gbldja@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://image.flaticon.com/icons/png/512/711/711170.png"
          local="Itapevi/SP"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://static-images.ifood.com.br/image/upload/t_high/logosgde/202007172053_c3c35768-9578-4bfa-a4c7-491e20a85d19.png"
          nome="Cacau Show"
          cargo="Assistente de Expansão"
          descricao="Responsável pela transferência e vendas de lojas, avaliação de candidatos, montagem do processo de venda, 
          avaliação de perfil de compra. Orientações jurídicas e financeiras."
        />

        <CardGrande
          imagem="https://www.comotrabalhar.org/wp-content/uploads/2017/12/logo-Lojas-Eskala-300x300.jpg"
          nome="Lojas Eskala"
          cargo="Assistente Financeiro"
          descricao="Contas à pagar e receber. Pagamentos de funcionários e fornecedores. Controle de contas e cheques."
        />
        <h2>Formação</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png"
          nome="Labenu"
          cargo="Desenvolvimento Web com React.JS"
          descricao="Aprenda na prática! Aulas ao vivo e de onde você estiver."
        />

        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/1352317826422476801/0oagSMOm.jpg"
          nome="FAM- Faculdade das Americas"
          cargo="Sistemas para Internet"
          descricao="Curso Superior de Tecnologia em Sistemas para Internet."
        />
      </div>

        <h2>Minhas redes sociais</h2>
      <div className="page-section-container redesSociais">
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/145/145802.png"
          texto="Facebook"
        />

        <ImagemButton
          
          imagem="https://image.flaticon.com/icons/png/512/2111/2111463.png"
          texto="Instagram"
        />
      </div>
    </div>
  );
}

export default App;
