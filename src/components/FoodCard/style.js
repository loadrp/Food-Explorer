import styled from "styled-components";

export const HeartIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.isFavorite ? "white" : "transparent")};
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 48rem;
  
  width: 304rem;
  height: 462rem;
  gap: 5px;
  
  background-color: ${({ theme }) => theme.COLORS.BG_200};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.COLORS.BG_200};

  @media(max-width: 768px){
    margin-bottom: 24rem;
    width: 210rem;
    max-height: 300rem;
    padding: 0rem 20rem 20rem 20rem;
    font-size: 22px;
    

    
  }

  a{
    text-decoration: none;
    color: none;
    color: #fff;
    @media(max-width: 768px){
    font-size: 11px;

    }
  }

  >i{
    width: 24rem;
    height: 22rem;
    position: absolute;
    display: inline-flex;
    top: 0;
    right: 0;
    margin: 20rem 20rem 0 0;

    @media(max-width: 768px){
      width: 15rem;
      height: 15rem;

    }
  }

  
  > a> img{
    width: 176rem;
    
    @media(max-width: 768px){
      width: 88rem;
      margin-bottom: 12rem;

    }

  }

  >a> h2{
    margin-bottom: 15rem;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 700;
    line-height: 34rem;
    letter-spacing: 0em;
    text-align: center;
    
    @media(max-width: 768px){
    font-size: 14px;
    margin-bottom: 0rem;
    line-height: 24rem;
    margin-bottom: 12rem;

    }

  }
  >a> .description{
    margin-bottom: 15rem;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    
    @media(max-width: 768px){
     display: none;

    }
  }

  >a >.price {

    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 400;
    line-height: 51rem;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    
    @media(max-width: 768px){
    font-size: 16px;
    margin: 0;
    line-height: 22rem;
    margin-bottom: 12rem;

    }



  }
  

  

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12rem;
  gap:12rem;

  > button{
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 12rem 24rem;
    border: none;

  }

  @media (max-width:768px) {
    flex-direction: column;
    height:32rem;
    max-width:132rem;
    padding: 0;
    
    
  }


`;