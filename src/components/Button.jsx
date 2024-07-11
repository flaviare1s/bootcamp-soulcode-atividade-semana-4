import './Button.css'

const Button = ({ texto }) => {
  function handleClick() {
    alert('Página em construção!')
  }

  return (
    <button className='btn-entrar' onClick={handleClick}>{texto}</button>
  )
}

export default Button
