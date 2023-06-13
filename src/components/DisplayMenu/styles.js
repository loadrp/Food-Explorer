import styled from "styled-components";
import { FiX } from 'react-icons/fi';
import { Search } from '../Search';


export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 300rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.BG_300};
  transition: left 0.3s ease-in-out;
  z-index: 5;
  

  ul > li > a{
    color: ${({theme}) => theme.COLORS.FONT_WHITE};
    list-style: none;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem;

  background-color: ${({ theme }) => theme.COLORS.BG_300};
`;

export const CloseIcon = styled(FiX)`
  cursor: pointer;
  margin-right: 15rem;
`;

export const MenuTitle = styled.h2`
  font-size: 22rem;
  color: ${({theme}) => theme.COLORS.WHITE};
  padding: 26rem 24rem;
`;

export const MenuContent = styled.div`
  padding: 26rem;
  background-color: ${({ theme }) => theme.COLORS.BG_100};
  height: 100vh;
  padding-top: 26rem;
 
  
 
`;

export const MenuItem = styled.li`
  display: flex;
  gap: 10rem;
  align-items: center;
 
  margin-bottom: 10rem;
  margin-top: 20rem;
  padding: 10rem;
  border-bottom: 1px solid ${({theme})=>theme.COLORS.BG_1000};
  list-style: none;
  
`;

