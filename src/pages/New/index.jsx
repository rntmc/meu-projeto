import{Link} from 'react-router-dom'

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {ButtonText} from "../../components/ButtonText"
import {Textarea} from "../../components/Textarea"
import {NoteItem} from "../../components/NoteItem"
import {Button} from "../../components/Button"


import { Container,Form } from "./styles"


export function New() {
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <ButtonText to="/" title="Voltar"/>
            <h1>Novo filme</h1>
          </header>
          
          <div>
            <Input placeholder="Titulo"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>

          <Textarea placeholder="Observacoes"/>

          <h3>Marcadores</h3>

          <section>
            <div className="tags">
              <NoteItem value="Horror"/>
              <NoteItem isNew placeholder="Novo marcador"/>
            </div>
          </section>

          <footer>
            <Button title= "Excluir filme"/>
            <Button title= "Salvar alteracoes"/>
          </footer>

        </Form>
      </main>
    </Container>
  )
}