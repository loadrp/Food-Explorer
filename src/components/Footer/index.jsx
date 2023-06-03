import { Container, Profile, Logout } from "./styles";
import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import  avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import  FooterLogo from '../../assets/footer-logo.png'

export function Footer() {
  const {signOut, user} = useAuth();
  
  const avatarUrl = user.avatar 
  ? `${api.defaults.baseURL}/files/${user.avatar}` 
  : avatarPlaceHolder

  

  
  return(
    <Container>
      <div className="footer-content">
        <img src={FooterLogo} alt={'Logo Food Explorer'}/>
        <p>© 2023 - Todos os direitos reservados.</p>
      </div>

    </Container>
  )
}