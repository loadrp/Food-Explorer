import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  
  border-radius: 5px;
`;

export const Button = styled.button`
  background-color: ${({theme}) => theme.COLORS.BG_200};
  color: #333;
  border: none;
  font-size: 35px;
  cursor: pointer;
  padding: 0 10px;
  outline: none;
  &:hover {
    color:#f2f2f2
  }
`;

export const Value = styled.div`
  font-size: 28px;
  margin: 0 5px;
  color:#fff;
`;