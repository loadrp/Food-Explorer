import { Container } from "./style";
import { SlHeart } from 'react-icons/sl'
import PratoIMG  from '../../assets/prato1.png'


export function FoodCard({title, description, price}) {
  return (
    <Container>
      <>
        <img src={PratoIMG} alt="" />
        {SlHeart}
        <h2>{title}</h2>
        <p>{description}</p>
        <p className="price">{price}</p>
        <button>Incluir</button>
      </>

    </Container>


  )


}