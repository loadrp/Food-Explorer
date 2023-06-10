import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150rem;
  max-height: 50rem;
  
  border-radius: 5px;
  @media(max-width: 768px){
    font-size: 22px;
  }
`;

export const ButtonCard = styled.button`
  background-color: ${({theme}) => theme.COLORS.BG_100};
  color: #333;
  border: none;
  font-size: 35px;
  cursor: pointer;
  padding: 0 10px;
  outline: none;
  &:hover {
    color:#f2f2f2
  }

  @media(max-width: 768px){
    font-size: 24px;
  
  }
`;

export const Value = styled.div`
  font-size: 28px;
  margin: 0 5px;
  color:#fff;
  @media(max-width: 768px){
    font-size: 16px;
    margin: 0;
  }
`;