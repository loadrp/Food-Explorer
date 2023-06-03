import { Container } from './styles';
import Banner from '../../assets/banner.png'

export function HeroSection({title,description, children}){
  return(
    <Container>
      
      <div><img src={Banner} alt="macarrons coloridos voando com folhas em volta" /></div>

      <div className='hero-text'>
      <h1>{title}</h1>
      <p>{description}</p>
      </div>

      {children}
    </Container>

  )

}