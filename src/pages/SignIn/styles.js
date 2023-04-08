import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  >h1{
    font-size: 48rem;
    color: ${({theme})=> theme.COLORS.WHITE};

  }

  >img{
    margin: 19rem;
  }
  
`;

export const Form = styled.form`
  padding: 0rem 108rem 0 306rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  
  >div {
    background-color: ${({theme})=> theme.COLORS.BG_700};
    width: 476rem;
    height: 621rem;
    border-radius: 16px;
    padding: 64rem;
  }
  
  >div h2{
    font-size: 32rem;
    margin: 0 0 56rem 0;
  }

  >div p{
    font-size: 14rem;
    color: ${({theme})=> theme.COLORS.GRAY_100};
    justify-content: left;
    margin-top: 32rem;
    text-align: left;
   
  }

  >div button{
    margin-top: 32rem;
  }

  >div a{
    margin-top: 32rem;
    color: ${({theme})=> theme.COLORS.WHITE};
    display: block;
  }

`;

