import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  margin: 164rem auto 64rem auto;
  align-items: center;
  justify-content: end;
  padding: 30px;
  border-radius: 8px;
  max-width: 1120rem;
  height: 260px;
 
 
  
  position: relative;
  z-index: 0;
  
  background: ${({theme})=> theme.COLORS.GRADIENT};

  @media (max-width: 768px) {
  display: flex;
  margin: 64rem 0 64rem 0; /* Reduza a margem superior para dispositivos móveis */
  border-radius: 8px;
  height: 120rem; /* Defina a altura como automática para se ajustar ao conteúdo */
  background: ${({theme})=> theme.COLORS.GRADIENT};
  
  }

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
  >.hero-text{
    max-width: 100%;

  }

  >.hero-text h1{
    font-size: 40rem;
    gap: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 16rem;
      
    }
  
  }
  >.hero-text p{
    font-size: 16rem;
    
    font-family: 'Roboto', sans-serif;
    margin-top: 8rem;
    @media (max-width: 768px) {
      font-size: 10rem;
      margin-top: 4rem;
      max-width: 100%;
    }
   
  
  }


  >div >img {
    position: absolute;
    left: 0px;
    z-index: -1;
    height: 406px;
    max-width: 632px;
    top: -144px;

    @media (max-width: 768px) {
      position: relative;
      height: 149px;
      max-width: 191px;
      
      object-fit: cover;
      left: 0;
      top: -15px;
      margin-right: 20px;
      overflow: hidden;
    }

  }
`
