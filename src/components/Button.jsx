import './Button.css'

const Button = () => {
  function handleClick() {
    alert('Você clicou no botão!')
  }

  return (
    <button className='btn-entrar' onClick={handleClick}>Entrar</button>
  )
}

export default Button
