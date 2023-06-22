import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, bgColor, ...rest }) {
  return (
    <Container 
    style={{backgroundColor: bgColor?  bgColor : null }}
    type="button" 
    disabled={loading} 
    {...rest}>

     {Icon && <Icon />}
     
    {loading ? "Carregando.." : title}
    </Container>
  );
}