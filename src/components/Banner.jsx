import './Banner.css'
import imagem from '../assets/banner.jpg'

const Banner = () => {
  return (
    <section className='banner'>
      <img src={imagem} alt="Banner" />
      <h2>Seja bem-vindo(a) à galeria de pets fofinhos para adoção!</h2>
    </section>
  )
}

export default Banner
