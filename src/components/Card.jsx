import './Card.css';

const Card = () => {
  const pets = [
    { id: 1, nome: 'Fluffy', especie: 'gato', idade: '3 meses', image: "https://cataas.com/cat" },
    { id: 2, nome: 'Caramelo', especie: 'cachorro', idade: '1 ano', image: "https://placedog.net/200/200" },
    { id: 3, nome: 'Kitty', especie: 'gato', idade: '2 anos', image: "https://cataas.com/cat" },
    { id: 4, nome: 'Belinha', especie: 'cachorro', idade: '1 ano', image: "https://placedog.net/201/201" },
    { id: 5, nome: 'Toby', especie: 'cachorro', idade: '1 ano', image: "https://placedog.net/202/202" },
    { id: 6, nome: 'Meg', especie: 'cachorro', idade: '1 ano', image: "https://placedog.net/203/203" },
    { id: 7, nome: 'Tocaia', especie: 'cachorro', idade: '8 meses', image: "https://placedog.net/204/204" },
    { id: 8, nome: 'Mingau', especie: 'gato', idade: '1 mês', image: "https://cataas.com/cat" },
    { id: 9, nome: 'Preta', especie: 'cachorro', idade: '1 ano', image: "https://placedog.net/205/205" },
    { id: 10, nome: 'Mimi', especie: 'cachorro', idade: '6 meses', image: "https://placedog.net/206/206" },
    { id: 11, nome: 'Mel', especie: 'gato', idade: '1 ano', image: "https://cataas.com/cat" },
    { id: 12, nome: 'Garfield', especie: 'gato', idade: '2 anos', image: "https://cataas.com/cat" }
  ];

  const cardsPets = pets.map((pet) => (
    <section className="card" key={pet.id}>
      <h4>Me adota?</h4>
      <img src={pet.image} alt={pet.nome} width="200"/>
      <h5>{pet.nome}</h5>
      <p>Espécie: {pet.especie}</p>
      <p>Idade: {pet.idade}</p>
    </section>
  ))

  return (
    <div className='cards'>{cardsPets}</div>
  )
}

export default Card
