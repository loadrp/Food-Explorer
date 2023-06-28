import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 32rem;
  margin: 8rem 16rem 8rem 0;

  

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : "#76797B"};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  
  
  
  
  border-radius: 12px;
  padding-right:16px;
  padding: 8px;
  

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input {
    height: 24px;
    width: 118px;
  

    padding: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300}
    }
  }
  
`;