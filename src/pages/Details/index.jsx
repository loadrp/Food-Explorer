import { Container, Links, Content, DetailsWrapper } from './styles'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tags'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Footer } from '../../components/Footer'
import  PratoImg  from '../../assets/prato1.png'
import { BsChevronLeft } from 'react-icons/bs'
import IncrementDecrement from '../../components/IncrementalDecremental'


export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate("/");
  }
  
  async function handleRemove(){
    const confirm =window.confirm("Deseja realmente remover esta nota?")
    if(confirm){
      await api.delete(`/notes/${params.id}`);
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNoteDetails() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNoteDetails()
  }, []);

  return (
    <Container>
      <Header />
      {
        
            
        <main>
          <button onClick={handleBack}><BsChevronLeft/>Voltar</button>
          <Content>
            <img src={PratoImg} alt="prato" />
            <div className="details">
              <h1>
              Salada Ravanello
              </h1>
              <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.
              </p>
              <div className='div-tags'>
                <Tag title={"Cebola"}/>
                <Tag title={"Cebola"}/>
                <Tag title={"Cebola"}/>
                <Tag title={"Cebola"}/>
                <Tag title={"Cebola"}/>
              </div>
              
              <DetailsWrapper>
              <div className='increments'>
              <IncrementDecrement/>
              <Button title="Incluir R$ 25,00" onClick={handleBack}>
              </Button>
              </div>
              
              </DetailsWrapper>
              
            </div>
           

            {/* {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }

                </Links>
              </Section>
            }

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag key={String(tag.id)}
                      title={tag.name} />
                  ))

                }
                <Tag title="nodejs" />
              </Section>
            } */}

            

          </Content>
          
        </main>
      }
      <Footer/>

    </Container>
  )
}