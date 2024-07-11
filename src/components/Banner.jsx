import './Banner.css'
import { Container } from 'react-bootstrap'
import imagem from '../assets/banner.jpg'

const Banner = ({texto}) => {
  return (
    <Container className='banner'>
      <img src={imagem} alt="Banner" />
      <h2>{texto}</h2>
    </Container>
  )
}

export default Banner
