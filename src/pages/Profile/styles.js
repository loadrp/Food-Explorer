import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  > header {
    width: 100%;
    height: 144rem;
    background-color: ${({theme})=> theme.COLORS.BG_900};

    display: flex;
    align-items: center;
    padding: 0 124rem;

    svg{
      color: ${({theme})=> theme.COLORS.GRAY_100};
      font-size: 24rem;
    }
  }

`;

export const Form = styled.form`
  max-width: 340rem;
  margin: 0 auto;
  
  >div:nth-child(4){
    margin-top: 24rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -100rem auto 32rem;
  width: 186px;
  height: 186px;
  >img{
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  >label{
    width: 48rem;
    height: 48rem;
    background-color: ${({theme})=> theme.COLORS.ORANGE};
    border-radius: 50%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7rem;
    right: 7rem;
    cursor: pointer;

    >input{
      display: none;

    }

    >svg{
      width: 20rem;
      height: 20rem;
      color: ${({theme}) => theme.COLORS.BG_800};
    }
  }
`;