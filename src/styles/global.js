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
    background-color: ${({ theme }) => theme.COLORS.BG_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
    
  }
  body, input, button, textarea {
    font-family: 'Roboto', 'Poppins', serif;
    font-size: 16rem;
    outline: none;
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
`;