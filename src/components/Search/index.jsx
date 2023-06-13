import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import{ Container } from './styles'

export function Search() {
  return(

      <Container>
        <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch} />

      </Container>
   
  )
}