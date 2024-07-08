import './Card.css'

const Card = (props) => {
  
  return (
    <section className="card" key={props.id}>
    {!props.adotado && <h4 className='adotar'>Me adota?</h4>}
    {props.adotado && <p className='adotado'>ADOTADO</p>}
    <img src={props.image} alt={props.nome} width="200"/>
    <h5 className={props.especie === 'gato' ? 'gato' : 'cachorro'}>{props.nome}</h5>
    <p className={props.especie === 'gato' ? 'gato' : 'cachorro'}>Especie: {props.especie}</p>
    <p className={props.especie === 'gato' ? 'gato' : 'cachorro'}>Idade: {props.idade}</p>
  </section>
  )
}

export default Card
