import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150rem;

  background-color: ${({theme}) => theme.COLORS.BG_900};
  color:  ${({theme}) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 8rem;
  border-radius: 10px;

  padding: 16rem;

  &::placeholder{
    color:  ${({theme}) => theme.COLORS.GRAY_300};
    
  }
`;