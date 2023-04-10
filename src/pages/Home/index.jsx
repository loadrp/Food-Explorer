import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote, Cards } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { HeroSection } from '../../components/Hero Section'
import { Footer } from '../../components/Footer'
import { FoodCard } from '../../components/FoodCard'



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
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data);

    }
    fetchNotes()

  }, [tagsSelected, search])

  return (
    <Container>
      <Header />
      <Content>
        <HeroSection title={"Sabores inigualáveis"} description={"Sinta o cuidado do preparo com ingredientes selecionados"} />
      </Content>
      <Footer />
      <Cards>
        <FoodCard title={"Spaguetti Gambe"} description={"Massa fresca com camarões e pesto. "} price={"R$ 79,97"} />
      </Cards>
    </Container>
  )
}