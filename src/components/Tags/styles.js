import styled from "styled-components";

export const Container = styled.span`
  font-size: 12rem;
  padding: 5rem 14rem;
  border-radius: 5rem;
  margin-right: 6rem;
  flex-wrap: wrap;

  color: ${({theme})=> theme.COLORS.WHITE};
  background-color: ${({theme})=> theme.COLORS.BG_1000};
`