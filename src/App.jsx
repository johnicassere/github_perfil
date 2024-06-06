import { useState } from "react";
import Perfil from "./componentes/Perfil";
import Formulario from "./componentes/Formulario";
import Repo from "./componentes/ReposList";
import './global.css'

function App() {
  const [formVisivel, setFormVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');


  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {
        nomeUsuario.length > 4 && (
          <>
            <Perfil nomeUsuario={nomeUsuario} />
            <Repo nomeUsuario={nomeUsuario} />
          </>

        )
      }

      {/* {formVisivel && (
    <Formulario/>
  )}
  <button type="button" onClick={() => setFormVisivel(!formVisivel)}>toggle</button> */}
    </>
  )
}

export default App
