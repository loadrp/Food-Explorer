import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  background-color: ${({theme}) => theme.COLORS.BG_100};
  display: grid;
  grid-template-rows: 105rem auto 77rem;
  grid-template-areas:
  "header"
  "content"
  "footer";

  > main {
    grid-area: content;
    overflow-y: auto;
    @media (max-width:768px) {
      margin: 2rem 15rem;
      
    }
 

  }

  .tags{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .input-file-img {
    background-color: ${({theme}) => theme.COLORS.BG_800};
    width: 100%;
    height: 48rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
    border-radius: 10px;

    label {
      cursor: pointer;
      gap: 8rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      
    }
  }

  #selectArrow{
    position: absolute;
    top: 30%;
    right: 0;
    margin-right: 5rem;
 
    
  }

  #selectWrapper{
    width: 100%;
    position: relative;
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  select{
 
    background-color: ${({theme}) => theme.COLORS.BG_800};
    padding: 10rem;
    appearance: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    height: 48rem;
    border: none;
    border-radius: 10px;
    width: 100%;
  }

  input[type=file]{
   display: none;
  }
`

export const Form = styled.form`
  max-width: 1120rem;
  margin: 38rem auto;

  @media (max-width:768px) {
      display: flex;
      flex-direction: column;
      max-width: 550rem;
      
    }

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36rem;

    h1{
      font-size: 25rem;
      @media (max-width:768px) {
      font-size: 22rem;

    }

    }

    a {
      font-size: 20rem;
      color: ${({theme}) => theme.COLORS.WHITE};
      @media (max-width:768px) {
      font-size: 15rem;
      
    }
    }
  }

  >.first-container{
    display: flex;
    gap:32rem;
    margin-bottom: 32rem;

    > div:nth-child(3){
    max-width: 100%;
  }

    @media (max-width:768px) {
      flex-direction: column;
      max-width: 700rem;
      align-items: start;
      justify-content: start;
      
    }
   
  }
  > .ingredients {
    display: flex;
    max-width: 100%;
    margin-bottom: 32rem;
  }

  > div.ingredients > div:nth-child(2) {
    margin-left: 32rem;
    max-width: 100%;
  }

  > div.ingredients > div.ingredients-section > div{
    display: flex;
    max-width: 837rem;
    margin-top: 8rem;
    background-color: ${({theme}) => theme.COLORS.BG_800};
    flex-wrap: wrap;
    border-radius: 10px;
    
  }

  > .ingredients-section{
    gap: 32rem;
  }

  > div:nth-child(5){
    
    margin-top: 20px;
    >button{
      width: 100%;
    }
  }

  >button{
    width: 100%;
  }

  `

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @media (max-width:768px) {
    
      
    }
 

  >p{
    margin-bottom: 8rem;
    
  }


`;


