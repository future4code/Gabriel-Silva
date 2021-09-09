import { React, useState, useEffect } from 'react'
import TelaInicial from './telas/TelaInicial/TelaInicial'
import TelaMatches from './telas/TelaMatches/TelaMatches'
import axios from 'axios'



function App() {
  const [telaCentral, setTelaCentral] = useState(true);
  const [trocaPagina, setTrocaPagina] = useState(false)
  const [pagina, setPagina] = useState(<TelaInicial/>)


  const mudaPagina = () => {
    setTelaCentral(!telaCentral)
    setTrocaPagina(!trocaPagina)
    if (trocaPagina) {
      setPagina(<TelaInicial mudaPagina={()=> mudaPagina()}/>)
    } else {
      setPagina(<TelaMatches mudaPagina={()=> mudaPagina()}/>)
    }
  } 
  

  return (
    <div>
      {telaCentral ? <TelaInicial mudaPagina={()=> mudaPagina()}/> : <TelaMatches mudaPagina={()=> mudaPagina()}/>}
    </div>
  );
}

export default App;
