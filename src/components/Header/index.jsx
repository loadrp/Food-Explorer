import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Button } from "../Button";
import { Input } from "../Input";
import { FiMenu, FiSearch, FiLogOut, FiShoppingBag, FiShoppingCart} from "react-icons/fi";
import Logo from '../../assets/logo.svg'

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder




  return (
    <Container>
  
      
      <div className="logo">
        <FiMenu/>
        <div style={{display:"flex", gap:"5px", "white-space": "nowrap",}}>
          <img src={Logo} width={30} height={30} alt='logo' />
          <h2>Food Explorer</h2>
        </div>
        
        <div>
        <FiShoppingCart/>
          <span>1</span>
        </div>
        

      </div>

      
      <Profile to="/profile">
      </Profile>
      <div className="input-style">
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />

      </div>
      

      <Button icon={FiShoppingBag} title={'Pedidos'} />
      <Logout onClick={signOut}>
        <FiLogOut />

      </Logout>
    </Container>
  )
}


