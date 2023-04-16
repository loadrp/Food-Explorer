import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color:${({theme})=> theme.COLORS.BG_200} ;
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

    >button{
      border: none;
      background-color: inherit;
      color: #E1E1E6;
      font-family: "Poppins";
      font-weight: "400";
      font-size: 24rem;
      margin: 0 auto;
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
  

  > button:first-child{
    align-self: end;
  }

  >.details{
    width: 687rem;
    height: 300rem;
    margin-left: 50rem;
    align-items: center;
    justify-content: center;
    

    >h1{
      margin-bottom: 24rem;
    }
    >p{
      margin-bottom: 24rem;
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
  width: 294px;
  margin-top: 46rem;
`;


