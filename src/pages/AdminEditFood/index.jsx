import { Header } from '../../components/Header'
import { Container, Form, Wrapper } from './styles'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { FoodTag } from '../../components/FoodTag'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import { BsChevronDown, BsChevronLeft, BsUpload } from 'react-icons/bs'
import { Footer } from '../../components/Footer'



export function AdminEditFood() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTag] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTag(prevState => [...prevState, newTag]);
    setNewTag("")
  }

  function handleKeyPressTag(e) {
    if (e.key === "Enter") {
      setTag(prevState => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleRemoveTag(deleted) {
    setTag(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!name) {
      return alert("Digite o o nome da comida a ser cadastrada")
    }
    if (!description) {
      return alert("Digite a descrição da comida a ser cadastrada")
    }
    if (!price) {
      return alert("Você deixou a comida sem preço definido")
    }
    if (!category) {
      return alert("Você deixou a categoria da comida em branco")
    }
    if (newTag) {
      return alert("Você deixou alguma tag sem adicionar")
    }

    await api.post("/foods", {
      name,
      description,
      price,
      category_name : category,
      tags
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
                onChange={e => setName(e.target.value)}
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
                <select onChange={e=> setCategory(e.target.value)} id="category" >
                  <option value="0" selected disabled>Selecione a categoria do prato</option>
                  <option value="1">Comida Italiana</option>
                  <option value="2">Comida Mexicana</option>
                  <option value="3">Comida Japonesa</option>
                  <option value="4">Sobremesas</option>

                </select>
              </label>
            </Wrapper>

          </div>

          <div className="ingredients">
            <div className="ingredients-section">
              <p>Ingredientes</p>
              <div className='ingredient-tag'>

                {
                  tags.map((tag, index) => (
                    <FoodTag
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}

                    />
                  ))
                }

                <FoodTag
                  isNew
                  placeholder="Adicionar Tag"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                  onKeyPress={handleKeyPressTag}
                />

              </div>
            </div>

            <Wrapper>
              <p>Preço</p>
              <Input
              onChange={e => setPrice(e.target.value)}
              priceTag={"R$"} 
              placeholder={"Preço"}></Input>
            </Wrapper>
          </div>

          <Wrapper>
            <p>Descrição</p>
            <Textarea
              placeholder="Descrição da Comida"
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