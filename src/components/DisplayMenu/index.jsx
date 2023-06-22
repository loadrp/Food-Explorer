import { FiLogOut, FiX } from 'react-icons/fi';
import { Search } from '../Search';
import { MenuContainer, MenuContent, MenuHeader, MenuTitle, CloseIcon, MenuItem } from './styles';
import { Logout } from '../Header/styles';
import { useAuth } from '../../hooks/auth';

export function DisplayMenu({ isOpen, toggleMenu, isAdmin }) {
  const { signOut, user } = useAuth();
  

  return (
    <MenuContainer isOpen={isOpen}>
      <MenuHeader>
        <MenuTitle>Menu</MenuTitle>
        <CloseIcon size={26} onClick={toggleMenu} />
      </MenuHeader>

      <MenuContent>
        <Search />
        <ul>
        {isAdmin ? <MenuItem>Novo prato</MenuItem> : null}
          <MenuItem>
            <Logout onClick={signOut}>
              <FiLogOut />
            </Logout>
            <p onClick={signOut}>Sair</p>
          </MenuItem>
          
          
        
        </ul>
      </MenuContent>
    </MenuContainer>
  );
}