import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme})=>theme.COLORS.BG_700};
  border: none;
  border-radius: 10rem;
  padding: 22rem;
  margin-bottom: 16rem;

  > h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24rem;
    color: ${({theme})=>theme.COLORS.WHITE};
  }
  > div {
    width: 100%;
    display: flex;
    margin-top: 24rem;
  }

`;