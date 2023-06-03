import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 6.25%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG_100};
    color: ${({ theme }) => theme.COLORS.FONT_WHITE};
    -webkit-font-smoothing: antialiased;
    
  }
  body, input, button, textarea {
    font-family: 'Roboto', 'Poppins', serif;
    font-size: 16rem;
    outline: none;
  }

  h1,h2{
    font-family: 'Poppins';
    font-weight: 400;
  }
  img{
    max-width: 100%;
  }

  a{
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }
  button:hover, a:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 350px) {
    
 
}
`;