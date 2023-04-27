import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme})=> theme.COLORS.GRAY_500};
  color: ${({theme})=> theme.COLORS.GRAY_300};

  border-radius: 10px;

  p {
    margin-left: 8rem;
  }

  >input{
    height: 48rem;
    width: 100%;
    padding: 12rem;
    color: ${({theme})=> theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder{
      color: ${({theme})=> theme.COLORS.GRAY_300};
    }

    
  }
  >svg{
      margin-left: 16rem;
    }
`;