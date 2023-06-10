import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width:768px) {
      font-size: 15rem;
      margin: 0 auto;
      max-width: 350rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

  >h1{
    font-size: 48rem;
    color: ${({theme})=> theme.COLORS.WHITE};
    font-weight: bold;
    font-family: 'Roboto';

    @media (max-width:768px) {
      font-size: 36rem;
      font-weight: bold;
      font-family: 'Roboto';
    }

  }
  >img{
    margin: 19rem;
    display: block;

    @media (max-width:768px) {
      margin-top:150rem;
    }
  }
  
`;

export const Form = styled.form`
  padding: 0rem 108rem 0 306rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width:768px) {
    padding: 5rem 5rem;
  }
  
  >div {
    background-color: ${({theme})=> theme.COLORS.BG_700};
    width: 476rem;
    height: 621rem;
    border-radius: 16px;
    padding: 64rem;

    @media (max-width:768px) {
      padding: 4rem 44rem;
      margin: 0 auto;
      max-width: 376rem;
      display: flex;
      align-items: left;
      flex-direction: column;
      background-color: ${({theme})=> theme.COLORS.BG_100};
    }
  }
  
  >div h2{
    font-size: 32rem;
    margin: 0 0 56rem 0;
    @media (max-width:768px) {
      font-size:22rem;
      margin:20rem 0 0 0;
    }
  }

  >div p{
    font-size: 14rem;
    color: ${({theme})=> theme.COLORS.GRAY_100};
    justify-content: left;
    margin-top: 32rem;
    text-align: left;
    @media (max-width:768px) {
      font-size:12rem;
    }
   
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
