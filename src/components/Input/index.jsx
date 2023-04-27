import { Container } from "./styles";

export function Input({icon: Icon, price:Price, ...rest}){
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <p>
      {Price}
        
      </p>
        <input {...rest}/>
    </Container>
  )
};