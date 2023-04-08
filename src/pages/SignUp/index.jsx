import { Container, Form} from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { FiLock, FiLogIn, FiMail, FiUser } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom'
import {useState} from "react";
import {api} from '../../services/api'
import Logo from '../../assets/logo.svg'


export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
  
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }
    
    api.post("/users", {name , email, password})
    .then(()=>{
      alert("Usuário cadastrado com sucesso!");
      navigate("/")
      return
    })
    .catch(error => {
      console.log(error)
      if(error.response){
        return alert(error.response.data.message);
      }
      else{
        return alert("Não foi possível cadastrar");
      }
    });
  
  }

  return(
    <Container>
        <img src={Logo} alt="logo food explorer" />
        <h1>Food Explorer</h1>
      <Form>
       <div>
       <h2>Crie sua conta</h2>
        <p>Nome</p>
        <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>
        <p>E-mail</p>
        <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        <p>Senha</p>
        <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        
        <Button  title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">Já tenho uma conta</Link>
       </div>
       

      </Form>

      

    </Container>

  );
}