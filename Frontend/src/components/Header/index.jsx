import { useEffect, useState } from 'react';

import {Container, Profile, Brand, Input, LogoutLink } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Link } from 'react-router-dom';

export function Header() {
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const {signOut, user} = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`)
      setNotes(response.data)
    }

    fetchNotes()

  }, [search])

  return(
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input
        placeholder="Pesquisar pelo titulo"
        onChange={ (e) => setSearch(e.target.value)}
      />

      <Profile to={"/profile"}>
        <div>
          <strong >{user.name}</strong>
          <LogoutLink href='/' onClick={signOut}>Sair</LogoutLink>
        </div>

        <img
          src={avatarUrl}
          alt={user.name}
        />
      </Profile>
    </Container>
  )
}