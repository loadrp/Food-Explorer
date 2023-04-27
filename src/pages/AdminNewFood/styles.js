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
    cursor: pointer;
    
  }

  #selectWrapper{
    width: 351px;
    position: relative;
   
    color: ${({theme}) => theme.COLORS.WHITE};
  }

  select{
    width: 100%;
    
    background-color: ${({theme}) => theme.COLORS.BG_800};
    padding: 10rem;
    appearance: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
    height: 48rem;
    border: none;
    border-radius: 10px;
    
  }

  input[type=file]{
   display: none;
  }
`

export const Form = styled.form`
  width: 1120px;
  margin: 38px auto;

  
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 36rem;

    a {
      font-size: 20rem;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }
  >.first-container{
    display: flex;
    gap:32rem;
    margin-bottom: 32rem;
   
  }
  > .ingredients {
    display: flex;
    margin: 0 auto;
    width: 1120px;
    margin-bottom: 32rem;
  }

  > div.ingredients > div:nth-child(2) {
    margin-left: 32rem;
    width: 250px;
  }

  > div.ingredients > div.ingredients-section > div{
    display: flex;
    width: 837px;
    margin-top: 8rem;
    background-color: ${({theme}) => theme.COLORS.BG_800};
    flex-wrap: wrap;
    border-radius: 10px;
    
  }

  > .ingredients-section{
    gap: 32rem;
  }

  `

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  
 

  >p{
    margin-bottom: 8rem;
    
  }


`;


