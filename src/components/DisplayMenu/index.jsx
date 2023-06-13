import { FiX } from 'react-icons/fi';
import { Search } from '../Search';
import { MenuContainer, MenuContent, MenuHeader, MenuTitle, CloseIcon, MenuItem } from './styles';

export function DisplayMenu({ isOpen, toggleMenu }) {
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
            <a href="/">Teste</a>
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