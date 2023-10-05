import {RiShutDownLine} from 'react-icons/ri'
import {useAuth} from "../../hooks/auth";

import { api } from '../../services/api';
import {Container, Profile, Logout} from "./styles"
import { useNavigate } from 'react-router-dom';

export function Header(){

  const {SignOut, user} = useAuth();
  const navigation = useNavigate();

  function handleSignOut(){
    navigation("/");
    SignOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Profile to = "/profile">
        <img src={avatarUrl} alt={user.name}/>

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine/>
      </Logout>

    </Container>
  );
}