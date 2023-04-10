import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 304rem;
  height: 462rem;
  gap: 5px;
  
  background-color: ${({theme}) => theme.COLORS.BG_200};
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.BG_200};

  >img{
    max-width: 176rem;

  }

  >h2{
    margin-bottom: 15rem;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;

  }
  >p{
    margin-bottom: 15rem;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }

  >.price {

    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_BLUE}


  }

  > button{
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    
    border: none;

  }

`;