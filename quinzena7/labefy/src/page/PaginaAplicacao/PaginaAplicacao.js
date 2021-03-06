import React from "react";
import axios from "axios";
import PaginaApresentacao from "../PaginaApresentacao/PaginaApresentacao";
import Busca from "../../components/Busca";
import Error from "../../components/Error";
import {
  Body,
  ConteudoBilioteca,
  DivHeader,
  NavegacaoLateral,
  BotoesNavegacao,
  BotoesOpcoesNav,
  DivPlayLists,
  PlaylistButton,
  Audio,
} from "./StyledPaginaAplicacao";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdLibraryAdd,
  MdRssFeed,
  MdDeleteForever,
} from "react-icons/md";
import CriarPlayList from "../../components/CriarPlaylist";
import { axiosConfig, baseUrl } from "../../constants/constants";

export default class PaginaAplicacao extends React.Component {
  state = {
    playLists: [],

    telaPrincipal: false,
    componenteBusca: false,
    componenteCriarPlayList: false,
  };

  TrocarPagina = () => {
    this.setState({ telaPrincipal: true });
  };
  TrocarComponenteBusca = () => {
    this.setState({ componenteBusca: true });
  };
  EscondeComponenteBusca = () => {
    this.setState({ componenteBusca: false });
  };
  TrocarComponentePlaylist = () => {
    this.setState({ componenteCriarPlayList: true });
  };
  EscondeComponentePlaylist = () => {
    this.setState({ componenteCriarPlayList: false });
  };



  

  componentDidMount = () => {
    this.pegaPlayolists();
  };

  pegaPlayolists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((res) => {
        this.setState({ playLists: res.data.result.list });
      })
      .catch((err) => {
        return <Error />;
      });
  };

  DeletarPlaylist = (del) => {
    axios
      .delete(`${baseUrl}/${del}`, axiosConfig)
      .then((res) => {
        alert("Playlist deletada com sucesso!");
        this.pegaPlayolists()
      })

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.telaPrincipal) return <PaginaApresentacao />;
    const playLists = this.state.playLists.map((playlist) => {
      return (
        <PlaylistButton
          key={playlist.id}
          changeInputPlayList={this.props.changeInputPlayList}
          name={playlist.name}
        >
          <p>{`${playlist.name}`}</p>
          <button onClick={() => this.DeletarPlaylist(playlist.id)}>
            <MdDeleteForever size={20} />
          </button>
        </PlaylistButton>
      );
    });



    const playListsBody = this.state.playLists.map((playlist) => {
      return (
        <PlaylistButton
          key={playlist.id}
          changeInputPlayList={this.props.changeInputPlayList}
          name={playlist.name}
        >
          <p>{`${playlist.name}`}</p>
          <button onClick={() => this.DeletarPlaylist(playlist.id)}>
            <MdDeleteForever size={20} />
          </button>
        </PlaylistButton>
      );
    });


    return (
      <div>
        <Body>
          <NavegacaoLateral>
            <span>...</span>
            <BotoesNavegacao>
              <BotoesOpcoesNav onClick={this.TrocarPagina}>
                <MdHome size={18} />
                <p>In??cio</p>
              </BotoesOpcoesNav>
              <BotoesOpcoesNav onClick={this.TrocarComponenteBusca}>
                <MdSearch size={18} />
                <p>Busca</p>
              </BotoesOpcoesNav>
              <BotoesOpcoesNav>
                <MdLibraryMusic size={18} />
                <p>Sua Biblioteca</p>
              </BotoesOpcoesNav>
              <BotoesOpcoesNav onClick={this.TrocarComponentePlaylist}>
                <MdLibraryAdd size={18} />
                <p>Criar PlayList</p>
              </BotoesOpcoesNav>
              <BotoesOpcoesNav>
                <MdRssFeed size={18} />
                <p>Podcasts</p>
              </BotoesOpcoesNav>
            </BotoesNavegacao>
            <DivPlayLists>{playLists}</DivPlayLists>
          </NavegacaoLateral>
          
          <ConteudoBilioteca>
            <DivHeader>
              {this.state.componenteBusca && (
                <Busca EscondeComponente={this.EscondeComponenteBusca} />
              )}
            </DivHeader>

            {this.state.componenteCriarPlayList && (
              <CriarPlayList
                EscondeComponente={this.EscondeComponentePlaylist}
              />
            )}

            <Error />
          </ConteudoBilioteca>

          <Audio>
            <audio controls="control">
            <source src="http://spoti4.future4.com.br/1.mp3" type="audio/mp3" />

            </audio>
          </Audio>
        </Body>
      </div>
    );
  }
}
