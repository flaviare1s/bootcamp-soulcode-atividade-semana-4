import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import ButtonNav from './ButtonNav'

const Cabecalho = ({ texto }) => {
  return (
    <header className='mb-5'>
      <Navbar bg='success' variant="success" expand="sm">
        <Container fluid>
          <Link to='/' className='text-decoration-none'>
              <h1 className='text-white'><span className="material-symbols-outlined">pets</span> Adote um Amor</h1>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Link className="nav-link text-white" to='/contato'>Contato</Link>
              <Link className="nav-link text-white" to='/cadastro'>Cadastro</Link>
              <Link className="nav-link text-white" to='/login'>Login</Link>
              <Link className="nav-link text-white" to='/politicaprivacidade'>Política de Privacidade</Link>
            </Nav>
          </Navbar.Collapse>
          <ButtonNav texto='Adotar'/>
        </Container>
      </Navbar>
    </header>
  )
}

export default Cabecalho
