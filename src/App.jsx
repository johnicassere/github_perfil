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
      <div className="input_home">
        {
          !nomeUsuario && (
            <>
            <label>Digite o nome do usuario do Git Hub</label>
            <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Digite o usuario Git hub" />
            
            </>
          )
        }
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
      </div>
    </>
  )
}

export default App
