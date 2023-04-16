import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  grid-area: footer;

  height: 77rem;
  width: 100%;
  
  margin: 0 auto;
  background-color: ${({theme})=> theme.COLORS.BG_700};

  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme})=> theme.COLORS.BG_1000};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 123rem;

  > .footer-content{
    min-width: 1120px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
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
    color:${({theme})=> theme.COLORS.ORANGE};
    font-size: 24rem;
  }

`