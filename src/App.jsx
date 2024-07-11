import './App.css'
import Cabecalho from "./components/Cabecalho"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Contato from "./pages/Contato"
import NotFound from "./pages/NotFound"
import Rodape from "./components/Rodape"
import Politica from "./pages/Politica"
import { HashRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <>
      <div>
        <HashRouter>
          <Cabecalho />
          <Routes>
            <Route path='/' element={<Home />} />   
            <Route path='/login' element={<Login />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='politicaprivacidade' element={<Politica />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Rodape />
        </HashRouter>
      </div>
    </>
  )
}

export default App