import styled from "styled-components";



export const Slider = styled.div`
  display: flex;
  
  max-width: 1120rem;
  position: relative;
  margin: 24rem auto;
  flex-wrap: nowrap; /* Impede que os itens quebrem para a próxima linha */
  max-width: 100%; /* Certifique-se de que o slider ocupe todo o espaço disponível */
  overflow-x: auto; /* Permite rolar horizontalmente */
  margin: 2rem auto; /* Reduza a margem superior para dispositivos móveis */
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  transition: transform 2s ease-out;
  
  @media (max-width: 768px) {
    margin: 1rem auto; /* Ajuste a margem superior para dispositivos móveis menores */
  
  }

  
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: 1120rem;
  margin-bottom: 24rem;

  display: flex;
  flex-direction: row;
  margin: 0 auto;
  margin-top: 4rem; /* Reduza a margem superior para dispositivos móveis */
  max-width: 100%; /* Certifique-se de que o título ocupe todo o espaço disponível */
  
  @media (max-width: 768px) {
    margin-bottom: 24rem;
    

  }
  
`



export const FoodCardWrapper = styled.div`

  max-width: 300rem; /* set the width of each FoodCard */
  margin-right: 33rem; /* optional: add some spacing between each FoodCard */
 
  
  
  align-items: center;
  justify-content: center;

  max-width: 300px; /* Defina a largura máxima de cada FoodCard */
  margin-right: 15rem; /* Adicione algum espaço entre cada FoodCard */
  
  
  @media (max-width: 768px) {
    max-width: 100%; /* Faça com que os FoodCards ocupem todo o espaço disponível */
    /* Remova o espaço entre os FoodCards */
    margin-right: 5rem;
    overflow: visible;
    scroll-snap-align: start; /* Alinhe os FoodCards no início da viewport */
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
  right: 0%;
  position: absolute;
  color: ${({theme}) => theme.COLORS.WHITE};
  transition: transform 10s;

  height: 100%;
  z-index: 3;
  max-width: 150px;
  background: rgba(0,10,15,0);
  background: linear-gradient(90deg, rgba(0,10,15,0.896796218487395) 0%, rgba(0,10,15,0) 100%);
  transform: matrix(-1, 0, 0, -1, 0, 0);

  @media (max-width: 768px) {
    /* Ocultar o botão de navegação para dispositivos móveis */
  
  }

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
  max-width: 150px;
  background: rgb(0,10,15);
  background: linear-gradient(90deg, rgba(0,10,15,0) 0%, rgba(0,10,15,0.896796218487395) 100%);
  transform: matrix(-1, 0, 0, -1, 0, 0);

  @media (max-width: 768px) {
     /* Oculte o botão de navegação seguinte para dispositivos móveis */
  }

  

  
  position: absolute;

    >svg{
    
    
    transition: all 0.4s ease-in-out;

  }
  &:hover {
    >svg{
      
    }
}
  
`;



