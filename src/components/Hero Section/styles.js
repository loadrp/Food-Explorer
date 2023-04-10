import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin: 164rem auto 0 auto;
  align-items: center;
  justify-content: end;
  padding: 30px;
  border-radius: 8px;
  width: 1120px;
  height: 260px;
 
 
  
  position: relative;
  z-index: 0;
  
  background: ${({theme})=> theme.COLORS.GRADIENT};

  >h1 {
    border-bottom-width: 1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BG_700};

    padding-bottom: 16rem;
    margin-bottom: 24rem;

    color: ${({theme})=> theme.COLORS.GRAY_100};
    font-size: 20rem;
    font-weight: 400;
  }

  >.hero-text h1{
    font-size: 40rem;
    gap: 8rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  
  }
  >.hero-text p{
    font-size: 16rem;
    font-family: 'Roboto', sans-serif;
    margin-top: 8rem;
  
  }

  >img {
    position: absolute;
    left: 0px;
    z-index: -1;
    height: 406px;
    width: 632px;
    top: -147px;
  }
`
