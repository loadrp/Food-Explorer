import {Header} from '../../components/Header'
import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'



export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTag] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTag(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleAddLink(){
      setLinks(prevState => [...prevState, newLink])
      setNewLink("");
  }
  
  function handleKeyPress(e){
    if(e.key === "Enter"){
      setLinks(prevState => [...prevState, newLink])
      setNewLink("");
      
    }
  }

  function handleKeyPressTag(e){
    if(e.key === "Enter"){
    setTag(prevState => [...prevState, newTag]);
    setNewTag("");
    }
  }

  function handleRemoveLink(deleted){
    setLinks( prevState => prevState.filter(link => link !== deleted))
  }

  function handleRemoveTag(deleted){
    setTag( prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota a ser cadastrada")
    }
    if(!description){
      return alert("Digite o título da nota a ser cadastrada")
    }
    if(newLink){
      return alert("Você deixou um Link sem adicionar")
    }
    if(newTag){
      return alert("Você deixou alguma tag sem adicionar")
    }
    
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })
    alert("Nota cadastrada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
    <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input 
          placeholder="Título"
          onChange={ e=> setTitle(e.target.value)}
          
          />
          <Textarea 
          placeholder="Observações"
          onChange={ e=> setDescription(e.target.value)}
          />
          
          <Section title="Links úteis">
            {
              links.map(( link, index) =>(
                <NoteItem 
                key ={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
                
            />
              ))
            }
            <NoteItem 
                isNew 
                placeholder="Novo link"
                value={newLink}
                onChange={e=> setNewLink(e.target.value)}
                onClick={handleAddLink}
                onKeyPress ={handleKeyPress}
            />
          </Section>

          <Section title="Tags">
            <div className='tags'>
            {
              tags.map((tag,index) => (
                <NoteItem
                  key={String(index)}
                  value = {tag}
                  onClick={()=>{handleRemoveTag(tag)}}
                />
              ))
            }
            
              <NoteItem 
              isNew 
              placeholder="Nova Tag"
              onChange={ e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
              onKeyPress ={handleKeyPressTag}
              />
            </div>
          </Section>
          <Button 
          title="Salvar"
          onClick={handleNewNote}/>
                  
        </Form>
        
      </main>
    </Container>
  )
}