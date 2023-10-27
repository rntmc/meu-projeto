//Nao funciona

import { Container } from './styles'
import { Tag } from '../Tag'

export function Note({data, ...rest}) {
  return(
    <Container>
      
        <footer>
        {data.tags && data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)}       
        </footer>
    </Container>
  )
}