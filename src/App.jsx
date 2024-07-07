import './App.css'
import Banner from './components/Banner'
import Cabecalho from './components/Cabecalho'
import Galeria from './components/Galeria'
import Rodape from './components/Rodape'

function App() {

  return (
    <main>
      <Cabecalho link1='Home' link2='Sobre' link3='Contato' />
      <Banner texto='Seja bem-vindo(a) à galeria de pets fofinhos para adoção!' />
      <Galeria />
      <Rodape />
    </main>
  )
}

export default App
