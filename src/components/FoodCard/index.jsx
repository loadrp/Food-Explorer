import { Container, HeartIconWrapper, Wrapper } from "./style";
import { SlHeart } from 'react-icons/sl'
import { TiPencil } from 'react-icons/ti'
import { AiFillHeart } from 'react-icons/ai'
import PratoIMG from '../../assets/prato1.png'
import IncrementDecrement from "../IncrementalDecremental";
import { useState } from "react";
import { Button } from "../Button";
import { Link, useNavigate } from "react-router-dom";



export function FoodCard({id, title, description, price, imgSrc, imgAlt, isAdmin }) {

  const [counterOrders, setcounterOrders] = useState(0);

  function handleOrders() {
    setcounterOrders(counterOrders + 1);
  }

  const [isFavorite, setIsFavorite] = useState(true);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  function handleEditAdmin(id) {

    navigate(`/admindetails/${id}`);

  }

  function handleDetailsUser(id) {

    navigate(`/details/${id}`);

  }


  return (
    <Container>


      <i>
        {isAdmin ? (
          <Link to={`/admindetails/${id}`} >
            <TiPencil onClick={()=> handleEditAdmin(id)} size={22} />
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
        <Link to={`/admindetails/${id}`}>
          <img src={imgSrc} alt={imgAlt} />

          <h2>{title}</h2>
          <p className="description">{description}</p>
          <p className="price">{price}</p>
        </Link>
      ) :
        <Link to={`/details/${id}`}>
          <img src={imgSrc} alt={imgAlt} />

          <h2>{title}</h2>
          <p className="description">{description}</p>
          <p className="price">{price}</p>
        </Link>
      }

      <Wrapper>
        {isAdmin ? <button title={"Editar"} onClick={()=> handleEditAdmin(id)}>Editar</button>
          : [<IncrementDecrement />, <button onClick={handleOrders}>Incluir</button>]}
      </Wrapper>

    </Container>


  )


}