import Button from './Button'
import './Cabecalho.css'

const Cabecalho = (props) => {
  return (
    <header className='cabecalho'>
      <div className="logo">
        <span className="material-symbols-outlined">pets</span>
        <h1>Adote um Pet</h1>
      </div>
      <nav className="navbar">
        <ul className='navbar'>
          <li><a href="#">{props.link1}</a></li>
          <li><a href="#">{props.link2}</a></li>
          <li><a href="#">{props.link3}</a></li>
          <Button texto='Entrar' />
        </ul>
      </nav>
    </header>
  )
}

export default Cabecalho
