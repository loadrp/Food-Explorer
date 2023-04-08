import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import  avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Button } from "../Button";
import { Input } from "../Input";
import { FiSearch, FiLogOut, FiShoppingBag } from "react-icons/fi";
import  Logo  from '../../assets/logo.svg'

export function Header() {
  const {signOut, user} = useAuth();
  
  const avatarUrl = user.avatar 
  ? `${api.defaults.baseURL}/files/${user.avatar}` 
  : avatarPlaceHolder

  

  
  return(
    <Container>
      <div>
        <img src={Logo} width={30} height={30} alt='logo'/>
        <h2>Food Explorer</h2>
     
      </div>
      <Profile to="/profile">
      </Profile>
        
      <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
      
      <Button icon={FiShoppingBag} title={'Pedidos'}/>
      <Logout  onClick={signOut}>
        <FiLogOut />

      </Logout>
    </Container>
  )
}