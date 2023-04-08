import styled from "styled-components";

export const Container = styled.section`
  margin: 28rem 0;
  >h2 {
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BG_700};

    padding-bottom: 16rem;
    margin-bottom: 24rem;

    color: ${({theme})=> theme.COLORS.GRAY_100};
    font-size: 20rem;
    font-weight: 400;
  }
`
