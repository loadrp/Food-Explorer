import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
`;

export const Slider = styled.div`
  display: flex;
  max-width: 1120rem;
  margin: 24rem auto;
  flex-wrap: nowrap;
  max-width: 100%;
  
  margin: 2rem auto;

  transition: transform 2s ease-out;
  

  @media (max-width: 768px) {
    margin: 1rem auto;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
  }
`;
  

export const Title = styled.div`
  display: flex;
  align-items: center;

  max-width: 1120rem;
  margin-bottom: 24rem;

  display: flex;
  margin: 0 auto;
  max-width: 100%; /* Certifique-se de que o título ocupe todo o espaço disponível */

  @media (max-width: 768px) {
    margin-bottom: 24rem;
    margin-top: 4rem;
  }
`;

export const FoodCardWrapper = styled.div`
  max-width: 300rem;
  margin-right: 33rem;
 
  align-items: center;
  justify-content: center;

  margin-right: 15rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-right: 5rem;
    overflow: visible;
    scroll-snap-align: start;
  }
`;

export const NavButton = styled.button`
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #888;
    zoom: 1.2;
  }
`;

export const PrevButton = styled(NavButton)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  transition: transform 10s;
  height: 90%;
  z-index: 3;
  max-width: 150rem;
  background: rgba(0, 10, 15, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 15, 0.896796218487395) 0%,
    rgba(0, 10, 15, 0) 100%
  );

  position: absolute;
  top: 45%;
  transform: translateY(-50%);

  > svg {
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    > svg {
    }
  }
`;

export const NextButton = styled(NavButton)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 90%;
  z-index: 3;
  max-width: 150rem;
  background: rgb(0, 10, 15);
  background: linear-gradient(
    90deg,
    rgba(0, 10, 15, 0) 0%,
    rgba(0, 10, 15, 0.896796218487395) 100%
  );

  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  left: 96.4%;
  @media(max-width:768px){
    left:90%;
  }

`;

