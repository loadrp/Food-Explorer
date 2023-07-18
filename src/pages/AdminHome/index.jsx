import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote, Cards } from './styles'
import { Header } from '../../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { HeroSection } from '../../components/Hero Section'
import { Footer } from '../../components/Footer'
import { SliderCards } from '../../components/SliderCards'



export function AdminHome({ }) {
  const [tags, setTags] = useState("");
  const [tagsSelected, setTagsSelected] = useState([]);
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
    async function fetchFoods() {
      const response = await api.get(`/foods?title&tags&category`);
      setFoods(response.data);
      console.log(response.data)
      
    }
    fetchFoods();
  }, [tagsSelected, searchTerm]);

  const uniqueCategories = [...new Set(foods.map((food) => food.category_name))];


  return (
    <Container>
      <Header isAdmin={'True'} />
      <Content>

        <HeroSection title={"Sabores inigualáveis"} 
        description={"Sinta o cuidado do preparo com ingredientes selecionados"} />
        {uniqueCategories.map((category) => {
          const categoryFoods = foods.filter((food) => food.category_name === category);
          if (categoryFoods.length > 0) {
            
            return (
              <SliderCards
                key={category}
                cardTitle={category}
                foods={categoryFoods}
                isAdmin
              />
            );
          }
          return null;
        })}


      </Content>
      <Footer />
    </Container>
  )
}