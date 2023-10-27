import {FiUser, FiMail,FiLock,FiCamera } from 'react-icons/fi'
import {Link} from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container,Form, Avatar} from './styles'

export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText to="/" title="Voltar"/>
      </header>

      <Form>

        <Avatar>
          <img 
            src='https://github.com/rntmc.png' 
            alt="foto do usuario"
          />

          <label htmlFor='avatar'>
            <FiCamera/>
            <input
              id="avatar"
              type='file'
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>

    </Container>
  )
};