import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  height: 56rem;
  border: 0;
  padding: 0 16rem;
  margin-top: 0rem;
  border-radius: 10rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  svg{
    margin-right: 15rem;
    height: 22px;
    width: 26px;
  }
  @media (max-width:768px) {
    max-height:32rem;
    max-width:162rem;
    padding: 0;
    font-size:14px;
  }

`;

