import Button from './Button'
import './Cabecalho.css'

const Cabecalho = () => {
  return (
    <header className='cabecalho'>
      <div className="logo">
        <span className="material-symbols-outlined">pets</span>
        <h1>Adote um Pet</h1>
      </div>
      <nav className="navbar">
        <ul className='navbar'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <Button />
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho
