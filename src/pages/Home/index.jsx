import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote, Cards } from './styles'
import { Header } from '../../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { HeroSection } from '../../components/Hero Section'
import { Footer } from '../../components/Footer'
import { SliderCards }from '../../components/SliderCards'




export function Home({ }) {
  const [tags, setTags] = useState("");
  const [tagsSelected, setTagsSelected] = useState([]);
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      return setTagsSelected([])

    }
    const alreadySelected = tagsSelected.includes(tagName)

    if (alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected(prevState => [...prevState, tagName]);
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)

  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data);
      console.log(response.data)
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/foods?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data);

    }
    fetchNotes()

  }, [tagsSelected, search])

  const [totalItems, setTotalItems] = useState(0);

  const handleUpdateTotalItems = (newTotalItems) => {
    setTotalItems(newTotalItems);
  };

  return (
    <Container>
      <Header isAdmin={'False'} totalItems={totalItems}/>
      <Content>
        <HeroSection title={"Sabores inigualáveis"} description={"Sinta o cuidado do preparo com ingredientes selecionados"} />
      <SliderCards cardTitle={"Sobremesas"} onUpdateTotalItems={handleUpdateTotalItems}/>
      <SliderCards cardTitle={"Sobremesas"} onUpdateTotalItems={handleUpdateTotalItems}/>
      <SliderCards cardTitle={"Sobremesas"} onUpdateTotalItems={handleUpdateTotalItems}/>
      </Content>
      <Footer />
    </Container>
  )
}