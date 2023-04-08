import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64rem 0;

  }
 
`;

export const Links = styled.ul`
  list-style: none;
  
  >li {
    margin-top: 12rem;
    text-decoration: none;
    a {
      color: ${({theme})=> theme.COLORS.WHITE}
    }
  }
`

export const Content = styled.div`
  max-width: 550rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

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



