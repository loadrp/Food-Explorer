import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  
  grid-template-columns: auto;
  grid-template-rows: 104rem auto auto 77rem;
  grid-template-areas: 
  "header"
  "content"
  "cards"
  "footer";
  background-color: ${({theme}) => theme.COLORS.BG_100};


`;

export const Cards = styled.div`
  grid-area: cards;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BG_700};
  
`

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BG_700};
  background-color: ${({theme})=> theme.COLORS.BG_900};

  > h1 {
    font-size: 24rem;
    color: ${({theme})=> theme.COLORS.ORANGE}
  }

`;

export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({theme})=> theme.COLORS.BG_900};
  padding-top: 64rem;
  text-align: center;

  > li {
    margin-bottom: 24rem;

  }
`;
export const Search = styled.div`
  grid-area: search;
  padding: 64rem 64rem 0;

`;
export const Content = styled.div`
  grid-area: content;
  overflow-x: hidden;
  margin: 0 auto;
  max-width: 1120rem;

  @media (max-width: 768px){
    padding: 0 15rem;
    overflow-x: hidden;
  }

`;
export const NewNote= styled(Link)`
  grid-area: newnote;
  background-color: ${({theme})=> theme.COLORS.ORANGE};
  color: ${({theme})=> theme.COLORS.BG_900};
  
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 8rem;
  }

`;


