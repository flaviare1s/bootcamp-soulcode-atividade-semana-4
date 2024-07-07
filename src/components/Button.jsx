import './Button.css'

const Button = (props) => {
  function handleClick() {
    alert('Você clicou no botão!')
  }

  return (
    <button className='btn-entrar' onClick={handleClick}>{props.texto}</button>
  )
}

export default Button
