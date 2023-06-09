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


export function AdminDetails() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate("/admin");
  }

  function handleEdit(){
    navigate("/editfood");
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
      <Header isAdmin={'True'} />
      {
       /* data &&*/
            
        <main>
          <button onClick={handleBack}><BsChevronLeft size={20} />Voltar</button>
          <Content>
            <img width={390} height={389} src={PratoImg} alt="prato" />
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
        
              <Button title="Editar Prato" onClick={handleEdit}>
              </Button>
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