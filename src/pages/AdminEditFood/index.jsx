import { Header } from '../../components/Header'
import { Container, Form, Wrapper } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { BsChevronDown, BsChevronLeft, BsUpload } from 'react-icons/bs'
import { Footer } from '../../components/Footer'



export function AdminEditFood() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTag] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTag(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setLinks(prevState => [...prevState, newLink])
      setNewLink("");

    }
  }

  function handleKeyPressTag(e) {
    if (e.key === "Enter") {
      setTag(prevState => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleRemoveTag(deleted) {
    setTag(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite o título da nota a ser cadastrada")
    }
    if (!description) {
      return alert("Digite o título da nota a ser cadastrada")
    }
    if (newLink) {
      return alert("Você deixou um Link sem adicionar")
    }
    if (newTag) {
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

  return (
    <Container>
      <Header isAdmin={'True'}/>

      <main>
        <Form>
          <header>
            <h1>Editar Prato</h1>

            <Link to="/">
              <BsChevronLeft size={15} /> Voltar</Link>
          </header>
          <div className='first-container'>
            <Wrapper>
              <p>Imagem do Prato</p>
              <div className='input-file-img'>
                <label htmlFor="img-prato">
                  <BsUpload size={18} />
                  <p>Selecione a imagem</p>
                  <input type="file" id="img-prato"></input>
                </label>
              </div>
            </Wrapper>
            <Wrapper>
              <p>Nome</p>
              <Input
                placeholder="Ex: Salada Ceasar"
                onChange={e => setTitle(e.target.value)}
              />
            </Wrapper>

            <Wrapper>
              <p>Categoria</p>
              <label for="category" id="selectWrapper">

                <div id="selectArrow" onClick={() => {
                  document.querySelector('select')
                }}>
                  <label htmlFor="category">
                    <BsChevronDown size={20} />

                  </label>
                </div>
                <select id="category" >
                  <option value="0" selected disabled>Selecione a categoria do prato</option>
                  <option value="1">Teste1

                  </option>

                </select>
              </label>
            </Wrapper>

          </div>

          <div className="ingredients">
            <div className="ingredients-section">
              <p>Ingredientes</p>
              <div className='ingredient-tag'>

                {
                  links.map((link, index) => (
                    <NoteItem
                      key={String(index)}
                      value={link}
                      onClick={() => handleRemoveLink(link)}

                    />
                  ))
                }

                <NoteItem
                  isNew
                  placeholder="Adicionar Tag"
                  value={newLink}
                  onChange={e => setNewLink(e.target.value)}
                  onClick={handleAddLink}
                  onKeyPress={handleKeyPress}
                />

              </div>
            </div>

            <Wrapper>
              <p>Preço</p>
              <Input price={"R$"} placeholder={"Preço"}></Input>
            </Wrapper>
          </div>

          <Wrapper>
            <p>Descrição</p>
            <Textarea
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />
          </Wrapper>

          <div style={{display: "flex", gap:"20rem"}}>
            <Button
              title="Excluir Prato"
              bgColor={"#333333"}
              onClick={handleNewNote} />

            <Button
              title="Salvar Alterações"
              onClick={handleNewNote} />


          </div>

        </Form>

      </main>
      <Footer />
    </Container>
  )
}