import { Container, HeartIconWrapper, Wrapper } from "./style";
import { SlHeart } from 'react-icons/sl'
import { AiFillHeart } from 'react-icons/ai'
import PratoIMG from '../../assets/prato1.png'
import IncrementDecrement from "../IncrementalDecremental";
import { useState } from "react";


export function FoodCard({ title, description, price, imgSrc, imgAlt, isAdmin }) {

  const [isFavorite, setIsFavorite] = useState(true);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };


  return (
    <Container>
      <>
        
        <i>{isFavorite ? 
        <SlHeart onClick={handleFavoriteClick} size={22}/> : 
        <AiFillHeart onClick={handleFavoriteClick} size={22}/>}      
        </i>
        
        <a href="/details">
        <img src={imgSrc} alt={imgAlt} />
        
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="price">{price}</p>
        </a>
        <Wrapper>
          {isAdmin ? <button>Editar</button> 
          : [<IncrementDecrement/> , <button>Incluir</button>]}


        </Wrapper>
      </>
    </Container>


  )


}