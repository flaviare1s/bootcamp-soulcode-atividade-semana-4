import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imagem from '../assets/banner.jpg'

const NotFound = () => {
  return (
    <>
      <Container fluid className='text-center p-5 text-danger'>
        <h1>Oops!</h1>
        <h2>Página não encontrada</h2>
        <img src={imagem} alt="Imagem de gatinhos" />
      </Container>
      <Container className='d-flex justify-content-center'>
        <Link to='/'>
          <Button className="mt-3" variant="success">Voltar para Home</Button>
        </Link>
      </Container>
    </>
  )
}

export default NotFound
