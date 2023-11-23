import{Link} from 'react-router-dom'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {ButtonText} from "../../components/ButtonText"
import {Textarea} from "../../components/Textarea"
import {NoteItem} from "../../components/NoteItem"
import {Button} from "../../components/Button"

import { api } from '../../services/api'

import { Container,Form } from "./styles"

export function New({ updateNotes }) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate();
  
  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Digite o titulo do filme")
    }

    if(!rating) {
      return alert("Digite o rating do filme")
    }

    if(newTag) {
      return alert("Voce deixou uma tag no campo para ser adicionada. Favor confirmar se deseja prosseguir")
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags
    });
    
    updateNotes();
    alert("Nota criada com sucesso")
    navigate("/");
  }

  async function handleDeleteNote() {
    await api.delete("/notes", {
      title,
      rating,
      description,
      tags
    });

    alert("Nota deletada com sucesso")
    navigate("/");
  }


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
            <Input 
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              onChange={e => setRating(e.target.value)}  
            />
          </div>

          <Textarea 
            placeholder="Observacoes"
            onChange={e => setDescription(e.target.value)}  
          />

          <h3>Marcadores</h3>

          <section>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder={"Novo marcador"}
                value={newTag}
                onChange={ e=> setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </section>

          <footer>
            <Button 
              title= "Excluir filme"
              onclick={handleDeleteNote}
            />
            <Button 
              title= "Salvar alteracoes" 
              onClick={handleNewNote}
            />
          </footer>

        </Form>
      </main>
    </Container>
  )
}