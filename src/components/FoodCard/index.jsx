import { Container, HeartIconWrapper, Wrapper } from "./style";
import { SlHeart } from 'react-icons/sl'
import { TiPencil } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import PratoIMG from '../../assets/prato1.png'
import IncrementDecrement from "../IncrementalDecremental";
import { useState } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";



export function FoodCard({ title, description, price, imgSrc, imgAlt, isAdmin }) {

  const [isFavorite, setIsFavorite] = useState(true);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };


  return (
    <Container>


      <i>
        {isAdmin ? (
          <Link to="/admindetails">

            <TiPencil onClick={Link} size={22} />
          </Link>
        ) : (
          isFavorite ? (
            <SlHeart onClick={handleFavoriteClick} size={22} />
          ) : (
            <AiFillHeart onClick={handleFavoriteClick} size={22} />
          )
        )}
      </i>

      <a href="/details">
        <img src={imgSrc} alt={imgAlt} />

        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </a>
      <Wrapper>
        {isAdmin ? <button title={"Editar"}>Editar</button>
          : [<IncrementDecrement />, <button>Incluir</button>]}


      </Wrapper>

    </Container>


  )


}