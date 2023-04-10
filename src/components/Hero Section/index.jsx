import { Container } from './styles';
import Banner from '../../assets/banner.png'

export function HeroSection({title,description, children}){
  return(
    <Container>
      <img src={Banner} alt="macarrons coloridos voando com folhas em volta" />
      <div className='hero-text'>
      <h1>{title}</h1>
      <p>{description}</p>
      </div>

      {children}
    </Container>

  )

}