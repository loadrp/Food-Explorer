import { Container, Profile, Logout, Counter } from "./styles";
import { useAuth } from "../../hooks/auth";
import { useState } from 'react'
import { api } from "../../services/api";
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'
import { Button } from "../Button";
import { Input } from "../Input";
import { FiMenu, FiSearch, FiLogOut, FiShoppingBag, FiShoppingCart } from "react-icons/fi";
import Logo from '../../assets/logo.svg';
import { DisplayMenu } from "../DisplayMenu";
import { Link, useNavigate } from "react-router-dom";


export function Header({ isAdmin, setSearchTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  async function handleSearch(e) {
    console.log(e.target.value)
    setSearchTerm(e.target.value);

  }

  const navigate = useNavigate();
  const { signOut, user } = useAuth();


  function signOutClick() {
    const storedUser = JSON.parse(localStorage.getItem("@foodexplorer:user"));
    if (storedUser.role == "admin") {
      navigate("/");
      signOut();
    } else {
      navigate("/");
      signOut();
    }
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <DisplayMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} isAdmin={isAdmin} />
      <div className="logo">
        <FiMenu onClick={toggleMenu} />
        <div style={{ display: "flex", gap: "5px", whiteSpace: "nowrap" }}>
          <img src={Logo} width={30} height={30} alt='logo' />
          <h2>Food Explorer</h2>
          {isAdmin == 'True' ? <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>admin</p> : <p></p>}
        </div>

        <div>
          <FiShoppingCart />
          <span>1</span>
        </div>
      </div>


      <div className="input-style">
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}
          onChange={handleSearch} />
      </div>

      <Link to={isAdmin === 'True' ? '/newfood' : '/'}>
        <Button
          icon={isAdmin === 'True' ? null : FiShoppingBag}
          title={isAdmin === 'True' ? 'Novo Prato' : 'Pedidos (0)'}
        />
      </Link>
      <Logout onClick={() => signOutClick()}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}
