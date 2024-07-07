import './Card.css'

const Card = (props) => {
  
  return (
    <section className="card" key={props.id}>
    <h4>Me adota?</h4>
    <img src={props.image} alt={props.nome} width="200"/>
    {props.especie === 'gato' ? <h5 style={{color: 'red'}}>{props.nome}</h5> : <h5 style={{color: 'blue'}}>{props.nome}</h5>}
    {props.especie === 'gato' ? <p style={{color: 'red'}}>Espécie: {props.especie}</p> : <p style={{color: 'blue'}}>Espécie: {props.especie}</p>}
    {props.especie === 'gato' ? <p style={{color: 'red'}}>Idade: {props.idade}</p> : <p style={{color: 'blue'}}>Idade: {props.idade}</p>}
  </section>
  )
}

export default Card
