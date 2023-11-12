


function App() {
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import NossaCausa from "./paginas/NossaCausa";
import Privacidade from "./paginas/Privacidade";
import Contato from "./paginas/Contato";
import Login from "./paginas/Login";
import Apoie from "./paginas/Apoie";
import Rodape from "./componentes/Rodape";
import FormRodape from "./componentes/FormularioRodape";
import Menu from "./componentes/Menu";
import './App.scss'
// import { Banner } from "./componentes/Banner/Banner";

console.log(window.location);

function App() {
  return (

    <>
      
    </>
  )

    <div className="App">
      <BrowserRouter>
          <Menu />

          <Routes>
            <Route path="/" element={<Inicio />}/>
            <Route path="/sobre" element={<SobreMim />}/>
            <Route path="/nossacausa" element={<NossaCausa />}/>
            <Route path="/privacidade" element={<Privacidade />}/>
            <Route path="/contato" element={<Contato />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/apoie" element={<Apoie />}/>
            <Route path="*" element={<div>Página não encontrada</div>}/>
          </Routes>
      </BrowserRouter>

      <FormRodape />
      <Rodape />
    </div>
  
  );

}

export default App;
