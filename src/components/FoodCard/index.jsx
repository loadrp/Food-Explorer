import { Container, HeartIconWrapper, Wrapper } from "./style";
import { SlHeart } from 'react-icons/sl'
import { TiPencil } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import PratoIMG from '../../assets/prato1.png'
import IncrementDecrement from "../IncrementalDecremental";
import { useState } from "react";
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";



export function FoodCard({ title, description, price, imgSrc, imgAlt, isAdmin }) {

  const [counterOrders, setcounterOrders] = useState(0);

  function handleOrders(){
    setcounterOrders(counterOrders + 1);
  }

  const [isFavorite, setIsFavorite] = useState(true);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  function handleEdit(){
    
    navigate("/admindetails");
  
  }


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
      {isAdmin ? (
        <Link to="/admindetails">
          <img src={imgSrc} alt={imgAlt} />

          <h2>{title}</h2>
          <p className="description">{description}</p>
          <p className="price">{price}</p>
        </Link>
      ) :
      <a href="/details">
        <img src={imgSrc} alt={imgAlt} />

        <h2>{title}</h2>
        <p className="description">{description}</p>
        <p className="price">{price}</p>
      </a>
      }
      
      <Wrapper>
        {isAdmin ? <button title={"Editar"} onClick={handleEdit}>Editar</button>
          : [<IncrementDecrement />, <button onClick={handleOrders}>Incluir</button>]}


      </Wrapper>

    </Container>


  )


}