import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color:${({theme})=> theme.COLORS.BG_100} ;
  align-items: center;

  display: grid;
  
  grid-template-rows: 104rem auto 77rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  > main {
    grid-area: content;
    padding: 64rem 0;
    margin: 0 auto;
    @media (max-width: 768px){
    padding: 20rem 0;
    }

    >button{
      border: none;
      background-color: inherit;
      color: #E1E1E6;
      font-family: "Poppins";
      font-weight: "400";
      font-size: 24rem;
      margin: 0 auto;
      @media (max-width: 768px){
      font-size: 16rem;
      }
    }
    @media (max-width: 768px){
    max-width: 400px;
  }

  
 }`;

export const Links = styled.ul`
  list-style: none;
  
  >li {
    margin-top: 12rem;
    text-decoration: none;
    a {
      color: ${({theme})=> theme.COLORS.WHITE};
    }
  }
`

export const Content = styled.div`
  max-width: 1124rem;
  margin: 0 auto;

  display: flex;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    
  }
  >img{
    @media (max-width: 768px){
      
      width: 264rem;
      height: 264rem;
    }
  }
  

  > button:first-child{
    align-self: end;
  }

  >.details{
    width: 687rem;
    height: 300rem;
    margin-left: 50rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
    max-width: 250rem;
    margin: 0 auto;
    }
    

    >h1{
      margin-bottom: 24rem;
      @media (max-width: 768px){
      font-size: 25rem;
      }
    }
    >p{
      margin-bottom: 24rem;
      @media (max-width: 768px){
      font-size: 16rem;
      }
    }
    >button{
      margin-top: 24rem;
    }
  }

  > h1{
    font-size: 36rem;
    font-weight: 500;
    padding-top: 64rem;
  }

  >p {
    font-size: 16rem;
    margin-top: 16rem;
    text-align: justify;
  }

`
export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 25rem;
`;


