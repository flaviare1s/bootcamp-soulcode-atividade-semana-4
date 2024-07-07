import './Banner.css'
import imagem from '../assets/banner.jpg'

const Banner = (props) => {
  return (
    <section className='banner'>
      <img src={imagem} alt="Banner" />
      <h2>{props.texto}</h2>
    </section>
  )
}

export default Banner
