import { Header } from '../../components/Header'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Section } from '../../components/Section'
import{Link} from 'react-router-dom'

import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <div>
        <h1>Meus Filmes</h1>
        <ButtonAdd to="/new" title="Adicionar filme" />
      </div>

      <Content>
        <Section title="Interstellar" rating={3}>
          {/* {<Note
                data={{
                  tags: [
                    { id: '1', name: "horror" },
                    { id: '2', name: "drama" }
                  ]
                }}
              /> } */}
        </Section>
      </Content>
    </Container>
  )
}
