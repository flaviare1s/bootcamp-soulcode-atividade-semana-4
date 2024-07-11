const ButtonNav = ({ texto }) => {
  function handleClick() {
    alert('Página em construção!')
  }

  return (
    <button className='bg-success text-white border-white' onClick={handleClick}>{texto}</button>
  )
}

export default ButtonNav
