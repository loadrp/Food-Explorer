import styled from "styled-components";



export const Slider = styled.div`
  display: flex;
  
  width: 1120px;

  position: relative;
  overflow-x: hidden;
 
  margin: 23rem auto;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  transition: transform 2s ease-out;
  
 
  
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 63rem;
  width: 1120px;
`



export const FoodCardWrapper = styled.div`
  
  

  
  

  width: 300px; /* set the width of each FoodCard */
  margin-right: 27px; /* optional: add some spacing between each FoodCard */
  scroll-snap-align: center;
  
  
  align-items: center;
  justify-content: center;
  
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
  right: 0%;
  position: absolute;
  color: ${({theme}) => theme.COLORS.WHITE};
  transition: transform 10s;

  height: 100%;
  z-index: 3;
  width: 150px;
  background: rgba(0,10,15,0);
  background: linear-gradient(90deg, rgba(0,10,15,0.896796218487395) 0%, rgba(0,10,15,0) 100%);
  transform: matrix(-1, 0, 0, -1, 0, 0);

  >svg{
  
    
    transition: all 0.4s ease-in-out;

  }
  &:hover {
    >svg{
      
    }
  }
  
  
`;

export const NextButton = styled(NavButton)`
  left:0%;
  color: ${({theme}) => theme.COLORS.WHITE};
  height: 100%;
  z-index: 3;
  width: 150px;
  background: rgb(0,10,15);
  background: linear-gradient(90deg, rgba(0,10,15,0) 0%, rgba(0,10,15,0.896796218487395) 100%);
  transform: matrix(-1, 0, 0, -1, 0, 0);
  

  
  position: absolute;

    >svg{
    
    
    transition: all 0.4s ease-in-out;

  }
  &:hover {
    >svg{
      
    }
}
  
`;



