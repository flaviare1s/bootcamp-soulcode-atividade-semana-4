import { Button, Container } from "react-bootstrap"
import { useForm } from "react-hook-form"

const Contato = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  function cadastrar(data) {
    console.log(data)
  }

  return (
    <Container>
      <section>
        <h1 className="text-center text-success">Contato</h1>
        <hr className="text-success" />
        <h3>Adote um Amor</h3>
        <p>Email: contato@adoteumamor.com</p>
        <p>Endereço: Rua Exemplo, 123, Cidade, Estado, CEP 12345-678</p>
        <hr className="text-success" />
      </section>
      
      <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
        <h1 className="text-center text-success">Entre em contato conosco</h1>
        <hr className="text-success" />
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" className="form-control" {...register('nome', { required: 'Nome obrigatório', maxLength: { value: 100, message: 'Maximo 100 caracteres' } })} />
          {errors.nome && <small className="text-danger">{errors.nome.message}</small>}
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" className="form-control" {...register('email', { required: 'E-mail obrigatório', pattern: { value: /[\w.-]+@[\w-]+\.[\w-.]+/gi, message: 'E-mail inválido' } })} />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" placeholder="Deixe aqui a sua crítica ou sugestão" className="form-control" {...register('mensagem', { required: 'Mensagem obrigatória' })} rows="8"></textarea>
          {errors.mensagem && <small className="text-danger">{errors.mensagem.message}</small>}
        </div>
        <Button variant="success" className="mt-1 w-100" type="submit">Enviar Mensagem</Button>
      </form>
    </Container>
  )
}

export default Contato
