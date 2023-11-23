import {RxPlus} from 'react-icons/rx'
import { Container } from "./styles";

export function ButtonAdd({title, ...rest}) {
  return(
    <Container 
      type="button"
      {...rest}
    >
      <RxPlus style={{fontSize:'16px'}}/>
        {title}
    </Container>
  )
}