import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${({theme})=> {theme.COLORS.GRAY_400}};
  height: 48rem;
  border-radius: 5px;

  @media(max-width:768px){
    input::placeholder {
      font-size: 12rem;
    }
  }
  
`;