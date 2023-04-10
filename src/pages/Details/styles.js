import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color:${({theme})=> theme.COLORS.BG_600} ;

  display: grid;
  
  grid-template-rows: 104rem auto 77rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  > main {
    grid-area: content;
    padding: 64rem 0;

  }

  >.details{
    display: flex;
    flex-direction: row;
    width: 687rem;
    gap: 200px;
  }

  > h1{
    margin-bottom: 20rem;
  }


 
`;

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



