import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 105rem;
  width: 100%;
  background-color: ${({theme})=> theme.COLORS.BG_700};

  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BG_900};

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  padding: 0 80rem;

  

  @media (max-width: 768px){
    padding: 0 10rem;

    

  }

  >.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-right: 32rem;
    font-size: 12rem;
    
    >svg{
      display: none;
    }
    >div >svg{
    display: none;
    }
    >div >span{
    display: none;
    }

    @media (max-width:768px){
      
    
      height: 100%;
      gap: 30rem;
      justify-content: space-around;
      margin-right: 5rem;

      >svg{
      display: block;
      font-size: 30rem;
    
      }

      >div >svg{
      display: unset;
      font-size: 24rem;
      position: relative;
      }
      >div >span{
      display: unset;
      background-color: ${({theme})=> theme.COLORS.ORANGE};
      position: absolute;
      top: 20px;
      border-radius: 50%;
      padding: 6rem;
      font-size: 12px;
      }
    }
  }

  >button{
    width: 216rem;
  }

  >.input-style{
    width: 516rem;
    margin-right: 32rem;
    @media (max-width: 768px) {
      margin-right: 0rem;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    >.input-style {
    display: none;
  }

  >a>button{
    display: none;
  }
  >button{
    display: none;
  }

   /* Estilos para o menu sanduíche */
   .hamburger-menu {
    display: none; /* Oculta o ícone do menu por padrão */
    cursor: pointer;
    margin-right: 32rem;
  }

  .line {
    width: 25px;
    height: 3px;
    background-color: ${({theme})=> theme.COLORS.WHITE};
    margin: 5px 0;
  }
  }
  

`;


export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 56rem;
    height: 56rem;
    border-radius: 50%;
  }

  >div {
    display: flex;
    flex-direction: column;
    margin-left: 16rem;
    line-height: 24rem;

    span {
      font-size: 14rem;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    strong {
      font-size: 18rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

`
export const Logout = styled.button`
  border: none;
  background: none;

  >svg {
    color:${({theme})=> theme.COLORS.WHITE};
    font-size: 24rem;
  }

`

export const Counter = styled.span`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 50%;
  margin-left: 5px;
`;




