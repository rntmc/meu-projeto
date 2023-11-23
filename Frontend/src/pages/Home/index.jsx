import { useState, useEffect } from 'react'

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Header } from '../../components/Header'
import { ButtonAdd } from '../../components/ButtonAdd'
import { Section } from '../../components/Section'
import {Note} from '../../components/Note'

import { Container, Content } from './styles'

export function Home() {
  const[tags, setTags] = useState([]);
  const[search, setSearch] = useState([]);
  const[notes, setNotes] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search])

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container>
      <Header />

      <div>
        <h1>Meus Filmes</h1>
        <ButtonAdd to="/new" title="Adicionar filme" />
      </div>

      <Content>
      {notes.length > 0 && (
        <Section>
        {
          notes.map(note => (
            <Note 
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}             
            />
          ))}
        </Section>
      )}
      </Content>
    </Container>
  )
}
