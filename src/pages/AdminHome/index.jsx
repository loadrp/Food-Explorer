import { Container, Content } from './styles'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
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
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // debounce de 500ms
  
  

  const navigate = useNavigate();

  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
  
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);
  
    return debouncedValue;
  }

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
    navigate(`/admindetails/${id}`)

  }

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get("/foods?title&tags&category");
      setFoods(response.data);
    }
    fetchFoods();
  }, []);
  
  useEffect(() => {
    async function fetchFoods() {
      if (debouncedSearchTerm !== "") {
        const response = await api.get(`/foods/search?searchQuery=${debouncedSearchTerm}`);
        setFoods(response.data);
      
      } else {
        const response = await api.get("/foods?title&tags&category");
        setFoods(response.data);
      }
    }
    fetchFoods();
  }, [debouncedSearchTerm]);

  useEffect(() => {

    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data);
    }
    fetchTags();
  }, []);

  const uniqueCategories = [...new Set(foods.map((food) => food.category_name))];


  return (
    <Container>
      <Header isAdmin={'True'} setSearchTerm={setSearchTerm} />
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