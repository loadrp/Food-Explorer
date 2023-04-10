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
 

  >.logo{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-right: 32rem;
    width: 230rem;
    
    font-size: 12rem;
  }
  >button{
    width: 216rem;
  }

  >.input-style{
    width: 516rem;
    margin-right: 32rem;
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

