import { Container, Form} from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { FiLock, FiMail } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import Logo from '../../assets/logo.svg'

export function SignIn(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }
  
  return(
    <Container>
      <img src={Logo} alt="" />
      <h1>Food Explorer</h1>
      <Form>
        <div>
        <h2>Faça login</h2>
        <p>E-mail</p>
        <Input placeholder="Exemplo: email@exemplo.com.br" type="text" icon={FiMail} onChange={e=> setEmail(e.target.value)}/>
        <p>Senha</p>
        <Input placeholder="No mínimo 6 caracteres" type="password" icon={FiLock} onChange={e=> setPassword(e.target.value)}/>
        <Button title="Entrar" onClick={handleSignIn}/>
        <Link to="/cadastrar">Criar uma conta</Link>
          
        </div>
      

      </Form>

    

    </Container>

  );
}