import {Container, Profile, Brand, Input} from './styles'

export function Header() {
  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input
        placeholder="Pesquisar pelo titulo"
      />

      <Profile to="/profile">
        <div>
          <strong>Renato Carrino</strong>
          <a href='@'>Voltar</a>
        </div>

        <img
          src="https://github.com/rntmc.png"
          alt="foto do usuario"
        />
      </Profile>
    </Container>
  )
}