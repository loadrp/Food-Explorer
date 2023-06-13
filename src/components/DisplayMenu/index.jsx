import { FiLogOut, FiX } from 'react-icons/fi';
import { Search } from '../Search';
import { MenuContainer, MenuContent, MenuHeader, MenuTitle, CloseIcon, MenuItem } from './styles';
import { Logout } from '../Header/styles';
import { useAuth } from '../../hooks/auth';

export function DisplayMenu({ isOpen, toggleMenu }) {
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
          <MenuItem>
            <Logout onClick={signOut}>
              <FiLogOut />
            </Logout>
            <p onClick={signOut}>Sair</p>
          </MenuItem>
          <MenuItem>
            <a href="/">Teste</a>
          </MenuItem>
          <MenuItem>
            <a href="/">Teste</a>
          </MenuItem>
        </ul>
      </MenuContent>
    </MenuContainer>
  );
}