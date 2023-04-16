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
  
  width: 304rem;
  height: 462rem;
  gap: 5px;
  border: 1px solid ${({theme}) => theme.COLORS.BG_200};
  border-radius: 8px;
  
  background-color: ${({theme}) => theme.COLORS.BG_200};
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.COLORS.BG_200};

  a{
    text-decoration: none;
    color: none;
    color: #fff;
  }

  >i{
    width: 24px;
    height: 22px;
    position: absolute;
    display: inline-flex;
    top: 0;
    right: 0;
    margin: 20rem 20rem 0 0;
  }

  
  > a> img{
    max-width: 176rem;

  }

  >a> h2{
    margin-bottom: 15rem;
    font-family: 'Poppins';
    font-size: 24px;
    font-weight: 700;
    line-height: 34px;
    letter-spacing: 0em;
    text-align: center;

  }
  >a> p{
    margin-bottom: 15rem;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }

  >a >.price {

    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 400;
    line-height: 51px;
    letter-spacing: 0em;
    text-align: center;
    color: ${({theme}) => theme.COLORS.LIGHT_BLUE}


  }

  

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button{
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    
    border: none;

  }


`;