import {FiMail,FiLock} from 'react-icons/fi'
import{Link} from 'react-router-dom'

import {Input} from '../../components/Input'
import {Button} from '../../components/Button'

import {Container, Form, Background} from './styles'

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faca seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
        />

          <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Entrar"/>

        <Link to="/register">
          Criar Conta
        </Link>

      </Form>

      <Background/>
      
    </Container>
  )
}