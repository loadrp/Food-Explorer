import { Container, Links, Content, DetailsWrapper } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tags'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Footer } from '../../components/Footer'
import { BsChevronLeft } from 'react-icons/bs'


export function AdminDetails() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate("/admin");
  }

  function handleEdit(){
    navigate(`/editfood/${params.id}`);
  }
  
  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover esta comida?")
    if(confirm){
      await api.delete(`/foods/${params.id}`);
      navigate("/admin")
    }
  }

  useEffect(() => {
    async function fetchFoodDetails() {
      const response = await api.get(`/foods/search/${params.id}`);
      const data = response.data[0];
      data.tag_name = data.tag_name.split(', ');
      setData(data);
      console.log(data);
    }
    fetchFoodDetails();
  }, [params.id]);

  if (data === null) {
    return <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>Loading...</div>;
  }

  return (
    <Container>
      <Header isAdmin={'True'} />
      <main>
        <button onClick={handleBack}><BsChevronLeft size={20} />Voltar</button>
        <Content>
          { data.image ? 
            <img width={390} height={389} src={data.image} alt="prato" /> :
            <img width={390} height={389} src={PratoImg} alt="default" /> // definir a imagem padrão
          }
          <div className="details">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div className='div-tags'>
              {data.tag_name.map((tag, index) => <Tag key={index} title={tag} />)}
            </div>
            <DetailsWrapper>
              <Button title="Editar Prato" onClick={handleEdit}></Button>
              <Button bgColor={"#333333"} title="Excluir Prato" onClick={handleRemove}></Button> 
            </DetailsWrapper>
          </div>
        </Content>
      </main>
      <Footer/>
    </Container>
  );
}