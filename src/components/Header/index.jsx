import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from 'react'
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Button } from "../Button";
import { Input } from "../Input";
import { FiMenu, FiSearch, FiLogOut, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import Logo from '../../assets/logo.svg';
import { DisplayMenu } from "../DisplayMenu";

export function Header(isAdmin) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceHolder;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <DisplayMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} isAdmin={isAdmin}/>
      <div className="logo">
        <FiMenu onClick={toggleMenu} />
        <div style={{ display: "flex", gap: "5px", whiteSpace: "nowrap" }}>
          <img src={Logo} width={30} height={30} alt='logo' />
          <h2>Food Explorer</h2>
        </div>

        <div>
          <FiShoppingCart />
          <span>1</span>
        </div>
      </div>

      <Profile to="/profile"></Profile>
      <div className="input-style">
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />
      </div>

      <Button icon={FiShoppingBag} title={'Pedidos'} />
      <Logout onClick={signOut}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
